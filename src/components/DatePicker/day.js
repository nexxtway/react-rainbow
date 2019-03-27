import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Day(props) {
    const {
        date,
        firstDayMonth,
        isSelected,
        minDate,
        maxDate,
        onChange,
    } = props;
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled = date > maxDate || date < minDate;
    if (isAdjacentDate || isDisabled) {
        return (
            <td className="rainbow-date-picker_calendar-day">
                <span className="rainbow-date-picker_calendar-day-adjacent">{day}</span>
            </td>
        );
    }
    const buttonClassNames = classnames({
        'rainbow-date-picker_calendar-day-button': true,
        'rainbow-date-picker_calendar-day-button--selected': isSelected,
    });
    return (
        <td className="rainbow-date-picker_calendar-day">
            <button
                onClick={() => onChange(new Date(date))}
                className={buttonClassNames}>
                {day}
            </button>
        </td>
    );
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
};

Day.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    isSelected: false,
    onChange: () => {},
};
