import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard, faGlobe, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';

import { AppleIcon, FacebookIcon, GoogleIcon, KaKaoTalkIcon, LineIcon, PersonIcon, QRIcon, TwitterIcon } from '~/components/Icons';
import LoginOptions from 'src/components/LoginSignUp/Login';
import SignUpOptions from 'src/components/LoginSignUp/SignUp';


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
            content: <LoginOptions />,
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
        children: {
            title: 'Sign up',
            content: <SignUpOptions />,
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

export const MONTHS = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

export const YEARS = [
    1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
    1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
    1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
    1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
    2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022, 2023, 2024
]
