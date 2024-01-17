import classNames from "classnames/bind";

import styles from './Home.module.scss'
import Post from "src/layouts/components/Post";

const cx = classNames.bind(styles)

const posts = [
    {
        id: '1',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor',
        music: '~/assets/music/music.mp3',
        video: '~/assets/video/iphone15.mp4'
    },
    {
        id: '2',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur ajhsdh aisdhia udjai dsag elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '~/assets/music/music.mp3',
        video: '~/assets/video/iphone15.mp4'
    },
    {
        id: '3',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '~/assets/music/music.mp3',
        video: '~/assets/video/iphone15.mp4'
    },
    {
        id: '4',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '~/assets/music/music.mp3',
        video: '~/assets/video/iphone15.mp4'
    }
]

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        avatar={post.avatar}
                        nickname={post.nickname}
                        fullName={post.fullName}
                        title={post.title}
                        music={post.music}
                        video={post.video}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;