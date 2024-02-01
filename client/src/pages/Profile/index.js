import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import styles from './Profile.module.scss'
import ProfileBody from "~/components/Profile/ProfileBody";

import ProfileHeader from "src/components/Profile/ProfileHeader";

const cx = classNames.bind(styles)

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

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [playlists, setPlaylists] = useState([])


    const test = 0

    useEffect(() => {
        async function fetchData() {
            const userResponse = await fetch('http://localhost:4000/api/users').then(res => res.json());
            const postResponse = await fetch('http://localhost:4000/api/posts').then(res => res.json());
            const playlistResponse = await fetch('http://localhost:4000/api/playlists').then(res => res.json());
            setUsers(userResponse)
            setPosts(postResponse)
            setPlaylists(playlistResponse)
        }
        fetchData()
    }, [])

    function format(number) {
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

    const testUser = users[test]
    // const posts = posts.


    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                <div className={cx('container')}>
                    <div className={cx('profile-header')}>
                        {<ProfileHeader
                            avatar={testUser.avatar}
                            nickname={testUser.nickname}
                            fullName={testUser.fullName}
                            checked={testUser.checked}
                            following={testUser.following}
                            followers={testUser.followers}
                            likes={testUser.likes}
                            bio={testUser.bio}
                            link={testUser.link}
                            format={format}
                        />}
                    </div>
                    <div className={cx('profile-body')}>
                        {<ProfileBody
                            posts={testUser.posts}
                            playlists={testUser.playlists}
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