const express = require('express');
const router = express.Router();
// const db = require('../database.js');
// const { sequelize } = require('../models');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()


// Sequelize
// router.get('/', async (req, res) => {
//     await db.sync();
//     res.end('All models were synchronized successfully.')
// })

router.get('/api/create_dummy_data', async (req, res) => {
    const users = [
        {
            avatar: "https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png",
            account: "apple",
            hashedPassword: "Apple@123",
            nickname: 'thisisrealapple',
            fullName: 'Apple Company',
            bio: 'World Class Company\nBased in Silicon Valley',
            link: 'https://www.facebook.com/apple',
        },
        {
            avatar: "https://media.australian.museum/media/dd/images/red_kangaroo.d517513.width-800.9745cef.jpg",
            account: "johnstone",
            hashedPassword: "John@123",
            nickname: 'iamkangaroolover',
            fullName: 'John Stone',
        },
        {
            avatar: "https://stacycorwin.com/wp-content/uploads/2018/12/sunrise-sunset.jpg",
            account: "albertsmith",
            hashedPassword: "Albert@123",
            nickname: 'chillingcorner',
            fullName: 'Albert Smith',
        },
        {
            avatar: "https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png",
            account: "google",
            hashedPassword: "Google@123",
            nickname: 'Google',
            fullName: 'Google LLC',
        },
        {
            avatar: 'https://photo-cms-tinnhanhchungkhoan.epicdn.me/w660/Uploaded/2024/WpxlCdjwi/2019_01_22/1_CLMU.jpg',
            account: "johnnguyen",
            hashedPassword: "John@123",
            nickname: 'vinfastmaidinh',
            fullName: 'John Nguyen',
        }
    ];

    const posts = [
        {
            title: 'Lorem ipsum dolor',
            music: 'public/assets/media/music/music-1.mp3',
            video: 'public/assets/media/video/giphy.mp4',
            share: 400,
            views: 10000000,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur ajhsdh aisdhia udjai dsag elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-1.mp3',
            video: 'public/assets/media/video/kangaroo.mp4',
            share: 4123,
            userID: 2,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-1.mp3',
            video: 'public/assets/media/video/something.mp4',
            share: 1230,
            userID: 3,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-2.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-2.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            views: 10000000,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-2.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-2.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-3.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-3.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-3.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        },
        {
            title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis maiores sapiente ex molestiae in, reiciendis doloremque nam architecto quam facere.',
            music: 'public/assets/media/music/music-1.mp3',
            video: 'public/assets/media/video/iphone15.mp4',
            share: 400,
            userID: 1,
        }
    ];

    const playlists = [
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 1',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 2',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 3',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 4',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 5',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 6',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 7',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 8',
            userID: 1,
        },
        {
            cover: 'https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png',
            title: 'Playlist 9',
            userID: 1,
        },
    ];

    const reactions = [
        {
            name: "laugh",
            emoji: "public/assets/images/laugh.png"
        },
        {
            name: "angry",
            emoji: "public/assets/images/angry.png"
        },
        {
            name: "heart",
            emoji: "public/assets/images/heart.png"
        },
        {
            name: "sad",
            emoji: "public/assets/images/sad.png"
        },
        {
            name: "surprise",
            emoji: "public/assets/images/surprise.png"
        }
    ];

    const comments = [
        {
            content: 'very cute',
            userID: 2,
            postID: 1,
        },
        {
            content: 'such a nice cat',
            userID: 3,
            postID: 1,
        },
        {
            content: 'lovely',
            userID: 4,
            postID: 1,
        },
        {
            content: 'beautiful',
            userID: 5,
            postID: 2,
        }
    ];

    const messages = [
        {
            content: 'hello',
            receiverID: 2,
            senderID: 1
        },
        {
            content: 'hi',
            receiverID: 1,
            senderID: 2
        },
        {
            content: 'how are you?',
            receiverID: 2,
            senderID: 1
        },
        {
            content: 'I am great, thank you and you',
            receiverID: 1,
            senderID: 2
        },
        {
            content: 'very good',
            receiverID: 2,
            senderID: 1
        }
    ];

    const follows = [
        {
            followerID: 1,
            followingID: 2
        },
        {
            followerID: 1,
            followingID: 3
        },
        {
            followerID: 1,
            followingID: 4
        },
        {
            followerID: 1,
            followingID: 5
        },
        {
            followerID: 2,
            followingID: 1
        },
        {
            followerID: 2,
            followingID: 3
        },
        {
            followerID: 2,
            followingID: 5
        },
        {
            followerID: 3,
            followingID: 2
        },
        {
            followerID: 3,
            followingID: 1
        },
        {
            followerID: 4,
            followingID: 1
        },

    ];


    try {
        const dummyUsers = await prisma.user.createMany({
            data: users,
        });
        const dummyReactions = await prisma.reaction.createMany({
            data: reactions
        })
        const dummyPosts = await prisma.post.createMany({
            data: posts,
        });
        const dummyPlaylists = await prisma.playlist.createMany({
            data: playlists,
        });
        const dummyComments = await prisma.comment.createMany({
            data: comments,
        });
        const dummyMessages = await prisma.message.createMany({
            data: messages,
        });
        const dummyFollows = await prisma.follow.createMany({
            data: follows,
        });

        console.log('Success');
    } catch (error) {
        console.log(error)
    }
    res.end('Success')
})

