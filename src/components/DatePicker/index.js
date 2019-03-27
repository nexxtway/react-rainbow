import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';
import CalendarIcon from './calendarIcon';
import Modal from './../Modal';
import Calendar from './../Calendar';
import { uniqueId } from '../../libs/utils';
import formatDate from './helpers/format-date';
import './styles.css';
import './media-queries.css';

/**
 * A datepicker is a text input to capture a date.
 * @category Form
 */
export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('datepicker');
        this.state = {
            isOpen: false,
        };
    }

    onChange(...args) {
        const { onChange } = this.props;
        this.setState({
            isOpen: false,
        });
        onChange(...args);
    }

    openModal() {
        this.setState({ isOpen: true });
    }

    closeModal() {
        this.setState({ isOpen: false });
    }

    render() {
        const {
            value,
            minDate,
            maxDate,
            placeholder,
            label,
            hideLabel,
            required,
            style,
            className,
            formatStyle,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        const getContainerClassNames = () => classnames('rainbow-date-picker_container', className);

        const getLabelClassNames = () => classnames('rainbow-date-picker_label', {
            'rainbow-date-picker_label--hide': hideLabel,
        });
        const formattedDate = formatDate(value, formatStyle);
        return (
            <div className={getContainerClassNames()} style={style}>
                <label className={getLabelClassNames()} htmlFor={this.inputId}>
                    <RequiredAsterisk required={required} />
                    {label}
                </label>
                <div className="rainbow-date-picker_input-container">
                    <CalendarIcon className="rainbow-date-picker_icon" />
                    <input
                        id={this.inputId}
                        className="rainbow-date-picker_input"
                        placeholder={placeholder}
                        value={formattedDate}
                        onClick={() => this.openModal()}
                        readOnly />
                </div>
                <Modal className="rainbow-date-picker_modal" isOpen={isOpen} onRequestClose={() => this.closeModal()}>
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
                        onChange={(...args) => this.onChange(...args)}
                        className="rainbow-date-picker_calendar-container" />
                </Modal>
            </div>
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
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
    required: false,
    hideLabel: false,
    id: undefined,
    className: undefined,
    style: undefined,
};
