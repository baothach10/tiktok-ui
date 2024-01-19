import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Profile.module.scss'
import Button from "src/components/Button";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


import { users } from "src/fakedata";
import { LinkIcon} from "src/components/Icons";

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
                        <div className={cx('info')}>
                            <div className={cx('image-container')}>
                                <span className={cx("image")}>
                                    <img src={avatar} alt={`${nickname}'s avatar`}/>
                                </span>
                            </div>
                            <div className={cx('name-container')}>
                                <h1 className={cx('nickname')}>
                                    {nickname}
                                    {!!checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle}/>}
                                </h1>
                                <h2 className={cx('full-name')}>{fullName}</h2>
                                <Button primary className={cx('follow-btn')}>Follow</Button>
                            </div>
                        </div>
                        <h3 className={cx('count-info')}>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(following)}</strong>
                                <span className={cx('subtitle')}>Following</span>
                            </div>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(followers)}</strong>
                                <span className={cx('subtitle')}>Followers</span>
                            </div>
                            <div className={cx('info-number')}>
                                <strong className={cx('number')}>{format(likes)}</strong>
                                <span className={cx('subtitle')}>Likes</span>
                            </div>
                        </h3>
                        <h2 className={cx('bio')}>
                            {!!bio ? bio : 'No bio yet'}
                        </h2>
                        <div className={cx('link-container')}>
                            {!!link && (
                                <a href={link} className={cx('link-wrapper')}>
                                    <LinkIcon className={cx('link-image')}/>
                                    <span className={cx('link')}>{(link.slice(8,).length > 25) ? `${link.slice(8,).slice(0, 24)}...` : link.slice(8,)}</span>
                                </a>
                            )}
                        </div>
                        <div className={cx('button-container')}></div>
                    </div>
                    <div className={cx('profile-body')}>

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
}

export default Profile;