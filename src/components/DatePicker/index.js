import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RequiredAsterisk from '../RequiredAsterisk';
import CalendarIcon from './calendarIcon';
import './styles.css';

/**
 * Text inputs are used for freeform data entry.
 * @category Form
 */

// eslint-disable-next-line react/prefer-stateless-function
export default class DatePicker extends Component {
    render() {
        const {
            value,
            placeholder,
            label,
            hideLabel,
            required,
            id,
            inputId,
            style,
            className,
        } = this.props;

        const getContainerClassNames = () => classnames('rainbow-date-picker_container', className);

        const getLabelClassNames = () => classnames('rainbow-date-picker_label', {
            'rainbow-date-picker_label--hide': hideLabel,
        });

        return (
            <div className={getContainerClassNames()} style={style}>
                <label className={getLabelClassNames()} htmlFor={inputId} id={id}>
                    <RequiredAsterisk required={required} />
                    {label}
                </label>
                <div className="rainbow-date-picker_input-container">
                    <input
                        id={inputId}
                        className="rainbow-date-picker_input"
                        placeholder={placeholder}
                        value={value.toString()}
                        readOnly />

                    <CalendarIcon className="rainbow-date-picker_icon" />
                </div>
            </div>
        );
    }
}

DatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
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
    /** The id of the outer element. */
    id: PropTypes.string,
    inputId: PropTypes.string.isRequired,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

DatePicker.defaultProps = {
    value: undefined,
    placeholder: null,
    required: false,
    hideLabel: false,
    id: undefined,
    className: undefined,
    style: undefined,
};
