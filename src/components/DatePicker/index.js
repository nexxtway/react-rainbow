import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';
import CalendarIcon from './icons/calendarIcon';
import Modal from './../Modal';
import Calendar from './calendar';
import './styles.css';
import { uniqueId } from '../../libs/utils';

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

    openModal() {
        this.setState({ isOpen: true });
    }

    closeModal() {
        this.setState({ isOpen: false });
    }

    onChange(...args) {
        const { onChange } = this.props;
        this.setState({
            isOpen: false,
        });
        onChange(...args);
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
        } = this.props;
        const {
            isOpen,
        } = this.state;

        const getContainerClassNames = () => classnames('rainbow-date-picker_container', className);

        const getLabelClassNames = () => classnames('rainbow-date-picker_label', {
            'rainbow-date-picker_label--hide': hideLabel,
        });
        const formattedDate = Intl.DateTimeFormat().format(value);
        
        return (
            <div className={getContainerClassNames()} style={style}>
                <label className={getLabelClassNames()} htmlFor={this.inputId}>
                    <RequiredAsterisk required={required} />
                    {label}
                </label>
                <div className="rainbow-date-picker_input-container">
                    <input
                        id={this.inputId}
                        className="rainbow-date-picker_input"
                        placeholder={placeholder}
                        value={formattedDate}
                        onClick={() => this.openModal()}
                        readOnly />

                    <CalendarIcon className="rainbow-date-picker_icon" onClick={() => this.openModal()} />
                </div>
                <Modal isOpen={isOpen} onRequestClose={() => this.closeModal()}>
                    <Calendar
                        value={value}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={(...args) => this.onChange(...args)}
                    />
                </Modal>
            </div>
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
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
    onChange: () => {},
    placeholder: null,
    required: false,
    hideLabel: false,
    id: undefined,
    className: undefined,
    style: undefined,
};
