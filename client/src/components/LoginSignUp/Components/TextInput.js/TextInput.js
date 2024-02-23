import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './TextInput.module.scss'

const cx = classNames.bind(styles)

function TextInput({ name, register, placeholder }) {
    return (
        <div className={cx('text-input-wrapper')}>
            <div className={cx('text-input-container')}>
                <div className={cx('text-input')}>
                    <input
                        className={cx('text-input-area')}
                        placeholder={placeholder}
                        {...register(name)}
                    />
                </div>
            </div>
        </div>
    );
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    register: PropTypes.func,
    setValue: PropTypes.func
}

export default TextInput;