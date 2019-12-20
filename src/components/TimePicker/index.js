import React, { Component } from 'react';
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
class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: props.hour24 ? props.value : get12HourTime(props.value),
        };
        this.inputRef = React.createRef();
        this.timeSelectRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setFocusToHourInput = this.setFocusToHourInput.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    componentDidUpdate({ value: prevValue }) {
        const { value } = this.props;
        if (prevValue !== value) {
            this.updateValue();
        }
    }

    getTriggerInputValue() {
        const { value } = this.state;
        const { placeholder, hour24 } = this.props;
        return getInputValue(value, placeholder, hour24);
    }

    setFocusToHourInput() {
        this.timeSelectRef.current.focusHourInput();
    }

    updateValue() {
        const { value, hour24 } = this.props;
        this.setState({
            value: hour24 ? value : get12HourTime(value),
        });
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        const { readOnly } = this.props;
        const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
        if (shouldOpenModal) {
            this.setState({ isOpen: true });
        }
    }

    handleClick(event) {
        const { onClick, readOnly } = this.props;
        if (!readOnly) {
            this.setState({ isOpen: true });
            onClick(event);
        }
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        onBlur(value);
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        onFocus(value);
    }

    closeModal() {
        this.setState({ isOpen: false });
    }

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.inputRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.inputRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.inputRef.current.blur();
    }

    render() {
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
        } = this.props;
        const { isOpen, value } = this.state;

        return (
            <StyledContainer id={id} className={className} style={style}>
                <Input
                    id="time-picker_time-input"
                    ref={this.inputRef}
                    label={label}
                    placeholder={placeholder}
                    icon={<ClockIcon />}
                    iconPosition="right"
                    required={required}
                    value={this.getTriggerInputValue()}
                    onKeyDown={this.handleKeyDown}
                    onClick={this.handleClick}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
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
                    onRequestClose={this.closeModal}
                    onOpened={this.setFocusToHourInput}
                >
                    <TimeSelect
                        onCloseModal={this.closeModal}
                        onChange={onChange}
                        cancelLabel={cancelLabel}
                        okLabel={okLabel}
                        value={value}
                        ref={this.timeSelectRef}
                        hour24={hour24}
                    />
                </StyledModal>
            </StyledContainer>
        );
    }
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
