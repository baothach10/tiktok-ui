import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './TextSeparator.module.scss';

const cx = classNames.bind(styles)

function TextSeparator({text}) {
    return (
        <div className={cx('separator-container')}>
            <div className={cx('separator-line')}></div>
            <div className={cx('separator-text')}>{text}</div>
            <div className={cx('separator-line')}></div>
        </div>
    );
}

TextSeparator.propTypes = {
    text: PropTypes.string.isRequired
}

export default TextSeparator;
