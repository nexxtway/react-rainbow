import React from 'react';
import PropTypes from 'prop-types';
import InputBase from './inputBase';
import InputRadio from './inputRadio';
import withReduxForm from './../../libs/hocs/withReduxForm';


/**
 * Text inputs are used for freeform data entry.
 */
export function Input(props) {
    const { type } = props;
    if (type === 'radio') {
        return <InputRadio {...props} />;
    }
    return <InputBase {...props} />;
}

Input.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.string,
    /** The type of the input. This value defaults to text. */
    type: PropTypes.oneOf([
        'text',
        'password',
        'datetime',
        'datetime-local',
        'date',
        'month',
        'time',
        'week',
        'number',
        'email',
        'url',
        'search',
        'tel',
        'color',
        'radio',
        'checkbox',
    ]),
    /** Text label for the input. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
    * This value defaults to left. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    /** The maximum number of characters allowed in the field. */
    maxLength: PropTypes.number,
    /** The minimum number of characters allowed in the field. */
    minLength: PropTypes.number,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that an input field must be filled out before submitting the form.
    * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies the regular expression that the input's value is checked against.
    * This attribute is supported for text, search, url, tel, email, and password types. */
    pattern: PropTypes.string,
    /** Specifies that an input text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that an input will not have border. This value defaults to false. */
    isBare: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.number,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

Input.defaultProps = {
    value: undefined,
    type: 'text',
    label: null,
    placeholder: null,
    icon: undefined,
    iconPosition: 'left',
    maxLength: undefined,
    minLength: undefined,
    bottomHelpText: null,
    required: false,
    pattern: undefined,
    isCentered: false,
    isBare: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};

export default withReduxForm(Input);
