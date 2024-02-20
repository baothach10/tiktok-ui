import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './InputFooter.module.scss';

const cx = classNames.bind(styles)

function LoginFooter({ onClick1, text1, onClick2, text2 }) {
    if (!((onClick1 && text1) || (onClick2 && text2) || (onClick1 && text1 && onClick2 && text2))) {
        console.error('The props must be passed in the correct pair!')
    }
    return (
        <div className={cx('options-container')}>
            <p onClick={onClick1} className={cx('login-option')}>{text1}</p>
            {(onClick2 && text2 && (
                <>
                    <span></span>
                    <p onClick={onClick2} className={cx('login-option')}>{text2}</p>
                </>
            ))}
        </div>
    );
}

LoginFooter.propTypes = {
    onClick1: PropTypes.func.isRequired,
    text1: PropTypes.string.isRequired,
    onClick2: PropTypes.func,
    text2: PropTypes.string
}

export default LoginFooter;