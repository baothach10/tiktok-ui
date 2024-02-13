import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faEllipsisVertical, faKeyboard, faGlobe, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css'
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, PlusIcon } from 'src/components/Icons/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/Search';
import config from '~/config'
import Login from 'src/components/Login';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    }
]

// Handle logic
const handleMenuChange = (menuItem) => {

}


function Header() {
    const currentUser = false
    const [openLogin, setOpenLogin] = useState(false)

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: '/@apple',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "Get coins",
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: '/logout',
            separate: true,
        },
    ]

    useEffect(() => {
        document.body.style.overflowY = openLogin ? 'hidden' : 'visible'
    }, [openLogin])


    return <>
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt='TikTok logo'></img>
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <button className={cx('action-btn', 'upload-btn')}>
                                <span className={cx('upload-icon')}><PlusIcon /></span>
                                <p>Upload</p>
                            </button>

                            <Tippy content="Messages" placement='bottom' className='tippy-header'>
                                <button className={cx('action-btn', 'message-icon')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy content="Inbox" placement='bottom' className='tippy-header'>
                                <button className={cx('action-btn', 'inbox-icon')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>

                        </>
                    ) : (
                        <>
                            <button className={cx('action-btn', 'upload-btn')}>
                                <span className={cx('upload-icon')}><PlusIcon /></span>
                                <p>Upload</p>
                            </button>
                            <Button primary className={cx('login-btn')} onClick={() => setOpenLogin(true)}>Log in</Button>
                        </>
                    )}
                    <Menu
                        className={cx('popper-wrapper')}
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                // src='https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png' 
                                src='https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png'
                                className={cx('user-avatar')}
                                alt='Nguyen Van A'
                                fallBack='https://yt3.googleusercontent.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s900-c-k-c0x00ffffff-no-rj'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>

                        )}
                    </Menu>
                </div>
            </div>
        </header>

        {openLogin && <div className={cx('login-container')}><Login handleClose={() => setOpenLogin(false)} /></div>}
    </>
}

export default Header;