import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './SubmitButton.module.scss';

const cx = classNames.bind(styles)

function SubmitButton({isDisabled, value}) {
    return (
        <input className={cx('login-btn')} disabled={isDisabled()} type="submit" value={value} />
    );
}

SubmitButton.propTypes = {
    isDisabled: PropTypes.func,
    value: PropTypes.string.isRequired
}

export default SubmitButton;