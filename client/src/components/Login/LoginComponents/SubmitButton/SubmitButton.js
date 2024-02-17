import classNames from "classnames/bind";

import styles from './SubmitButton.module.scss';

const cx = classNames.bind(styles)

function SubmitButton({isDisabled, value}) {
    return (
        <input className={cx('login-btn')} disabled={isDisabled()} type="submit" value={value} />
    );
}

export default SubmitButton;