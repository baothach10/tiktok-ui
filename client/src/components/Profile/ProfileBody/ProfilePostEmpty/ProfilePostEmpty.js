import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from './ProfilePostEmpty.module.scss'

import { FlagIcon, PersonIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function ProfilePostEmpty({isChosen}) {
    const content = {
        'video-feed-1': {
            title: 'Upload your first video',
            description: 'Your videos will appear here',
        },
        'video-feed-2': {
            title: 'Favorite posts',
            description: 'Your favorite posts will appear here.',
        },
        'video-feed-3': {
            title: 'No liked videos yet',
            description: 'Videos you liked will appear here',
        }
    }
    
    return (
        <div className={cx('main-detail-wrapper')}>
            <div className={cx('main-detail-container')}>
                {(isChosen === 'video-feed-2') ? <FlagIcon className={cx('logo')} /> : <PersonIcon className={cx('logo')} />}
                <p className={cx('title')}>{content[isChosen].title}</p>
                <p className={cx('description')}>{content[isChosen].descr}</p>
            </div>
        </div>
    );
}

ProfilePostEmpty.propTypes = {
    isChosen: PropTypes.string
}

export default ProfilePostEmpty;