import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { useSelector } from 'react-redux';

import styles from './SuggestedAccounts.module.scss'
import SuggestedAccountItem from './SuggestedAccountItem';

const cx = classNames.bind(styles)

function SuggestedAccounts({label}) {
    const users = useSelector(state => state.users.usersList)
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {users.map(user => {
                return (
                    <SuggestedAccountItem
                        key={user.id}
                        user={user}
                    />
                );
            })}
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired
}

export default SuggestedAccounts;