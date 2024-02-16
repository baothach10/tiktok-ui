import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard, faGlobe, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { AppleIcon, FacebookIcon, GoogleIcon, KaKaoTalkIcon, LineIcon, PersonIcon, QRIcon, TwitterIcon } from '~/components/Icons';
import LoginPhone from "~/components/Login/LoginOptions/LoginPhone/LoginPhone";


// Text config for login

export const loginOptions = [
    {
        icon: <QRIcon />,
        title: 'Use QR code',
        children: {
            title: 'Log in with QR code'
        }
    },
    {
        icon: <PersonIcon />,
        title: 'Use phone / email / username',
        children: {
            title: 'Log in',
            content: <LoginPhone />,
        },
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
    },
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with LINE',
    },
    {
        icon: <KaKaoTalkIcon />,
        title: 'Continue with KakaoTalk',
    },
    {
        icon: <AppleIcon />,
        title: 'Continue with Apple',
    },
]

export const signUpOptions = [
    {
        icon: <PersonIcon />,
        title: 'Use phone or email',
    },
    {
        icon: <FacebookIcon />,
        title: 'Continue with Facebook',
    },
    {
        icon: <GoogleIcon />,
        title: 'Continue with Google',
    },
    {
        icon: <TwitterIcon />,
        title: 'Continue with Twitter',
    },
    {
        icon: <LineIcon />,
        title: 'Continue with LINE',
    },
    {
        icon: <KaKaoTalkIcon />,
        title: 'Continue with KakaoTalk',
    }
]

export const SETTINGS = [
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

export const MENU_ITEMS = [
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

export function USER_MENU(user) {
    return [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: `/@${user.nickname}`,
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
}