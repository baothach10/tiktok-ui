import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import SuggestedAccountPreview from './SuggestedAccountPreview';

const cx = classNames.bind(styles)

function SuggestedAccountItem() {
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
            </Tippy>
        </div>
    );
}

SuggestedAccountItem.propTypes = {

}

export default SuggestedAccountItem;