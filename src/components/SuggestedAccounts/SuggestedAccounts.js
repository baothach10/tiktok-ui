import PropTypes from 'prop-types'
import classNames from "classnames/bind";

import styles from './SuggestedAccounts.module.scss'
import SuggestedAccountItem from './SuggestedAccountItem';
import { users } from 'src/fakedata';

const cx = classNames.bind(styles)

function SuggestedAccounts({label}) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {users.map((user,index) => {
                return (
                    <SuggestedAccountItem
                        key={index}
                        avatar={user.avatar}
                        nickname={user.nickname}
                        fullName={user.fullName}
                        checked={user.checked}
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