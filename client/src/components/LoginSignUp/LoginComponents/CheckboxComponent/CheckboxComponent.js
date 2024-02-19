import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useState } from "react";

import styles from './CheckboxComponent.module.scss';
import { CheckIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function CheckboxComponent({ text, register, registerName, registerValue }) {
    const [pressed, setPressed] = useState(false)

    const handleClick = () => {
        setPressed(prev => !prev)
    }

    return (
        <div className={cx('checkbox-container')}>
            <div className={cx('checkbox')} onClick={handleClick}>
                <input
                    className={cx('checkbox-input')}
                    {...register(registerName)}
                    type="checkbox"
                    value={registerValue}
                />
                <div className={cx('checkbox-square-container', pressed ? 'chosen' : null)}>
                    <CheckIcon className={cx('checkbox-square')} />
                </div>
            </div>
            <label className={cx('checkbox-text')}>
                {text}
            </label>
        </div>
    );
}

CheckboxComponent.propTypes = {
    text: PropTypes.string,
    register: PropTypes.func,
    registerName: PropTypes.string.isRequired,
    registerValue: PropTypes.any.isRequired,
}

export default CheckboxComponent;