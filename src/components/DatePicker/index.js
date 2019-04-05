import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CalendarIcon from './calendarIcon';
import Input from '../Input';
import Modal from './../Modal';
import Calendar from './../Calendar';
import formatDate from './helpers/format-date';
import withReduxForm from './../../libs/hocs/withReduxForm';
import './styles.css';
import './media-queries.css';

/**
 * A DatePicker is a text input to capture a date.
 * @category Form
 */
class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-date-picker_input-container', className);
    }

    handleChange(...args) {
        const { onChange } = this.props;
        this.setState({
            isOpen: false,
        });
        onChange(...args);
    }

    openModal(event) {
        const { onClick } = this.props;
        this.setState({ isOpen: true });
        onClick(event);
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
            value,
            minDate,
            maxDate,
            placeholder,
            label,
            required,
            style,
            formatStyle,
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
        } = this.props;
        const {
            isOpen,
        } = this.state;

        const formattedDate = formatDate(value, formatStyle);

        return (
            <div id={id} className={this.getContainerClassName()} style={style}>
                <Input
                    ref={this.inputRef}
                    className="rainbow-date-picker_input"
                    label={label}
                    placeholder={placeholder}
                    icon={<CalendarIcon />}
                    iconPosition="right"
                    required={required}
                    value={formattedDate}
                    onClick={this.openModal}
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
                <Modal className="rainbow-date-picker_modal" isOpen={isOpen} onRequestClose={this.closeModal}>
                    <header className="rainbow-date-picker_calendar-details-header">
                        <h2 className="rainbow-date-picker_calendar-date--selected">
                            {formattedDate}
                        </h2>
                    </header>
                    <Calendar
                        value={value}
                        minDate={minDate}
                        maxDate={maxDate}
                        formatStyle={formatStyle}
                        onChange={this.handleChange}
                        className="rainbow-date-picker_calendar-container" />
                </Modal>
            </div>
        );
    }
}

DatePicker.propTypes = {
    /** Sets the date for the Date Picker programmatically. */
    value: PropTypes.instanceOf(Date),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** This function is called to format the date displayed in the input field.
     * Valid values are small, medium, and large. */
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the input */
    name: PropTypes.string,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that an input text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that the DatePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that an input element should be disabled. This value defaults to false. */
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

DatePicker.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
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

export default withReduxForm(DatePicker);
