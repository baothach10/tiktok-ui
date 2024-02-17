import classNames from "classnames/bind";

import styles from './InputTitle.module.scss';

const cx = classNames.bind(styles)

function InputTitle({ text, link, onClick }) {
    return (
        <div className={cx('input-title')}>
            {text}
            <p onClick={onClick} className={cx('login-option')}>
                {link}
            </p>
        </div>
    );
}

export default InputTitle;