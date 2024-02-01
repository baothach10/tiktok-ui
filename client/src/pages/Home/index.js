import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Post from "~/components/Post";
import { useEffect, useState } from "react";
// import axios from "axios";

const cx = classNames.bind(styles)

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/posts').then(res => res.json());
            setPosts(response)
        }
        fetchData()
    }, [])

    return (
        posts.length > 0 &&
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts?.map(post => (
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

export default Home;