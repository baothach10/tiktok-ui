import classNames from "classnames/bind";
import { useState } from "react";
import PropTypes from 'prop-types'


import styles from './PasswordInput.module.scss'
import { EyeCloseIcon, EyeOpenIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function PasswordInput({error, register, placeholder}) {

    const [hidden, setHidden] = useState(true)
    const handleUnhide = () => {
        setHidden(prev => !prev)
    }
    return (
        <div className={cx('password-wrapper')}>
            <div className={cx('password-container')}>
                <input
                    className={cx('password-input-area', error ? 'alert' : null)}
                    placeholder={placeholder}
                    type={hidden ? "password" : 'text'}
                    autoComplete="on"
                    {...register("password",
                        {
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).*$/,
                                message: 'Password must contain at least 1 lowercase, 1 uppercase, 1 digit and 1 special character',
                            },
                            minLength: {
                                value: 8,
                                message: 'Password must be at least 8 characters in length'
                            },
                        })
                    }
                />
                <div className={cx('eye-icon')}>
                    <span onClick={handleUnhide}>
                        {hidden ? <EyeCloseIcon /> : <EyeOpenIcon />}
                    </span>
                </div>
            </div>
            <p className={cx('error-msg')}>{error?.message}</p>
        </div>
    );
}

PasswordInput.propTypes = {
    error: PropTypes.object,
    register: PropTypes.func.isRequired,
    placeholder: PropTypes.string
}

export default PasswordInput;