import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import styles from './ProfilePage.module.scss';
import ProfileBody from "./ProfileBody";

import ProfileHeader from "./ProfileHeader";
import { profileAPI } from "src/services/userAPI";

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

function ProfilePage() {

    const { nickname } = useParams()
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        profileAPI(nickname.slice(1,))
            .then(response => setCurrentUser(response.data))
    }, [nickname])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                <div className={cx('container')}>
                    <div className={cx('profile-header')}>
                        {<ProfileHeader
                            avatar={currentUser?.user?.avatar}
                            nickname={currentUser?.user?.nickname}
                            fullName={currentUser?.user?.fullName}
                            checked={currentUser?.user?.checked}
                            following={currentUser?.user?.following.length}
                            followers={currentUser?.user?.followers.length}
                            likes={currentUser?.user?.likes}
                            bio={currentUser?.user?.bio}
                            link={currentUser?.user?.link}
                        />}
                    </div>
                    <div className={cx('profile-body')}>
                        {<ProfileBody
                            posts={currentUser?.posts}
                            playlists={currentUser?.playlists}
                            nickname={currentUser?.user?.nickname}
                        />}
                    </div>
                </div>
            </div>
        </div>
    );
}

ProfilePage.propTypes = {
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

export default ProfilePage;