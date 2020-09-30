import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import ClockIcon from './icons/clock';
import Input from '../Input/pickerInput';
import TimeSelect from './timeSelect';
import get12HourTime from './helpers/get12HourTime';
import getInputValue from './helpers/getInputValue';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';
import StyledModal from './styled/modal';

/**
 * A TimePicker is used to input a time by displaying an interface the user can interact with.
 * @category Form
 */
const TimePicker = (props) => {
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
    } = props;
    const [isOpen, setIsOpen]= useState(false);
    const [value, setValue] = useState(hour24 ? value : get12HourTime(value));
    const inputRef = React.createRef();
    const timeSelectRef = React.createRef();
    const prevValue = useRef(value);

    useEffect(() => {
        if (prevValue !== props.value) {
            updateValue();
        }
    });
    
   const getTriggerInputValue = () => {
        return getInputValue(value, placeholder, hour24);
    }

    const setFocusToHourInput = () => {
        timeSelectRef.current.focusHourInput();
    }

    const updateValue = () => {
        setValue(hour24 ? props.value : get12HourTime(props.value));
    }

    const handleKeyDown = (event) => {
        const { keyCode } = event;
        const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
        if (shouldOpenModal) {
            setIsOpen(true);
        }
    }

    const handleClick = (event) => {
        const { onClick } = props;
        if (!readOnly) {
            setIsOpen(true);
            onClick(event);
        }
    }

    const handleBlur = () => {
        const { onBlur, value } = props;
        onBlur(value);
    }

    const handleFocus = () => {
        const { onFocus, value } = props;
        onFocus(value);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    /**
     * Sets focus on the element.
     * @public
     */
    const focus() {
        inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    const click() {
        inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    const blur() {
        inputRef.current.blur();
    }

        return (
            <StyledContainer id={id} className={className} style={style}>
                <Input
                    id="time-picker_time-input"
                    ref={inputRef}
                    label={label}
                    placeholder={placeholder}
                    icon={<ClockIcon />}
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
}

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
    /** A boolean to hide the TimePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the TimePicker must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the TimePicker. */
    name: PropTypes.string,
    /** Shows the help message below the TimePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the TimePicker text will be centered. This value defaults to false. */
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
};

TimePicker.defaultProps = {
    value: undefined,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    placeholder: null,
    label: undefined,
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
};

export default withReduxForm(TimePicker);
