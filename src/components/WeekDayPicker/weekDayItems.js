import React from 'react';
import PropTypes from 'prop-types';
import valuePropValidation from './helpers/valuePropValidation';
import WeekDay from './weekDay';
import getWeekDays from './helpers/getWeekDays';
import isWeekDayChecked from './helpers/isWeekDayChecked';

export default function WeekDayItems(props) {
    const {
        name,
        value,
        availableDates,
        disabled,
        required,
        readOnly,
        multiple,
        error,
        onChange,
    } = props;

    const isChecked = weekDay => isWeekDayChecked(weekDay, value, multiple);

    const isDayAvailable = day => {
        if (availableDates.length) {
            return availableDates.includes(day);
        }
        return true;
    };

    const isDisabled = day => {
        return disabled || !isDayAvailable(day);
    };

    const weekDayElements = getWeekDays().map((weekDay, index) => {
        const key = `week-day-${index}`;
        return (
            <WeekDay
                key={key}
                name={name}
                value={weekDay}
                isChecked={isChecked(weekDay)}
                disabled={isDisabled(weekDay)}
                required={required}
                readOnly={readOnly}
                multiple={multiple}
                error={error}
                onChange={onChange}
            />
        );
    });

    return <div>{weekDayElements}</div>;
}

WeekDayItems.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
            return valuePropValidation(propValue, key, componentName, location, propFullName);
        }),
        PropTypes.oneOf([
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
            '',
        ]),
    ]),
    availableDates: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
        return valuePropValidation(propValue, key, componentName, location, propFullName);
    }),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    multiple: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
};

WeekDayItems.defaultProps = {
    name: undefined,
    value: undefined,
    availableDates: [],
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
};
