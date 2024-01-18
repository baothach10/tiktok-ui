import classNames from "classnames/bind";

import styles from './Home.module.scss'
import Post from "~/layouts/components/Post";

const cx = classNames.bind(styles)

const posts = [
    {
        id: '1',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor',
        music: '~/assets/media/music/music.mp3',
        video: require('~/assets/media/video/giphy.mp4'),
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400, 
    },
    {
        id: '2',
        avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
        nickname: 'iamkangaroolover',
        fullName: 'John Stone',
        title: 'Lorem ipsum dolor, sit amet consectetur ajhsdh aisdhia udjai dsag elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: 'src/assets/media/music/music.mp3',
        video: require('~/assets/media/video/kangaroo.mp4'),
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400, 
    },
    {
        id: '3',
        avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
        nickname: 'chillingcorner',
        fullName: 'Albert Smith',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: 'src/assets/media/music/music.mp3',
        video: require('~/assets/media/video/something.mp4'),
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400, 
    },
    {
        id: '4',
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: 'src/assets/media/music/music.mp3',
        video: require('~/assets/media/video/iphone15.mp4'),
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400, 
    }
]

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