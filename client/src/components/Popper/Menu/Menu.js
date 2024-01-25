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

function Menu({ children, items = [], hideOnClick = false, expandButton, width, maxHeight, onChange = defaultFn }) {

    const [expanded, setExpanded] = useState(false)
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

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

    const handleExpand = (e) => {
        e.currentTarget.previousElementSibling.style.maxHeight = '448px'
        e.currentTarget.previousElementSibling.style.overflow = 'visible'
        e.currentTarget.style.display = 'none'
        setExpanded(true)
    }

    const handleStrink = (e) => {
        e.currentTarget.nextSibling.style.display = 'flex';
        e.currentTarget.style.maxHeight = maxHeight;
        e.currentTarget.style.overflow = 'hidden';
        setExpanded(false)
    }


    const renderResult = (attrs) => (
        <div
            className={cx('menu-list')}
            tabIndex="-1"
            style={{
                width: width,
            }}
        >
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div
                    onMouseLeave={(e) => {
                        if (expanded) {
                            handleStrink(e)
                        }
                    }}
                    className={cx('menu-body')}
                    style={{
                        maxHeight: maxHeight,
                    }}

                >
                    {renderItems()}
                </div>
                {!!expandButton && (
                    <div className={cx('expand-btn-container')} onClick={(e) => handleExpand(e)}>
                        <span className={cx('expand-btn')}>{expandButton}</span>
                    </div>
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
                delay={[0, 300]}
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
    maxHeight: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func,
}

export default Menu;