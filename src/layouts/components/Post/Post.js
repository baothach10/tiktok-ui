import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './Post.module.scss';
import { HeartIcon, MessageIcon2, FlagIcon, ShareIcon } from "src/components/Icons";
import PostItem from "src/layouts/components/Post/PostItem/PostItem";

const cx = classNames.bind(styles)

function Post({avatar, nickname, fullName, title, music, video}) {
    return (
        <div className={cx('wrapper')}>
            <a href="./profile">
                <div className={cx('avatar-wrapper')}>
                    <img 
                        src={avatar}
                        alt="User Avatar"
                        className={cx('user-avatar')}
                    />
                </div>
            </a>
            <PostItem
                nickname={nickname}
                fullName={fullName}
                title={title}
                music={music}
                video={video}
            />
        </div>
    );
}

Post.propTypes = {
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
}

export default Post;