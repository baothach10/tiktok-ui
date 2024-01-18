import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SuggestedAccounts.module.scss'
import SuggestedAccountItem from './SuggestedAccountItem';

const cx = classNames.bind(styles)

function SuggestedAccounts({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <SuggestedAccountItem/>
            <SuggestedAccountItem/>
            <SuggestedAccountItem/>
            <SuggestedAccountItem/>
            <SuggestedAccountItem/>
            <SuggestedAccountItem/>
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}

export default SuggestedAccounts;