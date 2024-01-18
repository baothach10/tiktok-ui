import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from "react";

import styles from './PostContent.module.scss';
import PostSidebar from "../PostSidebar/PostSidebar";
import ProgressBar from "./ProgressBar";

const cx = classNames.bind(styles)

function PostContent({ id, video, likes, comments, saved, share }) {
    const [played, setPlayed] = useState(true);
    const [muted, setMuted] = useState(true);
    const vidRef = useRef(null);
    let videoDuration;

    const handlePlay = () => {
        setPlayed(prev => !prev)
    }

    const handleMute = () => {
        setMuted(prev => !prev)
    }

    const handleLoadedMetadata = () => {
        console.log(vidRef.current.duration)
        console.log(vidRef.current.currentTime)
    }

    useEffect(() => {
        if (played) {
            vidRef.current.play();
        } else {
            vidRef.current.pause();
        }
    }, [played]);

    return (
        <div id={`video-wrapper-${id}`} className={cx('video-wrapper')}>

            <div className={cx('video-player')} onClick={handlePlay}>
                <video id={`post-${id}`} ref={vidRef} src={video} width={'336px'} height={'600px'} preload="true" muted={muted} loop={true} controls={true} />
            </div>

            {/* <div className={cx('video-toolbar-wrapper')}>
                <div className={cx('video-toolbar')}>
                    <div className={cx('play-pause-btn')} onClick={handlePlay} >
                        {played ? <PauseIcon /> : <PlayIcon />}
                    </div>
                    <div className={cx('sound-btn')} onClick={handleMute}>
                        {muted ? <SoundLessIcon /> : <SoundIcon />}
                    </div>
                </div>
                <div className={cx('video-seekbar-wrapper')}>
                    <div className={cx('video-seekbar-container')}>
                        <ProgressBar vidRef={vidRef.current} done={10} />
                    </div>
                    <div className={cx('video-duration')}>
                        00:00/00:15
                    </div>
                </div>
            </div> */}

            <PostSidebar
                likes={likes}
                comments={comments}
                saved={saved}
                share={share}
            />
        </div>
    );
}

PostContent.propTypes = {
    id: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    saved: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
}

export default PostContent;