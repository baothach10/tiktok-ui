import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner, faGlobe, faCloudUpload, faMessage, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css'

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import AccountItem from 'src/components/AccountItem';
import Button from '~/components/Button';
import Menu from 'src/components/Popper/Menu';
import { InboxIcon, MessageIcon, SearchIcon } from 'src/components/Icons';
import Image from 'src/components/Image';

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Language',
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
                }
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
    const [searchResult, setSearchResult] = useState([])
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

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


    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='TikTok logo'></img>
            </div>
            <HeadlessTippy
                interactive
                visible={searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>
                                Accounts
                            </h4>
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                            <AccountItem />
                        </PopperWrapper>
                    </div>
                )}
            >

                <div className={cx('search')}>
                    <input placeholder='Search accounts and videos' spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                    <button className={cx('search-btn')}>
                        <SearchIcon className={cx('search-svg')} />
                    </button>
                </div>
            </HeadlessTippy>

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload Video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
                            </button>
                        </Tippy>

                        <Tippy content="Messages" placement='bottom'>
                            <button className={cx('action-btn', 'message-icon')}>
                                <MessageIcon />
                            </button>
                        </Tippy>

                        <Tippy content="Inbox" placement='bottom'>
                            <button className={cx('action-btn', 'inbox-icon')}>
                                <InboxIcon />
                            </button>
                        </Tippy>

                    </>
                ) : (
                    <>
                        <Button text>Upload</Button>
                        <Button primary>Log in</Button>

                    </>
                )}
                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image 
                        // src='https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.png' 
                        src='https://pbs.twimg.com/profile_images/1717013664954499072/2dcJ0Unw_400x400.pn'
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
}

export default Header;