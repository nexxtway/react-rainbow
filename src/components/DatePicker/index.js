/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CalendarIcon from './calendarIcon';
import formatDate from './helpers/formatDate';
import withReduxForm from '../../libs/hocs/withReduxForm';
import { ENTER_KEY, SPACE_KEY } from '../../libs/constants';
import StyledContainer from './styled/container';
import StyledModal from './styled/modal';
import StyledHeader from './styled/header';
import StyledHeaderTitle from './styled/headerTitle';
import StyledCalendar from './styled/calendar';
import StyledInput from './styled/input';
import { Consumer } from '../Application/context';
import { getLocale } from '../../libs/utils';

/**
 * A DatePicker is a text input to capture a date.
 * @category Form
 */
class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    handleChange(...args) {
        const { onChange } = this.props;
        this.closeModal();
        onChange(...args);
    }

    handleBlur() {
        const { onBlur, value } = this.props;
        onBlur(value);
    }

    handleFocus() {
        const { onFocus, value } = this.props;
        onFocus(value);
    }

    handleKeyDown(event) {
        const { keyCode } = event;
        const { readOnly } = this.props;
        const shouldOpenModal = (keyCode === ENTER_KEY || keyCode === SPACE_KEY) && !readOnly;
        if (shouldOpenModal) {
            this.setState({ isOpen: true });
        }
    }

    openModal(event) {
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
            value,
            minDate,
            maxDate,
            placeholder,
            label,
            required,
            style,
            className,
            formatStyle,
            hideLabel,
            name,
            bottomHelpText,
            isCentered,
            error,
            readOnly,
            disabled,
            tabIndex,
            id,
            locale,
        } = this.props;
        const { isOpen } = this.state;

        const formattedDate = formatDate(value, formatStyle, locale);
        const modalId = id && `${id}_modal`;
        const calendarId = id && `${id}_calendar`;

        return (
            <StyledContainer id={id} className={className} style={style}>
                <StyledInput
                    ref={this.inputRef}
                    label={label}
                    placeholder={placeholder}
                    icon={<CalendarIcon />}
                    iconPosition="right"
                    required={required}
                    value={formattedDate}
                    onKeyDown={this.handleKeyDown}
                    onClick={this.openModal}
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

                <StyledModal id={modalId} isOpen={isOpen} onRequestClose={this.closeModal}>
                    <StyledHeader>
                        <StyledHeaderTitle>{formattedDate}</StyledHeaderTitle>
                    </StyledHeader>
                    <StyledCalendar
                        id={calendarId}
                        value={value}
                        minDate={minDate}
                        maxDate={maxDate}
                        formatStyle={formatStyle}
                        onChange={this.handleChange}
                        locale={locale}
                    />
                </StyledModal>
            </StyledContainer>
        );
    }
}

const DatePicker = React.forwardRef(({ locale, ...rest }, ref) => (
    <Consumer>
        {values => <DatePickerComponent ref={ref} locale={getLocale(values, locale)} {...rest} />}
    </Consumer>
));

DatePicker.propTypes = {
    /** Sets the date for the DatePicker programmatically. */
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /**  The date format style to display in the input field.
     * Valid values are small, medium, and large. */
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the DatePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Text label for the DatePicker. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the DatePicker label. */
    hideLabel: PropTypes.bool,
    /** Specifies that the DatePicker field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the DatePicker. */
    name: PropTypes.string,
    /** Shows the help message below the DatePicker. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DatePicker text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that the DatePicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the DatePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the DatePicker element should be disabled. This value defaults to false. */
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
    /** The DatePicker locale. Defaults to browser's language. */
    locale: PropTypes.string,
};

DatePicker.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
    onChange: () => {},
    placeholder: undefined,
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
    locale: undefined,
};

export default withReduxForm(DatePicker);
