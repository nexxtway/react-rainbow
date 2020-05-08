import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import valuePropValidation from './helpers/valuePropValidation';
import getNormalizedValue from './helpers/getNormalizedValue';
import { useLocale, useUniqueIdentifier } from '../../libs/hooks';
import useReduxForm from './../../libs/hooks/useReduxForm';
import RequiredAsterisk from '../RequiredAsterisk';
import RenderIf from '../RenderIf';
import WeekDayItems from './weekDayItems';
import StyledTextError from '../Input/styled/errorText';
import { StyledFieldset, StyledHelpText, StyledLabel } from './styled';

/**
 * A WeekDayPicker allows to select the days of the week
 * @category Form
 */
const WeekDayPicker = React.forwardRef((props, ref) => {
    const {
        id,
        name,
        value,
        label,
        bottomHelpText,
        availableDates,
        locale: localeProp,
        disabled,
        required,
        readOnly,
        multiple,
        error,
        onChange,
        className,
        style,
    } = useReduxForm(props);

    const locale = useLocale(localeProp);
    const defaultFieldsetName = useUniqueIdentifier('week-day-items');
    const fieldsetName = name || defaultFieldsetName;

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    const handleOnChange = e => {
        const weekDayValue = e.target.value;
        const isChecked = e.target.checked;

        if (!disabled && !readOnly) {
            onChange(getNormalizedValue(weekDayValue, isChecked, multiple, value));
        }
    };

    return (
        <StyledFieldset className={className} style={style} id={id}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>
                    <RequiredAsterisk required={required} />
                    {label}
                </StyledLabel>
            </RenderIf>
            <WeekDayItems
                name={fieldsetName}
                value={value}
                availableDates={availableDates}
                locale={locale}
                disabled={disabled}
                required={required}
                readOnly={readOnly}
                multiple={multiple}
                error={error}
                onChange={handleOnChange}
                ref={inputRef}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <StyledHelpText>{bottomHelpText}</StyledHelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <StyledTextError>{error}</StyledTextError>
            </RenderIf>
        </StyledFieldset>
    );
});

WeekDayPicker.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** An identifier for the group of radio items. */
    name: PropTypes.string,
    /** The value of WeekDayPicker, a list of days selected. */
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
    /** The WeekDayPicker label. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Shows the help message below the WeekDayPicker */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies the available days from the week for selection. */
    availableDates: PropTypes.arrayOf(valuePropValidation),
    /** The WeekDayPicker locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** Specifies that the WeekDayPicker element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that the WeekDayPicker field must be filled before submitting the form. */
    required: PropTypes.bool,
    /** Specifies that the WeekDayPicker is read-only. */
    readOnly: PropTypes.bool,
    /** Specifies that the WeekDayPicker can have more than one selected option. */
    multiple: PropTypes.bool,
    /** Specifies that the WeekDayPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

WeekDayPicker.defaultProps = {
    id: undefined,
    name: undefined,
    value: undefined,
    label: undefined,
    bottomHelpText: undefined,
    availableDates: [],
    locale: undefined,
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
