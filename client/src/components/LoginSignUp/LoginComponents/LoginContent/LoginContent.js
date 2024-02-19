import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types';

import styles from './LoginContent.module.scss';
import { ExpandIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

const defaultFn = () => { }

function LoginContent({ title, options, guest, children, onClick, onChange = defaultFn }) {

    const listRef = useRef()
    const expandRef = useRef()
    const [expanded, setExpanded] = useState(false)
    const showedList = expanded ? options : options?.slice(0, 4)

    const handleClick = (option) => {
        if (option.children) {
            return <>{option.children}</>
        }
    }

    const handleExpand = () => {
        setExpanded(true)
        expandRef.current.style.display = 'none'
    }

    useEffect(() => {
        if (options !== undefined) {
            if (!guest) {
                listRef.current.style.height = '256px'
            } else {
                listRef.current.style.height = '368px'
                setExpanded(true)
                expandRef.current.style.display = 'none'
            }
        } else {
            listRef.current.style.display = 'none'
        }
    }, [guest, options])

    return (
        <div className={cx('content-container')}>
            <div className={cx('content')}>
                <h2 className={cx('login-title')}>{title}</h2>
                <div className={cx('login-option-container')} ref={listRef}>
                    {!!options && showedList.map((option, index) => {
                        const isParent = !!option.children
                        return (
                            <div key={index}
                                onClick={() => {
                                    if (isParent) {
                                        onClick((prev) => [...prev, option.children])
                                    } else {
                                        onChange(option)
                                    }
                                }}
                            >
                                <div className={cx('login-option')} onClick={() => handleClick(option)}>
                                    <div className={cx('icon-container')}>
                                        {option.icon}
                                    </div>
                                    <div className={cx('title-container')}>
                                        {option.title}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div className={cx('drop-down-container')} onClick={handleExpand} ref={expandRef}>
                        <ExpandIcon />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

LoginContent.propTypes = {
    title: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    options: PropTypes.array,
    guest: PropTypes.bool,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export default LoginContent;