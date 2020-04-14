import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../libs/hooks';
import HiddenElement from '../Structural/hiddenElement';
import getFirstLetter from './helpers/getFirstLetter';
import { StyledWeekDayContainer, StyledWeekDayLabel } from './styled';

export default function WeekDay(props) {
    const {
        name,
        value,
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
            <HiddenElement
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
            />

            <StyledWeekDayLabel
                htmlFor={weekDayId}
                isChecked={isChecked}
                readOnly={readOnly}
                disabled={disabled}
                error={error}
            >
                {getFirstLetter(value)}
            </StyledWeekDayLabel>
        </StyledWeekDayContainer>
    );
}

WeekDay.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
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
    isChecked: false,
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
};
