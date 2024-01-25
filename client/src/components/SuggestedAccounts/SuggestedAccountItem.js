import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types'

import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SuggestedAccountPreview from './SuggestedAccountPreview';

const cx = classNames.bind(styles)

function SuggestedAccountItem({ avatar, nickname, fullName, checked}) {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex='-1' {...props}>
                <PopperWrapper>
                    <SuggestedAccountPreview/>
                </PopperWrapper>
            </div>
        )
    }

    return (
        <div>
            <Tippy
                offset={[-25,0]}
                interactive
                delay={[800, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src={avatar}
                        alt={`${nickname}'s avatar`}
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{nickname}</strong>
                            {!!checked && <FontAwesomeIcon className={cx('checked')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('full-name')}>{fullName}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    checked: PropTypes.bool,
}

export default SuggestedAccountItem;