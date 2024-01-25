import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './ProfilePlaylist.module.scss'

const cx = classNames.bind(styles)

function ProfilePlaylist({playlists}) {
    return (
        <div className={cx('outer-playlist-container')}>
            <p className={cx('title')}>Playlists</p>
            <div className={cx('playlist-container')}>
                <div className={cx('inner-playlist-container')}>
                    {playlists.map((playlist, index) => {
                        return (
                            <a key={index} href={'/'} className={cx('playlist-link')}>
                                <div className={cx('playlist-card-container')}>
                                    <div className={cx('playlist-card-cover-container')}>
                                        <img src={playlist.cover} alt={`${playlist.cover} cover`} className={cx('playlist-card-cover')} />
                                    </div>
                                    <div className={cx('playlist-card-info-container')}>
                                        <p className={cx('playlist-title')}>{playlist.title}</p>
                                        <p className={cx('playlist-description')}>{`${playlist.posts.length} posts`}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </div>
                <div className={cx('right-btn')}></div>
            </div>
            <p className={cx('title')}>Videos</p>
        </div>
    );
}

ProfilePlaylist.propTypes = {
    playlists: PropTypes.array
}

export default ProfilePlaylist;