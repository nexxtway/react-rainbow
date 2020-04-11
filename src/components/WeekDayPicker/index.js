import React from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../libs/hooks';
import RequiredAsterisk from '../RequiredAsterisk';
import RenderIf from '../RenderIf';
import WeekDayItems from './weekDayItems';
import { StyledFieldset, StyledLabel, StyledTextError } from './styled';

const WeekDayPicker = props => {
    const {
        id,
        name,
        value,
        label,
        hideLabel,
        disabled,
        required,
        readOnly,
        multiple,
        error,
        onChange,
        className,
        style,
    } = props;

    const defaultFieldsetName = useUniqueIdentifier('week-day-items');
    const fieldsetName = name || defaultFieldsetName;

    return (
        <StyledFieldset className={className} style={style} id={id}>
            <RenderIf isTrue={!hideLabel}>
                <StyledLabel>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>
            <WeekDayItems
                name={fieldsetName}
                value={value}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                multiple={multiple}
                error={error}
                onChange={onChange}
            />
            <RenderIf isTrue={!!error}>
                <StyledTextError>{error}</StyledTextError>
            </RenderIf>
        </StyledFieldset>
    );
};

WeekDayPicker.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    hideLabel: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    readOnly: PropTypes.bool,
    multiple: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
};

WeekDayPicker.defaultProps = {
    id: undefined,
    name: undefined,
    value: '',
    label: undefined,
    hideLabel: false,
    disabled: false,
    required: false,
    readOnly: false,
    multiple: false,
    error: null,
    onChange: () => {},
    className: undefined,
    style: undefined,
};

export default WeekDayPicker;
