import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import styles from './PostContent.module.scss';

const cx = classNames.bind(styles)

function ProgressBar({ vidRef, done }) {
    console.log(vidRef.duration)

    return (
        <>
            <div className={cx('video-seekbar')}>
                <div className={cx('video-seekbar-fill')} style={{ width: `${done}%` }}>

                </div>
            </div>
        </>
    );
}

ProgressBar.propTypes = {
    done: PropTypes.number.isRequired
}
export default ProgressBar;