import React from 'react';
import PropTypes from 'prop-types';
import valuePropValidation from './helpers/valuePropValidation';
import WeekDay from './weekDay';
import getWeekDays from './helpers/getWeekDays';
import isWeekDayChecked from './helpers/isWeekDayChecked';

const WeekDayItems = React.forwardRef((props, ref) => {
    const {
        name,
        value,
        availableDates,
        locale,
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

    return getWeekDays().map((weekDay, index) => {
        const isFirstInput = index === 0;
        const inputRef = isFirstInput ? ref : undefined;

        return (
            <WeekDay
                key={weekDay}
                name={name}
                value={weekDay}
                locale={locale}
                isChecked={isChecked(weekDay)}
                disabled={isDisabled(weekDay)}
                required={required}
                readOnly={readOnly}
                multiple={multiple}
                error={error}
                onChange={onChange}
                ref={inputRef}
            />
        );
    });
});

WeekDayItems.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(valuePropValidation),
        PropTypes.oneOf([
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
        ]),
    ]),
    availableDates: PropTypes.arrayOf(valuePropValidation),
    locale: PropTypes.string,
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
    locale: undefined,
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
};

export default WeekDayItems;
