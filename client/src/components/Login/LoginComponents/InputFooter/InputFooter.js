import classNames from "classnames/bind";

import styles from './InputFooter.module.scss';

const cx = classNames.bind(styles)

function LoginFooter({ onClick1, text1, onClick2, text2 }) {
    if (!((onClick1 && text1) || (onClick2 && text2) || (onClick1 && text1 && onClick2 && text2))) {
        console.error('The props must be passed in the correct pair!')
    }
    return (
        <div className={cx('options-container')}>
            <p onClick={onClick1} className={cx('login-option')}>{text1}</p>
            {(onClick2 && text2 && (
                <>
                    <span></span>
                    <p onClick={onClick2} className={cx('login-option')}>{text2}</p>
                </>
            ))}
        </div>
    );
}

export default LoginFooter;