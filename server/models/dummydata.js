const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const users = [
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        checked: true,
        following: 100,
        followers: 1000000,
        likes: 20000000000,
        bio: 'World Class Company\nBased in Silicon Valley',
        link: 'https://www.facebook.com/apple',
    },
    {
        avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
        nickname: 'iamkangaroolover',
        fullName: 'John Stone',
        checked: true,
        following: 100,
        followers: 1000000,
        likes: 2000,
    },
    {
        avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
        nickname: 'chillingcorner',
        fullName: 'Albert Smith',
        following: 100,
        followers: 1000000,
        likes: 2000,
    },
    {
        avatar: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png",
        nickname: 'Google',
        fullName: 'Google LLC',
        checked: true,
        following: 100,
        followers: 1000000,
        likes: 2000,

    },
    {
        avatar: 'https://photo-cms-tinnhanhchungkhoan.epicdn.me/w660/Uploaded/2024/WpxlCdjwi/2019_01_22/1_CLMU.jpg',
        nickname: 'vinfastmaidinh',
        fullName: 'John Nguyen',
        following: 100,
        followers: 1000000,
        likes: 2000,
    }
];

const posts = [
    {
        title: 'Lorem ipsum dolor',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/giphy.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
        UserId: 1,
        nickname: 'iamkangaroolover',
        fullName: 'John Stone',
        title: 'Lorem ipsum dolor, sit amet consectetur ajhsdh aisdhia udjai dsag elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/kangaroo.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 2 }
        },
    },
    {
        avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
        nickname: 'chillingcorner',
        fullName: 'Albert Smith',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/something.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 2 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    },
    {
        avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
        nickname: 'thisisrealapple',
        fullName: 'Apple Company',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
        music: '../../assets/media/music/music.mp3',
        video: '../../assets/media/video/iphone15.mp4',
        likes: 100,
        comments: 200,
        saved: 300,
        share: 400,
        views: 10000000,
        userID: {
            connect: { id: 1 }
        },
    }
];

const playlists = [
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 1',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 2',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 3',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 4',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 5',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 6',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 7',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 8',
        userID: {
            connect: { id: 1 }
        }
    },
    {
        cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
        title: 'Playlist 9',
        userID: {
            connect: { id: 1 }
        }
    },
];

const playlistPosts = [
    {
        postID: 1,
        playlistID: 1,
    },
    {
        postID: 2,
        playlistID: 1,
    },
    {
        postID: 3,
        playlistID: 1,
    },
    {
        postID: 1,
        playlistID: 2,
    },
    {
        postID: 2,
        playlistID: 2,
    },
    {
        postID: 3,
        playlistID: 2,
    },
    {
        postID: 9,
        playlistID: 2,
    },
    {
        postID: 1,
        playlistID: 3,
    },
    {
        postID: 2,
        playlistID: 3,
    },
    {
        postID: 3,
        playlistID: 3,
    },
    {
        postID: 5,
        playlistID: 3,
    },
    {
        postID: 1,
        playlistID: 4,
    },
    {
        postID: 2,
        playlistID: 4,
    },
    {
        postID: 3,
        playlistID: 4,
    },
    {
        postID: 6,
        playlistID: 4,
    },
    {
        postID: 2,
        playlistID: 5,
    },
    {
        postID: 3,
        playlistID: 5,
    },
    {
        postID: 4,
        playlistID: 5,
    },
    {
        postID: 1,
        playlistID: 6,
    },
    {
        postID: 2,
        playlistID: 6,
    },
    {
        postID: 3,
        playlistID: 6,
    },
    {
        postID: 7,
        playlistID: 6,
    },
    {
        postID: 8,
        playlistID: 6,
    },
    {
        postID: 1,
        playlistID: 7,
    },
    {
        postID: 2,
        playlistID: 7,
    },
    {
        postID: 3,
        playlistID: 7,
    },
    {
        postID: 10,
        playlistID: 7,
    },
    {
        postID: 1,
        playlistID: 8,
    },
    {
        postID: 2,
        playlistID: 8,
    },
    {
        postID: 3,
        playlistID: 8,
    },
    {
        postID: 11,
        playlistID: 8,
    },
    {
        postID: 1,
        playlistID: 9,
    },
    {
        postID: 2,
        playlistID: 9,
    },
    {
        postID: 3,
        playlistID: 9,
    },
    {
        postID: 10,
        playlistID: 9,
    },
    {
        postID: 12,
        playlistID: 9,
    },
]