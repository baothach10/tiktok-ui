import classNames from "classnames/bind";

import styles from './Home.module.scss';
import Post from "~/components/Post";
import { useEffect, useState } from "react";
// import axios from "axios";

const cx = classNames.bind(styles)

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchA = async () => {
            const data = await fetch('http://localhost:4000/api/posts', {
                headers: {
                    'Accept': 'application/json'
                }
            })
            setPosts(await data.json())

        }
        fetchA()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts?.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        avatar={post.avatar}
                        nickname={post.nickname}
                        fullName={post.fullName}
                        title={post.title}
                        music={post.music}
                        video={require(post.video)}
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