import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './PostSidebar.module.scss';
import { HeartIcon, MessageIcon2, FlagIcon, ShareIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

function PostSidebar({likes, comments, saved, share}) {
    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn')}>
                <span className={cx('icon')}><HeartIcon/></span>
                <strong className={cx('number')}>{comments}</strong>
            </button>
            <button className={cx('btn')}>
                <span className={cx('icon')}><MessageIcon2/></span>
                <strong className={cx('number')}>{likes}</strong>
            </button>
            <button className={cx('btn')}>
                <span className={cx('icon')}><FlagIcon/></span>
                <strong className={cx('number')}>{saved}</strong>
            </button>
            <button className={cx('btn')}>
                <span className={cx('icon')}><ShareIcon/></span>
                <strong className={cx('number')}>{share}</strong>
            </button>
        </div>  
    );
}

PostSidebar.propTypes = {
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    saved: PropTypes.number.isRequired,
    share: PropTypes.number.isRequired,
}

export default PostSidebar;