router.get('/api/create_dummy_relationship_data', async (req, res) => {
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
            postID: 11,
            playlistID: 9,
        },
    ];

    const messageReactions = [
        {
            messageID: 1,
            reactionID: 1,
            userID: 1
        },
        {
            messageID: 1,
            reactionID: 1,
            userID: 2
        },
        {
            messageID: 2,
            reactionID: 2,
            userID: 1
        },
        {
            messageID: 3,
            reactionID: 2,
            userID: 1
        },
        {
            messageID: 4,
            reactionID: 1,
            userID: 2
        }
    ];

    const commentReactions = [
        {
            commentID: 1,
            reactionID: 2,
            userID: 1
        },
        {
            commentID: 1,
            reactionID: 2,
            userID: 2
        },
        {
            commentID: 1,
            reactionID: 2,
            userID: 3
        },
        {
            commentID: 1,
            reactionID: 2,
            userID: 4
        },

        {
            commentID: 1,
            reactionID: 2,
            userID: 5
        },
        {
            commentID: 2,
            reactionID: 3,
            userID: 1
        },
        {
            commentID: 2,
            reactionID: 2,
            userID: 2
        },
        {
            commentID: 2,
            reactionID: 2,
            userID: 4
        },
        {
            commentID: 2,
            reactionID: 1,
            userID: 5
        },
        {
            commentID: 3,
            reactionID: 1,
            userID: 1
        }
    ];

    const userLikedPosts = [
        {
            userID: 1,
            postID: 2
        },
        {
            userID: 1,
            postID: 3
        },
        {
            userID: 1,
            postID: 4
        },
        {
            userID: 1,
            postID: 5
        },
    ];

    const userSavedPosts = [
        {
            userID: 2,
            postID: 1
        },
        {
            userID: 2,
            postID: 3
        },
        {
            userID: 2,
            postID: 4
        },
        {
            userID: 2,
            postID: 5
        },
        {
            userID: 2,
            postID: 6
        },
        {
            userID: 1,
            postID: 2
        }
    ];

    try {
        const dummyPlaylistPosts = await prisma.playlistPost.createMany({
            data: playlistPosts,
        });
        const dummyMessageReactions = await prisma.messageReaction.createMany({
            data: messageReactions,
        });
        const dummyCommentReactions = await prisma.commentReaction.createMany({
            data: commentReactions,
        });
        const dummyUserLikedPosts = await prisma.userLikedPost.createMany({
            data: userLikedPosts,
        });
        const dummyUserSavedPosts = await prisma.userSavedPost.createMany({
            data: userSavedPosts,
        })
        console.log('Success')
    } catch (error) {
        console.log(error)
    }
    res.end('Success')
})

function isChecked(followers, following) {
    return followers > 2 && following > 1
}

router.get('/api/posts', async (req, res) => {
    const posts = await prisma.post.findMany({
        include: {
            user: {
                include: {
                    following: true,
                    followers: true,
                },

            },
            playlists: true,
            comments: true,
            userLiked: true,
            userSaved: true,
        },
    });

    const newPosts = posts.map((post) => {
        return {
            id: post.id,
            title: post.title,
            music: post.music,
            video: post.video,
            share: post.share,
            views: post.views,
            playlists: post.playlists,
            comments: post.comments,
            userLiked: post.userLiked,
            userSaved: post.userSaved,
            user: {
                nickname: post.user.nickname,
                avatar: post.user.avatar,
                fullName: post.user.fullName,
                checked: isChecked(post.user.followers.length, post.user.following.length)
            }
        }
    })
    res.json(newPosts)
})

router.get('/api/users', async (req, res) => {
    const users = await prisma.user.findMany({
        include: {
            followers: true,
            following: true,
            likedPost: true,
        }
    })
    const userPromises = users.map(async (user) => {
        const likedPosts = await prisma.userLikedPost.findMany({
            include: {
                post: true,
            },
            where: {
                post: {
                    userID: user.id
                }
            }
        });

        return {
            ...user,
            checked: isChecked(user.followers.length, user.following.length),
            likes: likedPosts.length
        };
    });

    const newUsers = await Promise.all(userPromises);
    res.json(newUsers)
})

router.get('/api/playlists', async (req, res) => {
    const playlists = await prisma.playlist.findMany({
        include: {
            user: true,
            posts: true,
        }
    })
    res.json(playlists)
})

router.post(`/api/profile`, async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            nickname: req.body.params.nickname
        },
        include: {
            posts: true,
            playlists: true,
            comments: true,
            followers: true,
            following: true,
            likedPost: {
                include: {
                    post: true
                }
            },
            savedPost: true
        }
    })
    const playlists = await prisma.playlist.findMany({
        where: {
            user: {
                nickname: req.body.params.nickname
            }
        },
        include: {
            posts: true
        }
    })
    const likedPosts = await prisma.userLikedPost.findMany({
        include: {
            post: true,
        },
        where: {
            post: {
                userID: user.id
            }
        }
    })
    res.json({
        'user':
        {
            avatar: user.avatar,
            nickname: user.nickname,
            fullName: user.fullName,
            checked: user.followers.length > 2 && user.following.length > 1,
            following: user.following,
            followers: user.followers,
            likes: likedPosts.length,
            bio: user.bio,
            link: user.link,
        },
        'playlists': playlists,
        'posts': user.posts
    })
})

router.post('/api/login', async (req, res) => {
    const user = await prisma.user.findFirst({
        where: {
            AND: [
                {
                    account: { equals: req.body.params.user.emailUsername }
                },
                {
                    hashedPassword: { equals: req.body.params.user.password }
                }
            ],
        },
        include: {
            posts: true,
            playlists: true,
            comments: true,
            followers: true,
            following: true,
            likedPost: true,
            savedPost: true,
            sentMessages: true,
            receivedMessages: true,
            messageReactions: true,
            commentReactions: true,
        }
    })
    res.json(user)
})

router.post('/api/suggested', async (req, res) => {
    const allUsers = await prisma.user.findMany()
    const followedUsers = await prisma.user.findMany({
        include: {
            following: true
        },
        where: {
            following: {
                folo
            }
        }
    })
})


module.exports = router;