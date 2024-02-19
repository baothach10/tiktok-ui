import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { Menu } from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, PlusIcon } from 'src/components/Icons/Icons';
import Image from '~/components/Image';
import Search from '~/layouts/Search';
import config from '~/config'
import Login from 'src/components/LoginSignUp';
import { MENU_ITEMS, USER_MENU } from 'src/static/TextConfig';

const cx = classNames.bind(styles)

// Handle logic
const handleMenuChange = (menuItem) => {

}

function Header({ user = { nickname: 'abc' } }) {
    const currentUser = false
    const [openLogin, setOpenLogin] = useState(false)

    const userMenu = USER_MENU(user)

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