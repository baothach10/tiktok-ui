import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './Login.module.scss';

const cx = classNames.bind(styles)

function LoginFooter({ text, onClick }) {
    return (
        <div className={cx('dialog-footer')}>
            <div data-e2e="bottom-text">{text['bottomText']}</div>
            <div className={cx('btn-container')}>
                <span className={cx('btn-content')} onClick={() => onClick(prev => !prev)}>{text['bottomButtonContent']}</span>
            </div>
        </div>
    );
}

LoginFooter.propTypes = {
    text: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default LoginFooter;