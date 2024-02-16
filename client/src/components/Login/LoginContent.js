import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { useState } from "react";

import styles from './Login.module.scss';

const cx = classNames.bind(styles)

const defaultFn = () => { }

function LoginContent({ title, options, children, onClick, onChange = defaultFn }) {

    const handleClick = (option) => {
        if (option.children) {
            return <div>{option.children}</div>
        }
    }

    return (
        <div className={cx('content-container')}>
            <div className={cx('content')}>
                <h2 className={cx('login-title')}>{title}</h2>
                <div className={cx('login-option-container')}>
                    {children}
                    {!!options && options.map((option, index) => {
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
                </div>
            </div>
        </div>
    );
}

LoginContent.propTypes = {
    title: PropTypes.string.isRequired,
    options: PropTypes.array,
    onChange: PropTypes.func,
}

export default LoginContent;