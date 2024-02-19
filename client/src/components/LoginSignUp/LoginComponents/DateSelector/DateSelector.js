import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react";

import styles from './DateSelector.module.scss'
import { CheckIcon, DropDownIcon } from "src/components/Icons";

const cx = classNames.bind(styles)

function DateSelector({ text, dates, register, setValue, onClick }) {
    const [opened, setOpened] = useState(false)
    const [displayText, setDisplayText] = useState(text)
    const [chosenField, setChosenField] = useState(-1)
    const selectorRef = useRef()
    const dropDownBtnRef = useRef()

    const handleExpand = () => {
        setOpened(prev => !prev)
    }

    const handleClick = (fieldIndex, fieldValue) => {
        setChosenField(fieldIndex)
        setDisplayText(fieldValue)
        setValue(text.toLowerCase() + 'Selector', fieldValue)
        setOpened(false)
        dropDownBtnRef.current.parentElement.style.color = 'rgba(22, 24, 35)'
        onClick(fieldValue)
    }

    useEffect(() => {
        if (opened) {
            selectorRef.current.style.display = 'block'
            dropDownBtnRef.current.style.transform = 'rotateZ(180deg)'
        } else {
            selectorRef.current.style.display = 'none'
            dropDownBtnRef.current.style.transform = 'rotateZ(0deg)'
        }
    }, [opened])

    return (
        <div className={cx('selector-container')}>
            <div className={cx('selector')} onClick={handleExpand}>
                {displayText}
                <span ref={dropDownBtnRef}>
                    <DropDownIcon className={cx('drop-down-btn')} />
                </span>
            </div>
            <div ref={selectorRef} className={cx('drop-down-list')}
            >
                {dates.map((date, index) => {
                    return (
                        <div key={index} className={cx('drop-down-option')} onClick={() => handleClick(index, date)}>
                            {date}
                            {(index === chosenField) && <CheckIcon className={cx('check-icon')} />}
                        </div>
                    )
                })}
            </div>
            <input type="hidden" {...register(text.toLowerCase() + 'Selector')} />
        </div>
    );
}

DateSelector.propTypes = {
    text: PropTypes.string.isRequired, 
    dates: PropTypes.array.isRequired, 
    register: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired, 
    onClick: PropTypes.func,
}

export default DateSelector;