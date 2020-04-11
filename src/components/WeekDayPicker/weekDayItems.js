import React from 'react';
import PropTypes from 'prop-types';
import WeekDay from './weekDay';
import getWeekDays from './helpers/getWeekDays';
import isWeekDayChecked from './helpers/isWeekDayChecked';

export default function WeekDayItems(props) {
    const { name, value, disabled, required, readOnly, multiple, error, onChange } = props;

    const isChecked = weekDay => isWeekDayChecked(weekDay, value, multiple);

    return getWeekDays().map((weekDay, index) => {
        const key = `week-day-${index}`;
        return (
            <WeekDay
                key={key}
                name={name}
                value={weekDay}
                isChecked={isChecked(weekDay)}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                multiple={multiple}
                error={error}
                onChange={onChange}
            />
        );
    });
}

WeekDayItems.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    multiple: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
};

WeekDayItems.defaultProps = {
    name: undefined,
    value: '',
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
};
