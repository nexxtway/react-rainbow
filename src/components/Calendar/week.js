import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { addDays, shouldDateBeSelected, isDateWithinRange, isSameDay } from './helpers';
import { CalendarContext } from './context';
import Day from './day';

export default function Week(props) {
    const {
        value,
        startDate,
        endDate,
        minDate,
        maxDate,
        firstDayMonth,
        lastDayMonth,
        onChange,
    } = props;
    const { currentRange, selectionType, selectedRange } = useContext(CalendarContext);

    const daysDiff = endDate.getDay() - startDate.getDay() + 1;
    const days = Array.from(Array(daysDiff), (_, index) => {
        const date = addDays(startDate, index);
        return (
            <Day
                date={date}
                firstDayMonth={firstDayMonth}
                key={date.getTime()}
                minDate={minDate}
                maxDate={maxDate}
                onChange={onChange}
                isSelected={shouldDateBeSelected(date, value, selectionType, selectedRange)}
                isWithinRange={isDateWithinRange(date, currentRange)}
                isFirstDayOfWeek={index === 0 || isSameDay(date, firstDayMonth)}
                isLastDayOfWeek={index === 6 || isSameDay(date, lastDayMonth)}
            />
        );
    });

    return <tr>{days}</tr>;
}

Week.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    lastDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func,
};

Week.defaultProps = {
    firstDayMonth: undefined,
    lastDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    startDate: undefined,
    endDate: undefined,
    value: undefined,
    onChange: () => {},
};
