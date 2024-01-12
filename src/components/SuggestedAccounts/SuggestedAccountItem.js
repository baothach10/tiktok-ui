import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles)

function SuggestedAccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png" 
                alt='user'
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>ABC</strong>
                    <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>ABC</p>
            </div>

        </div>
    );
}

SuggestedAccountItem.propTypes = {

}

export default SuggestedAccountItem;