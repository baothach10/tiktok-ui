import classNames from "classnames/bind";
import styles from './PostHeader.module.scss';
import PropTypes from 'prop-types'

import Button from "~/components/Button";
import { useState } from "react";
import { MusicIcon } from "~/components/Icons";

const cx = classNames.bind(styles)

function PostHeader({ id, nickname, fullName, title, music }) {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(pre => !pre)
    }

    const ReadMoreButton = ({ name, onClick, className }) => (
        <div className={cx(className)} onClick={onClick}>
            {name}
        </div>
    )

    return (
        <div id={`header-${id}`} className={cx("header-wrapper")}>

            <div className={cx("name-wrapper")}>
                <a href="/profile" className={cx('post-nickname')}>{nickname}</a>
                <h4>{fullName}</h4>
            </div>
            <Button outline className={cx('follow-btn')}>Follow</Button>

            <div className={cx('title-wrapper')}>
                {title.length < 114 && (
                    <div className={cx('title')}>{title}</div>
                )}
                {title.length > 114 && !expanded && (
                    <div className={cx('title')}>
                        <div className={cx('content')}>
                            {title.slice(0, 115)}...
                            <ReadMoreButton name='more' onClick={handleClick} className={cx('more-btn')} />
                        </div>

                    </div>
                )}
                {title.length > 114 && expanded && (
                    <div className={cx('title')}>
                        <div className={cx('content')}>
                            {title}
                        </div>
                    </div>
                )}
            </div>
            {title.length > 114 && expanded && (
                <ReadMoreButton name='less' onClick={handleClick} className={cx('more-btn')} />
            )}

            <div className={cx('music-link-container')}>
                <a href={'/'}>
                    <MusicIcon className={cx('music-link-icon')} />
                    <div className={cx('music-link-title')}>
                        original music - {fullName}
                    </div>
                </a>
            </div>
        </div>
    );
}

PostHeader.propTypes = {
    id: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    music: PropTypes.string.isRequired,
}

export default PostHeader;