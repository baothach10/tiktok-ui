import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import styles from './PostItem.module.scss';
import PostContent from "./PostContent/PostContent";
import PostHeader from "./PostHeader/PostHeader";

const cx = classNames.bind(styles)


function PostItem({ id, user, title, music, video, likes, comments, saved, share }) {
    return (
        <div id={`post-item-${id}`} className={cx("post-item-wrapper")}>
            <PostHeader
                id={id}
                user={user}
                title={title}
                music={music}
            />
            <PostContent
                id={id}
                video={video}
                likes={likes}
                comments={comments}
                saved={saved}
                share={share}
            />
        </div>
    );
}

PostItem.propTypes = {
    id: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    saved: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
}

export default PostItem;