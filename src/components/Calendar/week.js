import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CalendarContext } from './context';
import { useDaysBuilder } from './hooks';
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
    const Days = useDaysBuilder(Day, {
        value,
        startDate,
        endDate,
        minDate,
        maxDate,
        firstDayMonth,
        lastDayMonth,
        onChange,
        currentRange,
        selectionType,
        selectedRange,
    });

    return <tr>{Days}</tr>;
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
