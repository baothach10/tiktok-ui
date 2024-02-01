import PropTypes from 'prop-types'
import classNames from "classnames/bind";

import styles from './SuggestedAccounts.module.scss'
import SuggestedAccountItem from './SuggestedAccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function SuggestedAccounts({label}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:4000/api/users').then(res => res.json());
            setUsers(response)
        }
        fetchData()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {users.map((user,index) => {
                return (
                    <SuggestedAccountItem
                        key={index}
                        avatar={user.avatar}
                        nickname={(user.nickname.length > 15) ? `${user.nickname.slice(0, 14)}...` : user.nickname}
                        fullName={(user.fullName.length > 15) ? `${user.fullName.slice(0, 16)}...` : user.fullName}
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