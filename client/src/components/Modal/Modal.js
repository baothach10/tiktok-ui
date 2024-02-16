import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './Modal.module.scss'

const cx = classNames.bind(styles)

function Modal({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('login-modal')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

Modal.propTypes = {
    children: PropTypes.node,
}

export default Modal;