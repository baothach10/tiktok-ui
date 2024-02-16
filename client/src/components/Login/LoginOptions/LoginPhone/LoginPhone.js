import classNames from "classnames/bind";
import { useForm } from "react-hook-form";
import { useState } from "react";

import styles from './LoginPhone.module.scss';
import { DropDownIcon, EyeCloseIcon, EyeOpenIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function LoginPhone() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "all",
    })
    
    const [hidden, setHidden] = useState(true)

    const onSubmit = (data) => {
        console.log(data)
    }

    const isDisabled = () => {
        return (!errors?.password?.type && !errors?.phoneNumber?.type && !!watch('phoneNumber') && !!watch('password')) ? false : true
    }

    const handleUnhide = () => {
        setHidden(prev => !prev)
    }

    return (
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <div className={cx('input-title')}>
                Phone
                <a href="/" className={cx('login-option')}>
                    Log in with email or username
                </a>
            </div>

            <div className={cx('phone-input-wrapper')}>
                <div className={cx('phone-input-container', !!errors.phoneNumber ? 'alert' : '')}>
                    <div className={cx('phone-input-selector-container')}>
                        <div className={cx('phone-input-selector')}>
                            <span>VN +84</span>
                            <DropDownIcon />
                        </div>
                    </div>
                    <div className={cx('phone-input')}>
                        <input
                            className={cx('phone-input-area')}
                            placeholder="Phone number"
                            {...register("phoneNumber",
                                {
                                    required: true,
                                    pattern: {
                                        value: /\d+/,
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
                <p className={cx('error-msg')}>{errors.phoneNumber?.message}</p>
            </div>

            <div className={cx('password-wrapper')}>
                <div className={cx('password-container')}>
                    <input
                        className={cx('password-input-area', !!errors.password ? 'alert' : '')}
                        placeholder="Password"
                        type={hidden ? "password" : 'text'}
                        autoComplete="on"
                        {...register("password",
                            {
                                required: true,
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
                                    message: 'Password must contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character',
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Password must be at least 8 characters in length'
                                }
                            })
                        }
                    />
                    <div className={cx('eye-icon')}>
                        <span onClick={handleUnhide}>
                            {hidden ? <EyeCloseIcon/> : <EyeOpenIcon/>}
                        </span>
                    </div>
                </div>
                <p className={cx('error-msg')}>{errors.password?.message}</p>
            </div>

            <div className={cx('options-container')}>
                <a href="/" className={cx('login-option')}>Forgot password?</a>
                <span></span>
                <a href="/" className={cx('login-option')}>Log in with code</a>
            </div>

            <input className={cx('login-btn')} disabled={isDisabled()} type="submit" value={'Log in'} />
        </form>
    );
}

export default LoginPhone;