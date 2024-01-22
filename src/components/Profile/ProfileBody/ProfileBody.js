import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './ProfileBody.module.scss'

import { FlagIcon, LockIcon, PersonIcon, PlayIcon } from "src/components/Icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles)

function ProfileBody({ posts, playlists, format }) {
    const content = {
        'video-feed-1': {
            title: 'Upload your first video',
            description: 'Your videos will appear here',
        },
        'video-feed-2': {
            title: 'Favorite posts',
            description: 'Your favorite posts will appear here.',
        },
        'video-feed-3': {
            title: 'No liked videos yet',
            description: 'Videos you liked will appear here',
        }
    }

    const postRef = useRef()
    const favoriteRef = useRef()
    const likedRef = useRef()
    const bottomLineRef = useRef()

    const [isChosen, setIsChosen] = useState('video-feed-1')
    const [xCor, setXCor] = useState(0)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(postRef?.current?.offsetWidth);
        setIsChosen(postRef?.current?.id);
    }, [])

    useEffect(() => {
        switch (isChosen) {
            case 'video-feed-1':
                postRef.current.style.color = 'rgb(22, 24, 35)';
                favoriteRef.current.style.color = '';
                likedRef.current.style.color = '';
                break;
            case 'video-feed-2':
                favoriteRef.current.style.color = 'rgb(22, 24, 35)';
                postRef.current.style.color = '';
                likedRef.current.style.color = '';
                break;
            case 'video-feed-3':
                likedRef.current.style.color = 'rgb(22, 24, 35)';
                favoriteRef.current.style.color = '';
                postRef.current.style.color = '';
                break;
            default:
                console.log('error')
        }
    }, [isChosen])

    const handleClick = (ref) => {
        setXCor(ref?.current?.offsetLeft);
        setWidth(ref?.current?.offsetWidth);
        setIsChosen(ref?.current?.id);

    }

    function handleMouseOver(ref) {
        setXCor(ref?.current?.offsetLeft);
        setWidth(ref?.current?.offsetWidth);
    }

    const handleMouseLeave = () => {
        switch (isChosen) {
            case 'video-feed-1':
                setXCor(postRef?.current?.offsetLeft);
                setWidth(postRef?.current?.offsetWidth);
                break;
            case 'video-feed-2':
                setXCor(favoriteRef?.current?.offsetLeft);
                setWidth(favoriteRef?.current?.offsetWidth);
                break;
            case 'video-feed-3':
                setXCor(likedRef?.current?.offsetLeft);
                setWidth(likedRef?.current?.offsetWidth);
                break;
            default:
                console.log('error')
        }
    }


    return (
        <div className={cx('layout-container')}>
            <div className={cx('video-feed')}>
                <p id={'video-feed-1'} className={cx('post')} ref={postRef} onClick={() => handleClick(postRef)} onMouseOver={() => handleMouseOver(postRef)} onMouseLeave={handleMouseLeave}>
                    <span>
                        Videos
                    </span>
                </p>
                <p id={'video-feed-2'} className={cx('favorite')} ref={favoriteRef} onClick={() => handleClick(favoriteRef)} onMouseOver={() => handleMouseOver(favoriteRef)} onMouseLeave={handleMouseLeave}>
                    <LockIcon className={cx('lock-icon')} />
                    <span>
                        Favorites
                    </span>
                </p>
                <p id={'video-feed-3'} className={cx('like')} ref={likedRef} onClick={() => handleClick(likedRef)} onMouseOver={() => handleMouseOver(likedRef)} onMouseLeave={handleMouseLeave}>
                    <LockIcon className={cx('lock-icon')} />
                    <span>
                        Liked
                    </span>
                </p>
                <div ref={bottomLineRef} className={cx('bottom-line')} style={{ transform: `translateX(${xCor}px)`, width: `${width}px` }}></div>
            </div>
            {!!playlists && (
                <div className={cx('outer-playlist-container')}>
                    <p className={cx('title')}>Playlists</p>
                    <div className={cx('playlist-container')}>
                        <div className={cx('inner-playlist-container')}>
                            {playlists.map((playlist, index) => {
                                return (
                                    <a key={index} href={'/'} className={cx('playlist-link')}>
                                        <div className={cx('playlist-card-container')}>
                                            <div className={cx('playlist-card-cover-container')}>
                                                <img src={playlist.cover} alt={`${playlist.cover} cover`} className={cx('playlist-card-cover')} />
                                            </div>
                                            <div className={cx('playlist-card-info-container')}>
                                                <p className={cx('playlist-title')}>{playlist.title}</p>
                                                <p className={cx('playlist-description')}>{`${playlist.posts.length} posts`}</p>
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>
                        <div className={cx('right-btn')}></div>
                    </div>
                    <p className={cx('title')}>Videos</p>
                </div>
            )}
            {!!posts && (
                <div className={cx('three-column-container')}>
                    <div className={cx('post-item-list')} mode={'compact'}>
                        {posts.map((post, index) => {
                            return (
                                <div key={index} className={cx('post-item-container')}>
                                    <div className={cx('post-media-container')}>
                                        <a className={cx('post-link')} href={'/'}>
                                            <div className={cx('player-container')}>
                                                <div className={cx('video-container')}>
                                                    <div className={cx('video-content')}>
                                                        <span>
                                                            <video
                                                                src={post.video}
                                                                preload="true"
                                                                muted={true}
                                                                loop={true}
                                                                onMouseOver={e => e.target.play()}
                                                                onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                                                            />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('video-footer')}>
                                                    <PlayIcon className={cx('play-icon')} />
                                                    <strong>
                                                        {format(post.views)}
                                                    </strong>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className={cx('post-description-wrapper')}>
                                        <div className={cx('post-description-container')}>
                                            <a href={"/"} className={cx('post-description')}>
                                                {(post.title.length > 23) ? `${post.title.slice(0, 23)}...` : post.title}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
            {!!!posts && !!!playlists && (
                <div className={cx('main-detail-wrapper')}>
                    <div className={cx('main-detail-container')}>
                        {(isChosen === 'video-feed-2') ? <FlagIcon className={cx('logo')} /> : <PersonIcon className={cx('logo')} />}
                        <p className={cx('title')}>{content[isChosen]['title']}</p>
                        <p className={cx('description')}>{content[isChosen]['description']}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

ProfileBody.propTypes = {
    playlists: PropTypes.array,
    posts: PropTypes.array,
    format: PropTypes.func,
}

export default ProfileBody;