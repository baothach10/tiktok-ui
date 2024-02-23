import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './EmailInput.module.scss'
import { AlertIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function EmailInput({ error, register, placeholder }) {
    return (
        <div className={cx('email-input-wrapper')}>
            <div className={cx('email-input-container', error ? 'alert' : null)}>
                <div className={cx('email-input')}>
                    <input
                        className={cx('email-input-area')}
                        placeholder={placeholder}
                        {...register("email",
                        {
                            pattern: {
                                value: /^.+@.+$/,
                                message: 'Enter a valid email address'
                            }
                        })}
                    />
                </div>
                <div className={cx('alert-icon-container')}>
                    {(error) && <AlertIcon />}
                </div>
            </div>
            <p className={cx('error-msg')}>{error?.message}</p>
        </div>
    );
}

EmailInput.propTypes = {
    error: PropTypes.string,
    register: PropTypes.func,
    setValue: PropTypes.func
}

export default EmailInput;