import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Profile.module.scss'
import ProfileBody from "~/components/Profile/ProfileBody";


import { users } from "src/fakedata";
import ProfileHeader from "src/components/Profile/ProfileHeader";

const cx = classNames.bind(styles)
const testUser = users[0]

function Profile({
    avatar = testUser.avatar,
    nickname = testUser.nickname,
    fullName = testUser.fullName,
    checked = testUser.checked,
    likes = testUser.likes,
    following = testUser.following,
    followers = testUser.followers,
    bio = testUser.bio,
    link = testUser.link,
    playlists = testUser.playlists,
    posts = testUser.videos,
}) {

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

    return (
        <div className={cx('wrapper')}>
            <div className={cx('layout')}>
                <div className={cx('container')}>
                    <div className={cx('profile-header')}>
                        {<ProfileHeader
                            avatar={avatar}
                            nickname={nickname}
                            fullName={fullName}
                            checked={checked}
                            following={following}
                            followers={followers}
                            likes={likes}
                            bio={bio}
                            link={link}
                            format={format}
                        />}
                    </div>
                    <div className={cx('profile-body')}>
                        {<ProfileBody
                            posts={posts}
                            playlists={playlists}
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