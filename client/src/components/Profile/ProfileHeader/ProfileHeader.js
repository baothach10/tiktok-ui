import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './ProfileHeader.module.scss'
import Button from "~/components/Button";
import { DeniedIcon, EmailIcon, EmbedIcon, FacebookIcon, FlagStaffIcon, LinkIcon, LinkIconRound, LinkedInIcon, MoreIcon, RedditIcon, ShareIcon, TelegramIcon, TwitterIcon, WhatsappIcon, ExpandIcon, LineIcon, PinterestIcon } from "~/components/Icons";
import { Menu } from '~/components/Popper/Menu';
import { format } from "../ProfilePage";

const cx = classNames.bind(styles)

function ProfileHeader({ avatar, nickname, fullName, checked, following, followers, likes, bio, link}) {

    const shareChannels = [
        {
            icon: <EmbedIcon className={cx('channel-icon')}/>,
            title: "Embed",
            to: '/',
        },
        {
            icon: <FacebookIcon className={cx('channel-icon')}/>,
            title: "Share to Facebook",
            to: '/',
        },
        {
            icon: <WhatsappIcon className={cx('channel-icon')}/>,
            title: "Share to WhatsApp",
            to: '/',
        },
        {
            icon: <TwitterIcon className={cx('channel-icon')}/>,
            title: "Share to Twitter",
            to: '/',
        },
        {
            icon: <LinkIconRound className={cx('channel-icon')}/>,
            title: "Copy link",
            to: '/',
        },
        {
            icon: <LinkedInIcon className={cx('channel-icon')}/>,
            title: "Share to LinkedIn",
            to: '/',
        },
        {
            icon: <RedditIcon className={cx('channel-icon')}/>,
            title: "Share to Reddit",
            to: '/',
        },
        {
            icon: <TelegramIcon className={cx('channel-icon')}/>,
            title: "Share to Telegram",
            to: '/',
        },
        {
            icon: <EmailIcon className={cx('channel-icon')}/>,
            title: "Share to Email",
            to: '/',
        },
        {
            icon: <LineIcon className={cx('channel-icon')}/>,
            title: "Share to Line",
            to: '/',
        },
        {
            icon: <PinterestIcon className={cx('channel-icon')}/>,
            title: "Share to Pinterest",
            to: '/',
        },
    ]

    const moreItems = [
        {
            icon: <FlagStaffIcon className={cx('more-icon')}/>,
            title: "Report",
            to: '/',
        },
        {
            icon: <DeniedIcon className={cx('more-icon')}/>,
            title: "Block",
            to: '/',
            separate: true,
        },
    ]

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
            <div className={cx('buttons-container')}>
                <Menu
                    items={shareChannels}
                    hideOnClick={false}
                    expandButton={<ExpandIcon/>}
                    width={'280px'}
                    maxHeight={'250px'}
                >
                    <span>
                        <ShareIcon className={cx('share-btn')} />
                    </span>
                </Menu>
                <Menu
                    items={moreItems}
                    hideOnClick={false}
                    width={'180px'}
                >
                    <span>
                        <MoreIcon className={cx('more-btn')} />
                    </span>
                </Menu>
            </div>
        </>
    );
}

ProfileHeader.propTypes = {
    avatar: PropTypes.string,
    nickname: PropTypes.string,
    fullName: PropTypes.string,
    likes: PropTypes.number,
    following: PropTypes.number,
    followers: PropTypes.number,
    bio: PropTypes.string,
    link: PropTypes.string,
}

export default ProfileHeader;