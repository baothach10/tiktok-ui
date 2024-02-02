import classNames from "classnames/bind";
import { useSelector } from "react-redux";

import styles from './Following.module.scss';
import Post from "~/components/Post";

const cx = classNames.bind(styles)

function Following() {
    const posts = useSelector(state => state.posts.postsList)

    return (
        posts.length > 0 &&
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        avatar={post.user.avatar}
                        nickname={post.user.nickname}
                        fullName={post.user.fullName}
                        title={post.title}
                        music={post.music}
                        video={process.env.REACT_APP_DB_URL_HEADER + post.video}
                        likes={post.likes}
                        comments={post.comments}
                        saved={post.saved}
                        share={post.share}
                    />
                ))}
            </div>
        </div>
    );
}

export default Following;