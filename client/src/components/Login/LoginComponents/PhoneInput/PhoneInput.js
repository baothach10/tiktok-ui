import classNames from "classnames/bind";

import styles from './PhoneInput.module.scss'
import { DropDownIcon } from "src/components/Icons";

const cx = classNames.bind(styles)


function PhoneInput({ error, placeholder, register }) {
    return (
        <div className={cx('phone-input-wrapper')}>
            <div className={cx('phone-input-container', error ? 'alert' : null)}>
                <div className={cx('phone-input-selector-container')}>
                    <div className={cx('phone-input-selector')}>
                        <span>VN +84</span>
                        <DropDownIcon />
                    </div>
                </div>
                <div className={cx('phone-input')}>
                    <input
                        className={cx('phone-input-area')}
                        placeholder={placeholder}
                        {...register("phoneNumber",
                            {
                                pattern: {
                                    value: /\d{7,15}/,
                                    message: 'Enter a valid phone number'
                                },
                                minLength: {
                                    value: 7,
                                    message: 'Phone number must has at least 7 digits in length'
                                },
                                maxLength: {
                                    value: 15,
                                    message: 'Phone number must has less than 16 digits'
                                }
                            })
                        }
                    />
                    <div className={cx('phone-input-icon')}></div>
                </div>
            </div>
            <p className={cx('error-msg')}>{error?.message}</p>
        </div>
    );
}

export default PhoneInput;