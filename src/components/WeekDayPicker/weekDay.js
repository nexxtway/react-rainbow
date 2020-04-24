import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../libs/hooks';
import getWeekDayLabel from './helpers/getWeekDayLabel';
import { StyledInput, StyledWeekDayContainer, StyledWeekDayLabel } from './styled';

const WeekDay = React.forwardRef((props, ref) => {
    const {
        name,
        value,
        locale,
        isChecked,
        disabled,
        required,
        readOnly,
        multiple,
        error,
        onChange,
    } = props;

    const weekDayId = useUniqueIdentifier('week-day');
    const inputType = multiple ? 'checkbox' : 'radio';

    return (
        <StyledWeekDayContainer>
            <StyledInput
                id={weekDayId}
                as="input"
                name={name}
                value={value}
                type={inputType}
                disabled={disabled}
                checked={isChecked}
                required={required}
                readOnly={readOnly}
                error={error}
                onChange={onChange}
                ref={ref}
            />

            <StyledWeekDayLabel
                htmlFor={weekDayId}
                isChecked={isChecked}
                readOnly={readOnly}
                disabled={disabled}
                error={error}
            >
                {getWeekDayLabel(value, locale)}
            </StyledWeekDayLabel>
        </StyledWeekDayContainer>
    );
});

WeekDay.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    locale: PropTypes.string,
    isChecked: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    multiple: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
};

WeekDay.defaultProps = {
    name: undefined,
    value: undefined,
    locale: undefined,
    isChecked: false,
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
};

export default WeekDay;
