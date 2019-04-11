import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ClockIcon from './icons/clock';
import Modal from '../Modal';
import Input from './input';
import TimeSelect from './timeSelect';
import get12HourTime from './helpers/get12HourTime';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import './styles.css';
import './media-queries.css';

/**
 * A TimePicker is used to input a time by displaying an interface the user can interact with.
 * @category Form
 */
class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: get12HourTime(props.value),
        };
        this.inputRef = React.createRef();
        this.timeSelectRef = React.createRef();
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.setFocusToHourInput = this.setFocusToHourInput.bind(this);
    }

    componentDidUpdate({ value: prevValue }) {
        const { value } = this.props;
        if (prevValue !== value) {
            this.updateValue();
        }
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-time-picker_container', className);
    }

    getTriggerInputValue() {
        const { value } = this.state;
        const { placeholder } = this.props;
        if (!value && placeholder) {
            return '';
        }
        return value || '--:-- --';
    }

    setFocusToHourInput() {
        this.timeSelectRef.current.focusHourInput();
    }

    updateValue() {
        const { value } = this.props;
        this.setState({
            value: get12HourTime(value),
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
            hideLabel,
            name,
            bottomHelpText,
            isCentered,
            error,
            readOnly,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            id,
            cancelLabel,
            okLabel,
            onChange,
        } = this.props;
        const {
            isOpen,
            value,
        } = this.state;

        return (
            <div id={id} className={this.getContainerClassName()} style={style}>
                <Input
                    ref={this.inputRef}
                    label={label}
                    placeholder={placeholder}
                    icon={<ClockIcon />}
                    iconPosition="right"
                    required={required}
                    value={this.getTriggerInputValue()}
                    onKeyDown={this.handleKeyDown}
                    onClick={this.handleClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    hideLabel={hideLabel}
                    name={name}
                    bottomHelpText={bottomHelpText}
                    isCentered={isCentered}
                    error={error}
                    readOnly={readOnly}
                    disabled={disabled}
                    tabIndex={tabIndex}
                    autoComplete="off" />

                <Modal
                    className="rainbow-time-picker_modal"
                    isOpen={isOpen}
                    onRequestClose={this.closeModal}
                    onOpened={this.setFocusToHourInput}>

                    <TimeSelect
                        onCloseModal={this.closeModal}
                        onChange={onChange}
                        cancelLabel={cancelLabel}
                        okLabel={okLabel}
                        value={value}
                        ref={this.timeSelectRef} />
                </Modal>
            </div>
        );
    }
}

TimePicker.propTypes = {
    /** Sets the date for the TimePicker programmatically. */
    value: PropTypes.string,
    /** Override the label of the 'Cancel' button. */
    cancelLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Override the label of the 'OK' button. */
    okLabel: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the TimePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the TimePicker. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** A boolean to hide the TimePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the TimePicker must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the TimePicker. */
    name: PropTypes.string,
    /** Shows the help message below the TimePicker. */
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the TimePicker text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the TimePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the TimePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the TimePicker element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
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
};

TimePicker.defaultProps = {
    value: undefined,
    cancelLabel: 'Cancel',
    okLabel: 'OK',
    onChange: () => {},
    placeholder: null,
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
};

export default withReduxForm(TimePicker);
