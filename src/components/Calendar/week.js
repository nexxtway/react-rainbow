import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { addDays, shouldDateBeSelected, isDateWithinRange } from './helpers';
import { CalendarContext } from './context';
import Day from './day';

export default function Week(props) {
    const { value, startDate, endDate, minDate, maxDate, firstDayMonth, onChange } = props;
    const { currentRange, selectionType, selectedRange } = useContext(CalendarContext);

    function Days() {
        let date = new Date(startDate);
        const days = [];

        let index = 0;
        while (date <= endDate) {
            days.push(
                <Day
                    date={date}
                    firstDayMonth={firstDayMonth}
                    key={date.getTime()}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={onChange}
                    isSelected={shouldDateBeSelected(date, value, selectionType, selectedRange)}
                    isWithinRange={isDateWithinRange(date, currentRange)}
                    isFirstDayOfWeek={index === 0}
                    isLastDayOfWeek={index === 6}
                />,
            );
            date = addDays(date, 1);
            index += 1;
        }
        return days;
    }

    return (
        <tr>
            <Days />
        </tr>
    );
}

Week.propTypes = {
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    startDate: PropTypes.instanceOf(Date),
    endDate: PropTypes.instanceOf(Date),
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onChange: PropTypes.func,
};

Week.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    startDate: undefined,
    endDate: undefined,
    value: undefined,
    onChange: () => {},
};
