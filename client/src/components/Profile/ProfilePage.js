import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createSelector } from 'reselect';

import styles from './ProfilePage.module.scss';
import ProfileBody from "./ProfileBody";

import ProfileHeader from "./ProfileHeader";
import { selectAllPosts, selectPostsById } from "~/features/posts/postsSlice";
import { selectUserByNickname } from "~/features/users/usersSlice";
import { selectPlaylistsById } from "~/features/playlists/playlistsSlice";

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
                            nickname={currentUser.nickname}
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