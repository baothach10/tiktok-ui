import classNames from "classnames/bind";

import styles from './Login.module.scss';

const cx = classNames.bind(styles)

function LoginPolicy() {
    return (
        <div className={cx('policy-container')}>
            <p className={cx('policy-content')}>
                By continuing with an account located in <a href="/signup/country-selector" className={cx('link')}>Vietnam</a>, you agree to our  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/terms-of-use?lang=en" className={cx('link')}>Terms of Service</a> and acknowledge that you have read our  <a target="_blank" rel="noopener noreferrer" href="https://www.tiktok.com/legal/privacy-policy?lang=en" className={cx('link')}>Privacy Policy</a>.
            </p>
        </div>
    );
}

export default LoginPolicy;