import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import { useSelector } from 'react-redux';

import styles from './SuggestedAccounts.module.scss'
import SuggestedAccountItem from './SuggestedAccountItem';
import { userAPI } from 'src/services/userAPI';

const cx = classNames.bind(styles)

const users = await userAPI()
 
function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {users.data?.map(user => {
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