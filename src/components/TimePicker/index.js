/* eslint-disable react/no-unused-prop-types */
import React, { useEffect, useRef, useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import ClockIcon from './icons/clock';
import Input from '../Input/pickerInput';
import TimeSelect from './timeSelect';
import get12HourTime from './helpers/get12HourTime';
import getInputValue from './helpers/getInputValue';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';
import StyledModal from './styled/modal';
import { useReduxForm } from '../../libs/hooks';

/**
 * A TimePicker is used to input a time by displaying an interface the user can interact with.
 * @category Form
 */
const TimePicker = React.forwardRef((props, ref) => {
    const {
        placeholder,
        label,
        required,
        style,
        className,
        hideLabel,
        name,
        bottomHelpText,
        isCentered,
        error,
        readOnly,
        disabled,
        tabIndex,
        id,
        cancelLabel,
        okLabel,
        onChange,
        hour24,
        onClick,
        onBlur,
        onFocus,
        value: valueProp,
        icon: iconInProps,
        size,
        valueAlignment,
        borderRadius,
    } = useReduxForm(props);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(hour24 ? valueProp : get12HourTime(valueProp));
    const inputRef = useRef();
    const timeSelectRef = useRef();
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

    const getTriggerInputValue = () => {
        return getInputValue(value, placeholder, hour24);
    };

    const setFocusToHourInput = () => {
        timeSelectRef.current.focusHourInput();
    };

    const handleKeyDown = event => {
        const { keyCode } = event;
        const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
        if (shouldOpenModal) {
            setIsOpen(true);
        }
    };

    const handleClick = event => {
        if (!readOnly) {
            setIsOpen(true);
            onClick(event);
        }
    };

    const handleBlur = () => {
        onBlur(valueProp);
    };

    const handleFocus = () => {
        onFocus(valueProp);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        setValue(hour24 ? valueProp : get12HourTime(valueProp));
    }, [valueProp, hour24]);

    const icon = iconInProps || <ClockIcon />;

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Input
                id="time-picker_time-input"
                ref={inputRef}
                label={label}
                placeholder={placeholder}
                icon={icon}
                iconPosition="right"
                required={required}
                value={getTriggerInputValue()}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                onFocus={handleFocus}
                onBlur={handleBlur}
                hideLabel={hideLabel}
                name={name}
                bottomHelpText={bottomHelpText}
                isCentered={isCentered}
                error={error}
                readOnly={readOnly}
                disabled={disabled}
                tabIndex={tabIndex}
                size={size}
                valueAlignment={valueAlignment}
                borderRadius={borderRadius}
            />

            <StyledModal
                id="time-picker_modal"
                isOpen={isOpen}
                onRequestClose={closeModal}
                onOpened={setFocusToHourInput}
            >
                <TimeSelect
                    onCloseModal={closeModal}
                    onChange={onChange}
                    cancelLabel={cancelLabel}
                    okLabel={okLabel}
                    value={value}
                    ref={timeSelectRef}
                    hour24={hour24}
                />
            </StyledModal>
        </StyledContainer>
    );
});

TimePicker.propTypes = {
    /** Sets the date for the TimePicker programmatically. */
    value: PropTypes.string,
    /** Override the label of the 'Cancel' button. */
    cancelLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Override the label of the 'OK' button. */
    okLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the TimePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the TimePicker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the TimePicker label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the TimePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the TimePicker must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the TimePicker. */
    name: PropTypes.string,
    /** Shows the help message below the TimePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** @deprecated Backward compatibility only. Use `valueAlignment` instead. */
    isCentered: PropTypes.bool,
    /** Specifies that the TimePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the TimePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the TimePicker element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** Specifies that the TimePicker will be in a 24hr format. This value defaults to false. */
    hour24: PropTypes.bool,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. Defaults to a Calendar icon */
    icon: PropTypes.node,
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specifies the alignment of the value text. This value defaults to left. */
    valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** The border radius of the button. Valid values are square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-rounded', 'rounded']),
};

TimePicker.defaultProps = {
    value: undefined,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    placeholder: null,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    required: false,
    name: undefined,
    bottomHelpText: null,
    isCentered: false,
    error: null,
    readOnly: false,
    disabled: false,
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    hour24: false,
    icon: undefined,
    size: 'medium',
    valueAlignment: undefined,
    borderRadius: 'rounded',
};

export default TimePicker;
