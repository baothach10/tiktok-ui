import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SuggestedAccountPreview from './SuggestedAccountPreview';

const cx = classNames.bind(styles)

function SuggestedAccountItem({ user }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex='-1' {...props}>
                <PopperWrapper>
                    <SuggestedAccountPreview
                        user={user}
                    />
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                offset={[-25, 0]}
                interactive
                delay={[500,0]}
                placement='bottom'
                content={renderPreview()}
                className='tippy-button-container'
            >
                <div className={cx('account-item')} id={user.id}>
                    <img
                        className={cx('avatar')}
                        src={user.avatar}
                        alt={`${user.nickname}'s avatar`}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{(user.nickname.length > 15) ? `${user.nickname.slice(0, 14)}...` : user.nickname}</strong>
                            {!!user.checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('full-name')}>{(user.fullName.length > 15) ? `${user.fullName.slice(0, 16)}...` : user.fullName}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default SuggestedAccountItem;