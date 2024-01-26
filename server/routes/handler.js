const express = require('express');
const router = express.Router();
// const Schemas = require('../models/Schemas.js');

const User = require('../models/Users.js')
const Post = require('../models/Posts.js')
const Playlist = require('../models/Playlists.js');

router.get('/', (req, res) => {
    res.end('hello')
})


router.get('/insert_users', async (req, res) => {

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
            video_ids: [3,4,6,7,8,9,10,11],
            playlist_ids: [1,2,3,4,5,6,7,8,9],
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

    await User.create(users);
    res.end('added');

})

router.get('/insert_posts', async (req, res) => {

    const posts = [
        {
            user_id: 1,
            title: 'Lorem ipsum dolor',
            music: '../../assets/media/music/music.mp3',
            video: '../../assets/media/video/giphy.mp4',
            likes: 100,
            comments: 200,
            saved: 300,
            share: 400,
            views: 10000000,
        },
        {
            user_id: 2,
            avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
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
        },
        {
            user_id: 3,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        },
        {
            user_id: 1,
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
        }
    ];

    await Post.create(posts);
    res.end('added');

})

router.get('/insert_playlists', async (req, res) => {
    const playlists = [
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 1',
            post_ids: [0,1, 2]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 2',
            post_ids: [0,1, 2, 8]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 3',
            post_ids: [0,1, 2, 4]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 4',
            post_ids: [0,1, 2, 5]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 5',
            post_ids: [3, 4, 5]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 6',
            post_ids: [0,1, 2, 5, 6]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 7',
            post_ids: [0,1, 2, 9]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 8',
            post_ids: [0,1, 2, 10]
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 9',
            post_ids: [0,1, 2, 9, 11]
        },
    ]

    await Playlist.create(playlists);
    res.end('added');
})



// router.get('/tweets', async (req, res) => {
//     const tweets = Schemas.Tweets;

//     // this code will get all tweets
//     //const userTweets = await tweets.find({}, (err, tweetData) => {

//     // this code will get all tweets and join the user table
//     const userTweets = await tweets.find({}).populate("user").exec((err, tweetData) => {
//         if (err) throw err;
//         if (tweetData) {
//             res.end(JSON.stringify(tweetData));
//         } else {
//             res.end();
//         }
//     });
// });

// router.post('/addTweet', async (req, res) => {
//     const userTweet = req.body.tweetInput;
//     const user = Schemas.Users;
//     const userId = await user.findOne({username:'eaglefang'}).exec();

//     const newTweet = new Schemas.Tweets({
//         tweet: userTweet,
//         user: userId._id
//     });

//     try {
//         await newTweet.save( (err, newTweetResults) => {
//             if (err) res.end('Error Saving.');
//             res.redirect('/tweets');
//             res.end();
//         });
//     } catch(err) {
//         console.log(err);
//         res.redirect('/tweets');
//         res.end();
//     }
// });

/*

// Uncomment to add a new user document to our users table
// To use this, run the backend server, then go to URL: localhost:4000/addUser

router.get('/addUser', async (req, res) => {
    const user = {username: 'eaglefang', fullname: 'Sensei Johnny'};
    const newUser = new Schemas.Users(user);

    try {
        await newUser.save( async(err, newUserResult) => {
            console.log('New user created!');
            res.end('New user created!');
        });
    } catch(err) {
        console.log(err);
        res.end('User not added!');
    }
});
*/

module.exports = router;