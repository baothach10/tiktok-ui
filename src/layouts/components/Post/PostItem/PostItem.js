import classNames from 'classnames/bind';
import PropTypes from 'prop-types'

import styles from './PostItem.module.scss';
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostSidebar from "./PostSidebar";
import Post from '../Post';

const cx = classNames.bind(styles)


function PostItem({nickname, fullName, title, music, video}) {
    return (
        <div className={cx("post-item-wrapper")}>
            <PostHeader
                nickname={nickname}
                fullName={fullName}
                title={title}
                music={music}
                video={video}
            />
            <PostContent/>
            <PostSidebar/>
        </div>
    );
}

PostItem.propTypes = {
    nickname: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired,
}

export default PostItem;