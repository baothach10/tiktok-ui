const express = require('express');
const router = express.Router();
const User = require('../models/Users.js')
const Post = require('../models/Posts.js')
const Playlist = require('../models/Playlists.js');
const db = require('../database.js')
// const { sequelize } = require('../models');

// import express from 'express';
// // import User from '../models/Users.js';
// // import Post from '../models/Posts.js';
// // import Playlist from '../models/Playlists.js';
// const User = require('../models/Users.js')
// const Post = require('../models/Posts.js')
// const Playlist = require('../models/Playlists.js');

// import { sql } from '@sequelize/core';
// const router = express.Router();

router.get('/', async (req, res) => {
    await db.sync();
    console.log("All models were synchronized successfully.");
    res.end('hello')
})

router.get('/create_dummy_data', (req, res) => {
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
            link: 'https://www.facebook.com/apple'
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

    users.map(async (user) => {
        const newUser = await User.create(user)
    })

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
            UserId: 1,
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
            UserId: 2,
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
            UserId: 3,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
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
            UserId: 1,
        }
    ];

    posts.map(async (post) => {
        const newPost = await Post.create(post)
    })

    const playlists = [
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 1',
            // post_ids: [0, 1, 2]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 2',
            // post_ids: [0, 1, 2, 8]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 3',
            // post_ids: [0, 1, 2, 4]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 4',
            // post_ids: [0, 1, 2, 5]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 5',
            // post_ids: [3, 4, 5]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 6',
            // post_ids: [0, 1, 2, 5, 6]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 7',
            // post_ids: [0, 1, 2, 9]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 8',
            // post_ids: [0, 1, 2, 10]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 9',
            // post_ids: [0, 1, 2, 9, 11]
        },
    ];

    playlists.map(async (playlist) => {
        const newPlaylist = await Playlist.create(playlist)
    })

    res.end('Done')
})

router.get('/create_associations', async (req, res) => {

    const posts = await db.query('select * from users')
    
    console.log(posts)
    res.end('done')
})



// MongoDB

// router.get('/insert_users', async (req, res) => {

//     const users = [
//         {
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             checked: true,
//             following: 100,
//             followers: 1000000,
//             likes: 20000000000,
//             bio: 'World Class Company\nBased in Silicon Valley',
//             link: 'https://www.facebook.com/apple',
//             video_ids: [3, 4, 6, 7, 8, 9, 10, 11],
//             playlist_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//         },
//         {
//             avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
//             nickname: 'iamkangaroolover',
//             fullName: 'John Stone',
//             checked: true,
//             following: 100,
//             followers: 1000000,
//             likes: 2000,
//         },
//         {
//             avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
//             nickname: 'chillingcorner',
//             fullName: 'Albert Smith',
//             following: 100,
//             followers: 1000000,
//             likes: 2000,
//         },
//         {
//             avatar: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png",
//             nickname: 'Google',
//             fullName: 'Google LLC',
//             checked: true,
//             following: 100,
//             followers: 1000000,
//             likes: 2000,

//         },
//         {
//             avatar: 'https://photo-cms-tinnhanhchungkhoan.epicdn.me/w660/Uploaded/2024/WpxlCdjwi/2019_01_22/1_CLMU.jpg',
//             nickname: 'vinfastmaidinh',
//             fullName: 'John Nguyen',
//             following: 100,
//             followers: 1000000,
//             likes: 2000,
//         }
//     ];

//     await User.create(users);
//     res.end('added');

// })

// router.get('/insert_posts', async (req, res) => {

//     const posts = [
//         {
//             user_id: 1,
//             title: 'Lorem ipsum dolor',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/giphy.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 2,
//             avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
//             nickname: 'iamkangaroolover',
//             fullName: 'John Stone',
//             title: 'Lorem ipsum dolor, sit amet consectetur ajhsdh aisdhia udjai dsag elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/kangaroo.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 3,
//             avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
//             nickname: 'chillingcorner',
//             fullName: 'Albert Smith',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/something.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         },
//         {
//             user_id: 1,
//             avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
//             nickname: 'thisisrealapple',
//             fullName: 'Apple Company',
//             title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere. Veritatis facere molestiae earum, commodi dolores dolorem esse dolorum corrupti!',
//             music: '../../assets/media/music/music.mp3',
//             video: '../../assets/media/video/iphone15.mp4',
//             likes: 100,
//             comments: 200,
//             saved: 300,
//             share: 400,
//             views: 10000000,
//         }
//     ];

//     await Post.create(posts);
//     res.end('added');

// })

// router.get('/insert_playlists', async (req, res) => {
//     const playlists = [
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 1',
//             post_ids: [0, 1, 2]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 2',
//             post_ids: [0, 1, 2, 8]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 3',
//             post_ids: [0, 1, 2, 4]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 4',
//             post_ids: [0, 1, 2, 5]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 5',
//             post_ids: [3, 4, 5]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 6',
//             post_ids: [0, 1, 2, 5, 6]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 7',
//             post_ids: [0, 1, 2, 9]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 8',
//             post_ids: [0, 1, 2, 10]
//         },
//         {
//             cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
//             title: 'Playlist 9',
//             post_ids: [0, 1, 2, 9, 11]
//         },
//     ]

//     await Playlist.create(playlists);
//     res.end('added');
// })

// router.get('/api/posts', async (req, res) => {

//     const posts = await Post.find({})
//     res.json(posts[0])
// })


module.exports = router;