import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Profile.module.scss'
import Button from "src/components/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


import { users } from "src/fakedata";
import { FlagIcon, LinkIcon, LockIcon, PersonIcon } from "src/components/Icons";
import { useEffect, useRef, useState } from "react";

const cx = classNames.bind(styles)

function Profile({
    avatar = users[0].avatar,
    nickname = users[0].nickname,
    fullName = users[0].fullName,
    checked = users[0].checked,
    likes = users[0].likes,
    following = users[0].following,
    followers = users[0].followers,
    bio = users[0].bio,
    link = users[0].link,
    playlists = users[0].playlists,
    posts = users[0].videos,
}) {

    function format(number) {
        if (number >= 1000000000) {
            return `${(number / 1000000000).toFixed(1)}B`;
        } else if (number >= 1000000) {
            return `${(number / 1000000).toFixed(1)}M`;
        } else if (number >= 1000) {
            return `${(number / 1000).toFixed(1)}K`;
        } else {
            return number;
        }
    }

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
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                <div className={cx('container')}>
                    <div className={cx('profile-header')}>
                        <div className={cx('info')}>
                            <div className={cx('image-container')}>
                                <span className={cx("image")}>
                                    <img src={avatar} alt={`${nickname}'s avatar`} />
                                </span>
                            </div>
                            <div className={cx('name-container')}>
                                <h1 className={cx('nickname')}>
                                    {nickname}
                                    {!!checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />}
                                </h1>
                                <h2 className={cx('full-name')}>{fullName}</h2>
                                <Button primary className={cx('follow-btn')}>Follow</Button>
                            </div>
                        </div>
                        <h3 className={cx('count-info')}>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(following)}</strong>
                                <span className={cx('subtitle')}>Following</span>
                            </div>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(followers)}</strong>
                                <span className={cx('subtitle')}>Followers</span>
                            </div>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(likes)}</strong>
                                <span className={cx('subtitle')}>Likes</span>
                            </div>
                        </h3>
                        <h2 className={cx('bio')}>
                            {!!bio ? bio : 'No bio yet'}
                        </h2>
                        <div className={cx('link-container')}>
                            {!!link && (
                                <a href={link} className={cx('link-wrapper')}>
                                    <LinkIcon className={cx('link-image')} />
                                    <span className={cx('link')}>{(link.slice(8,).length > 25) ? `${link.slice(8,).slice(0, 24)}...` : link.slice(8,)}</span>
                                </a>
                            )}
                        </div>
                    </div>
                    <div className={cx('profile-body')}>
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
                                                                    <img src={playlist.cover} alt={`${playlist.cover} cover`} className={cx('playlist-card-cover')}/>
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
                                            <div></div>
                                        </div>
                                </div>
                            )}
                            {!!posts && (
                                <div className={cx('three-column-container')}></div>
                            )}
                            {!!!posts && !!!playlists && (
                                <div className={cx('main-detail-wrapper')}>
                                    <div className={cx('main-detail-container')}>
                                        {(isChosen === 'video-feed-2') ? <FlagIcon className={cx('logo')}/> : <PersonIcon className={cx('logo')}/>}
                                        <p className={cx('title')}>{content[isChosen]['title']}</p>
                                        <p className={cx('description')}>{content[isChosen]['description']}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    fullName: PropTypes.string,
    likes: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number,
    bio: PropTypes.string,
    link: PropTypes.string,
    playlists: PropTypes.array,
    posts: PropTypes.array,
}

export default Profile;