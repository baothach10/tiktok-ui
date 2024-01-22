import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Profile.module.scss'
import ProfileBody from "~/components/Profile/ProfileBody";


import { users } from "src/fakedata";
import ProfileHeader from "src/components/Profile/ProfileHeader";

const cx = classNames.bind(styles)

function Profile({
    avatar = users[0].avatar,
    nickname = users[0].nickname,
    fullName = users[0].fullName,
    checked = users[0].checked,
    likes = users[0].likes,
    following = users[0].following,
    followers = users[0].followers,
    bio = users[0].bio,
    link = users[0].link,
    playlists = users[0].playlists,
    posts = users[0].videos,
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