import React from 'react';
import PropTypes from 'prop-types';
import StyledContainer from './styled/container';
import TimeRangeComponent from './timeRangeComponent';
import RenderIf from '../RenderIf';
import StyledLabel from './styled/label';
import StyledHelpText from './styled/helpText';
import StyledErrorText from './styled/errorText';

/**
 * TimeRangePicker is a graphical user interface widget that
 * allows the user to select a time range.
 * @category Form
 */
const TimeRangePicker = props => {
    const {
        value,
        cancelLabel,
        okLabel,
        placeholder,
        label,
        hideLabel,
        required,
        bottomHelpText,
        error,
        readOnly,
        disabled,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        onChange,
        id,
        className,
        style,
        hour24,
        sharpHours,
        allowCustomTime,
    } = props;

    const handleChange = (...args) => {
        onChange(...args);
    };

    const handleClick = (...args) => {
        onClick(...args);
    };

    const handleFocus = (...args) => {
        onFocus(...args);
    };

    const handleBlur = (...args) => {
        onBlur(...args);
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId="timerangepicker-label"
                />
            </RenderIf>
            <TimeRangeComponent
                label={label}
                placeholder={placeholder}
                required={required}
                value={value}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                readOnly={readOnly}
                disabled={disabled}
                tabIndex={tabIndex}
                okLabel={okLabel}
                cancelLabel={cancelLabel}
                hour24={hour24}
                sharpHours={sharpHours}
                allowCustomTime={allowCustomTime}
            />
            <RenderIf isTrue={!!bottomHelpText}>
                <StyledHelpText>{bottomHelpText}</StyledHelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <StyledErrorText>{error}</StyledErrorText>
            </RenderIf>
        </StyledContainer>
    );
};

TimeRangePicker.propTypes = {
    /** Sets the date for the TimeRangePicker programmatically. */
    value: PropTypes.string,
    /** Override the label of the 'Cancel' button. */
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Override the label of the 'OK' button. */
    okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Text that is displayed when the TimeRangePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the TimeRangePicker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the TimeRangePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the TimeRangePicker must be filled out before submitting the form. */
    required: PropTypes.bool,
    /** Shows the help message below the TimeRangePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the TimeRangePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the TimeRangePicker is read-only. */
    readOnly: PropTypes.bool,
    /** Specifies that the TimeRangePicker element should be disabled. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies that the TimeRangePicker will be in a 24hr format. */
    hour24: PropTypes.bool,
    /** Specifies amount of minutes between each option time. Defaults to true (Sharp Hours). Otherwise (Half Hours) */
    sharpHours: PropTypes.bool,
    /** Specifies whether to allow Custom Time or not.  */
    allowCustomTime: PropTypes.bool,
};

TimeRangePicker.defaultProps = {
    value: undefined,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    placeholder: null,
    label: undefined,
    hideLabel: false,
    required: false,
    bottomHelpText: null,
    error: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    hour24: false,
    sharpHours: true,
    allowCustomTime: false,
};

export default TimeRangePicker;
