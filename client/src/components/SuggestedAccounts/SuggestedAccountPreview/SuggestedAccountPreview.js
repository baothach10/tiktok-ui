import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'

import styles from './SuggestedAccountPreview.module.scss'
import Button from "~/components/Button";
import { format } from "~/components/Profile/ProfilePage";

const cx = classNames.bind(styles);

function SuggestedAccountPreview({ user }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src={user.avatar}
                    alt={`${user.nickname}'s avatar`}
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>{user.nickname}</strong>
                    {!!user.checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />}
                </p>
                <p className={cx('full-name')}>{user.fullName}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{format(user.followers?.length)} </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>{format(user.likes)} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

SuggestedAccountPreview.propTypes = {
    user: PropTypes.object.isRequired,
}

export default SuggestedAccountPreview;