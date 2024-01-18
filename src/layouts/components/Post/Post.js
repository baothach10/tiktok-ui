import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Post.module.scss';
import PostItem from "src/layouts/components/Post/PostItem/PostItem";

const cx = classNames.bind(styles)

function Post({ id, avatar, nickname, fullName, title, music, video, likes, comments, saved, share }) {
    return (
        <div id={`post-${id}`} className={cx('wrapper')}>
            <a href="./profile">
                <div id={`avatar-${id}`} className={cx('avatar-wrapper')}>
                    <img
                        src={avatar}
                        alt="User Avatar"
                        className={cx('user-avatar')}
                    />
                </div>
            </a>
            <PostItem
                id={id}
                nickname={nickname}
                fullName={fullName}
                title={title}
                music={music}
                video={video}
                likes={likes}
                comments={comments}
                saved={saved}
                share={share}
            />
        </div>
    );
}

Post.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    saved: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
}

export default Post;