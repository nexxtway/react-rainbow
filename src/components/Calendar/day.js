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
            <td className="rainbow-calendar_day">
                <span className="rainbow-calendar_day-adjacent">{day}</span>
            </td>
        );
    }

    const buttonClassNames = classnames('rainbow-calendar_day-button', {
        'rainbow-calendar_day-button--selected': isSelected,
    });

    return (
        <td className="rainbow-calendar_day">
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
