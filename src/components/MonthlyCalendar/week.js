import React from 'react';
import PropTypes from 'prop-types';
import { addDays, isSameDay } from '../Calendar/helpers';
import Day from './day';

export default function Week(props) {
    const {
        selectedDate,
        startDate,
        endDate,
        minDate,
        maxDate,
        firstDayMonth,
        onSelectDate,
    } = props;

    function Days() {
        let date = new Date(startDate);
        const days = [];

        while (date <= endDate) {
            days.push(
                <Day
                    date={date}
                    firstDayMonth={firstDayMonth}
                    key={date.getTime()}
                    minDate={minDate}
                    maxDate={maxDate}
                    onSelect={onSelectDate}
                    isSelected={isSameDay(date, selectedDate)}
                />,
            );
            date = addDays(date, 1);
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
    selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    onSelectDate: PropTypes.func,
};

Week.defaultProps = {
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    startDate: undefined,
    endDate: undefined,
    selectedDate: undefined,
    onSelectDate: () => {},
};
