import PropTypes from 'prop-types'
import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss'
import Header from '../components/Header/Header'
import Sidebar from './Sidebar/Sidebar'

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default DefaultLayout;