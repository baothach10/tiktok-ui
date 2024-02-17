import classNames from "classnames/bind";

import styles from './EmailInput.module.scss'

const cx = classNames.bind(styles)

function EmailInput({register, placeholder}) {
    return (
        <div className={cx('email-input-wrapper')}>
            <div className={cx('email-input-container')}>
                <div className={cx('email-input')}>
                    <input
                        className={cx('email-input-area')}
                        placeholder={placeholder}
                        {...register("emailUsername")}
                    />
                </div>
            </div>
        </div>

    );
}

export default EmailInput;