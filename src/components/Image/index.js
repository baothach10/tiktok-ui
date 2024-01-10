import {useState, forwardRef} from 'react'
import images from '~/assets/images';
import styles from './Image.module.scss'
import classNames from 'classnames';

function Image({src, alt, className, fallBack: customFallback = images.noImage, ...props}, ref) {
    const [fallBack, setFallBack] = useState('')
    const handleError = () => {
        setFallBack(customFallback)
    }
    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError}/>
    );
}

export default forwardRef(Image);