import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './ProfilePost.module.scss'
import { PlayIcon } from "src/components/Icons";
import { format } from "~/pages/Profile";

const cx = classNames.bind(styles)

function ProfilePost({posts}) {
    return (
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
    );
}

ProfilePost.propTypes = {
    posts: PropTypes.array,
}

export default ProfilePost;