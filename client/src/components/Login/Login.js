import classNames from "classnames/bind";

import styles from './Login.module.scss'
import { AppleIcon, CloseIcon, FacebookIcon, GoogleIcon, KaKaoTalkIcon, LineIcon, PersonIcon, QRIcon, TwitterIcon } from "../Icons";
import Modal from "../Modal/Modal";
import { useState } from "react";

const cx = classNames.bind(styles)

function Login({handleClose}) {
    const [type, setType] = useState(false)
    const loginOptions = [
        {
            icon: <QRIcon/>,
            title: 'Use QR code',
        },
        {
            icon: <PersonIcon/>,
            title: 'Use phone / email / username',
        },
        {
            icon: <FacebookIcon/>,
            title: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon/>,
            title: 'Continue with Google',
        },
        {
            icon: <TwitterIcon/>,
            title: 'Continue with Twitter',
        },
        {
            icon: <LineIcon/>,
            title: 'Continue with LINE',
        },
        {
            icon: <KaKaoTalkIcon/>,
            title: 'Continue with KakaoTalk',
        },
        {
            icon: <AppleIcon/>,
            title: 'Continue with Apple',
        },
    ]

    const signUpOptions = [
        {
            icon: <PersonIcon/>,
            title: 'Use phone or email',
        },
        {
            icon: <FacebookIcon/>,
            title: 'Continue with Facebook',
        },
        {
            icon: <GoogleIcon/>,
            title: 'Continue with Google',
        },
        {
            icon: <TwitterIcon/>,
            title: 'Continue with Twitter',
        },
        {
            icon: <LineIcon/>,
            title: 'Continue with LINE',
        },
        {
            icon: <KaKaoTalkIcon/>,
            title: 'Continue with KakaoTalk',
        }
    ]

    const settings = [
        {
            title: 'Log in to TikTok',
            options: loginOptions,
            bottomText: 'Don’t have an account?',
            bottomButtonContent: 'Sign up',
        },
        {
            title: 'Sign up for TikTok',
            options: signUpOptions,
            bottomText: 'Already have an account?',
            bottomButtonContent: 'Log in',
        }
    ]

    const index = type ? 1 : 0;

    return (
        <Modal>
            <div className={cx('login-modal')}>
                    <div className={cx('dialog')}>
                        <div className={cx('content-container')}>
                            <div className={cx('content')}>
                                <h2 className={cx('login-title')}>{settings[index]['title']}</h2>
                                <div className={cx('login-option-container')}>
                                    {settings[index]['options'].map((option, index) => {
                                        return (
                                            <div key={index}>
                                                <div className={cx('login-option')}>
                                                    <div className={cx('icon-container')}>
                                                        {option.icon}
                                                    </div>
                                                    <div className={cx('title-container')}>
                                                        {option.title}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={cx('policy-container')}>
                            <p className={cx('policy-content')}>
                                By continuing with an account located in <a href="/signup/country-selector" className={cx('link')}>Vietnam</a>, you agree to our  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/terms-of-use?lang=en" className={cx('link')}>Terms of Service</a> and acknowledge that you have read our  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/privacy-policy?lang=en" className={cx('link')}>Privacy Policy</a>.
                            </p>
                        </div>
                        <div className={cx('dialog-footer')}>
                            <div data-e2e="bottom-text">{settings[index]['bottomText']}</div>
                            <div className={cx('btn-container')}>
                                <span className={cx('btn-content')} onClick={() => setType(prev=>!prev)}>{settings[index]['bottomButtonContent']}</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('close-btn-container')} onClick={handleClose}>
                        <CloseIcon className={cx('close-btn')}/>
                    </div>
                </div>
            </Modal>
        
    );
}

export default Login;