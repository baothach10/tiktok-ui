import classNames from "classnames/bind";

import styles from './Following.module.scss';
import Post from "~/components/Post";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles)

function Following() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/posts').then(res => res.json());
            setPosts(response)
        }
        fetchData()
    }, [])
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

export default Following;