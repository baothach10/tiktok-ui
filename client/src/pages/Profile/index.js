import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from 'reselect';

import styles from './Profile.module.scss';
import ProfileBody from "~/components/Profile/ProfileBody";

import ProfileHeader from "src/components/Profile/ProfileHeader";
import { selectAllPosts, selectPostsById } from "src/features/posts/postsSlice";
import { selectUserByNickname } from "src/features/users/usersSlice";
import { selectPlaylistsById } from "src/features/playlists/playlistsSlice";

const cx = classNames.bind(styles)

export function format(number) {
    if (number >= 1000000000) {
        return `${(number / 1000000000).toFixed(1)}B`;
    } else if (number >= 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
    } else if (number >= 1000) {
        return `${(number / 1000).toFixed(1)}K`;
    } else {
        return number;
    }
}

function Profile({
    // avatar,
    // nickname,
    // fullName,
    // checked,
    // likes,
    // following,
    // followers,
    // bio,
    // link,
    // playlists,
    // posts,
}) {

    // const [users, setUsers] = useState([])
    // const [posts, setPosts] = useState([])
    // const [playlists, setPlaylists] = useState([])




    // useEffect(() => {
    //     async function fetchData() {
    //         const userResponse = await fetch('http://localhost:4000/api/users').then(res => res.json());
    //         const postResponse = await fetch('http://localhost:4000/api/posts').then(res => res.json());
    //         const playlistResponse = await fetch('http://localhost:4000/api/playlists').then(res => res.json());
    //         setUsers(userResponse)
    //         setPosts(postResponse)
    //         setPlaylists(playlistResponse)
    //     }
    //     fetchData()
    // }, [])


    // const posts = posts.

    // useEffect(() => {
    //     async function fetchData() {
    //         const profileResponse = await fetch('http://localhost:4000/api/@:nickname', {

    //         }).then(res => res.json());
    //     }
    // })

    // const users = useSelector(state => state.users.usersList)

    // Cách 1
    // fetch api dùng window.location.href gửi nickname xuống backend bằng fetch rồi lấy data lưu vào posts và playlists

    // const posts = useSelector(state => state.posts.postsList)
    // const posts = useSelector(selectAllPosts)
    // const playlists = useSelector(state => state.playlists.playlistsList)
    // const test = 0
    // const testUser = users[test]

    // const currentUser = users.find(user => user.nickname === nickname.slice(1,))
    // const currentPosts = posts.filter((post) => post.userID === currentUser.id)
    // const currentPlaylists = playlists.filter((playlist) => playlist.userID === currentUser.id)


    // retrieve userID

    const { nickname } = useParams()
    const currentUser = useSelector((state) => selectUserByNickname(state, nickname.slice(1,)))

    const selectRelatedData = createSelector(
        (state) => state,
        (state) => ({
            currentPosts: selectPostsById(state, currentUser.id),
            currentPlaylists: selectPlaylistsById(state, currentUser.id),
        })
    );

    const { currentPosts, currentPlaylists } = useSelector(selectRelatedData);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                <div className={cx('container')}>
                    <div className={cx('profile-header')}>
                        {<ProfileHeader
                            avatar={currentUser.avatar}
                            nickname={currentUser.nickname}
                            fullName={currentUser.fullName}
                            checked={currentUser.checked}
                            following={currentUser.following}
                            followers={currentUser.followers}
                            likes={currentUser.likes}
                            bio={currentUser.bio}
                            link={currentUser.link}
                        />}
                    </div>
                    <div className={cx('profile-body')}>
                        {<ProfileBody
                            posts={currentPosts}
                            playlists={currentPlaylists}
                            format={format}
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    fullName: PropTypes.string,
    likes: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number,
    bio: PropTypes.string,
    link: PropTypes.string,
    playlists: PropTypes.array,
    posts: PropTypes.array,
}

export default Profile;