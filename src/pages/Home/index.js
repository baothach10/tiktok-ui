import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Post from "~/layouts/components/Post";
import { posts } from "src/fakedata";

const cx = classNames.bind(styles)

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        avatar={post.avatar}
                        nickname={post.nickname}
                        fullName={post.fullName}
                        title={post.title}
                        music={post.music}
                        video={post.video}
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

export default Home;