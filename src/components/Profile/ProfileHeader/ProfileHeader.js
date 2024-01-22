import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './ProfileHeader.module.scss'
import Button from "src/components/Button";
import { LinkIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function ProfileHeader({avatar, nickname, fullName, checked, following, followers, likes, bio, link, format}) {
    return (
        <>
            <div className={cx('info')}>
                <div className={cx('image-container')}>
                    <span className={cx("image")}>
                        <img src={avatar} alt={`${nickname}'s avatar`} />
                    </span>
                </div>
                <div className={cx('name-container')}>
                    <h1 className={cx('nickname')}>
                        {nickname}
                        {!!checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />}
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
                        <LinkIcon className={cx('link-image')} />
                        <span className={cx('link')}>{(link.slice(8,).length > 25) ? `${link.slice(8,).slice(0, 24)}...` : link.slice(8,)}</span>
                    </a>
                )}
            </div>
        </>
    );
}

export default ProfileHeader;