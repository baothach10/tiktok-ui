import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { ArrowIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

const defaultFn = () => {

}

function Menu({ children, items = [], hideOnClick = false, expandButton, width, height, onChange = defaultFn }) {

    const wrapperRef = useRef()
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    useEffect(() => {
        wrapperRef?.current?.style.setProperty('width', width, 'important') 
        wrapperRef?.current?.style.setProperty('height', height, 'important') 
    }, [height, width])

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children
            return <MenuItem
                key={index}
                data={item}
                style
                onClick={() => {
                    if (isParent) {
                        setHistory((prev) => [...prev, item.children])
                    } else {
                        onChange(item)
                    }
                }}
            />
        })
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = (attrs) => (
        <div
            ref={wrapperRef}
            className={cx('menu-list')}
            tabIndex="-1"
            style={{
                height: height,
                width: width,
            }}
        >
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>
                    {renderItems()}
                </div>
                {!!expandButton && (
                    <a href='/' className={cx('expand-btn-container')}>
                        <span className={cx('expand-btn')}>{expandButton}</span>
                    </a>
                )}
            </PopperWrapper>
            <ArrowIcon className={cx('arrow')} />
        </div>
    )

    // Reset to first page
    const handleResetMenu = () => setHistory(prev => prev.slice(0, 1))

    return (
        <div>
            <Tippy
                hideOnClick={hideOnClick}
                interactive
                delay={[0, 800]}
                offset={[12, 8]}
                placement='bottom-end'
                onHide={handleResetMenu}
                content={renderResult()}
                className='tippy-button-container'
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    expandButton: PropTypes.node,
    onChange: PropTypes.func,
}

export default Menu;