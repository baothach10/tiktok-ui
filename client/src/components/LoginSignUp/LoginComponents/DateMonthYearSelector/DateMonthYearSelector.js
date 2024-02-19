import classNames from "classnames/bind";
import PropTypes from 'prop-types'

import styles from './DateMonthYearSelector.module.scss';
import DateSelector from "../DateSelector";
import { useState } from "react";
import { MONTHS, YEARS } from "src/static/TextConfig";

const cx = classNames.bind(styles)

function DateMonthYearSelector({ register, setValue }) {
    const [day, setDay] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30])
    const [month, setMonth] = useState(0)
    const [year, setYear] = useState(0)

    function daysInMonth(month, year) {
        const monthNum = MONTHS.indexOf(month) + 1
        const numberOfDays = new Date(year, monthNum, 0).getDate();
        const days = []
        for (let i = 1; i <= numberOfDays; i++) {
            days.push(i)
        }
        return days
    }

    return (
        <div className={cx('selector-container')}>
            <DateSelector
                register={register}
                setValue={setValue}
                text={'Month'}
                dates={MONTHS}
                onClick={setMonth}
            />
            <DateSelector
                register={register}
                setValue={setValue}
                text={'Day'}
                dates={daysInMonth(month, year)}
                onClick={setDay}
            />
            <DateSelector
                register={register}
                setValue={setValue}
                text={'Year'}
                dates={YEARS}
                onClick={setYear}
            />
        </div>
    );
}

DateMonthYearSelector.propTypes = {
    register: PropTypes.func,
    setValue: PropTypes.func
}

export default DateMonthYearSelector;
