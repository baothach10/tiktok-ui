import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './PhoneCodeInput.module.scss';
import { AlertIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function PhoneCodeInput({ error, placeholder, register, watch }) {
    return (
        <div className={cx('code-wrapper')}>
            <div className={cx('code-container')}>
                <div className={cx('code-input-container', !!error ? 'alert' : null)}>
                    <input
                        className={cx('code-input')}
                        placeholder={placeholder}
                        {...register("phoneCode",
                            {
                                pattern: {
                                    value: /^\d{6}$/,
                                    message: 'Enter 6-digit code'
                                }
                            }
                        )}
                    />
                    <div className={cx('alert-icon-container')}>
                        {(error) && <AlertIcon />}
                    </div>
                </div>
                <button className={cx('send-code-btn', (!error && !!watch('phoneCode')) ? null : 'disable')}>Send code</button>
            </div>
            <p className={cx('error-msg')}>{error?.message}</p>
        </div>
    );
}

PhoneCodeInput.propTypes = {
    error: PropTypes.object,
    placeholder: PropTypes.string,
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired
}

export default PhoneCodeInput;