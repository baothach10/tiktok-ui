import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Post from "~/components/Post";
import { postAPI } from "src/services/postAPI";

const cx = classNames.bind(styles)

const posts = await postAPI()

function Home() {
    return (
        posts.data.length > 0 &&
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts.data?.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        user={post.user}
                        title={post.title}
                        music={post.music}
                        video={process.env.REACT_APP_DB_URL_HEADER + post.video}
                        likes={post.userLiked.length}
                        comments={post.comments.length}
                        saved={post.userSaved.length}
                        share={post.share}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;