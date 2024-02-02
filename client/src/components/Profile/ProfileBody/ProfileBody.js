import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './ProfileBody.module.scss'

import {LockIcon} from "src/components/Icons";
import { useEffect, useRef, useState } from "react";
import ProfilePlaylist from "./ProfilePlaylist";
import ProfilePost from "./ProfilePost";
import ProfilePostEmpty from "./ProfilePostEmpty";
import { format } from "~/pages/Profile";

const cx = classNames.bind(styles)

function ProfileBody({ posts, playlists }) {

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
                <ProfilePlaylist playlists={playlists}/>
            )}
            {!!posts && (
                <ProfilePost posts={posts} format={format}/>
            )}
            {!!!posts && !!!playlists && (
                <ProfilePostEmpty isChosen={isChosen}/>
            )}
        </div>
    );
}

ProfileBody.propTypes = {
    playlists: PropTypes.array,
    posts: PropTypes.array,
}

export default ProfileBody;