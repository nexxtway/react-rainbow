/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputBase from './inputBase';
import InputRadio from './inputRadio';
import InputCheckbox from './inputCheckbox';
import withReduxForm from '../../libs/hocs/withReduxForm';

/**
 * Text inputs are used for freeform data entry.
 * @category Form
 */
class Input extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
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
        const { type } = this.props;

        if (type === 'radio') {
            return <InputRadio ref={this.inputRef} {...this.props} />;
        }
        if (type === 'checkbox') {
            return <InputCheckbox ref={this.inputRef} {...this.props} />;
        }
        return <InputBase ref={this.inputRef} {...this.props} />;
    }
}

Input.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.number]),
    /** The name of the input. */
    name: PropTypes.string,
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
    /** Text label for the Input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the Input label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Input label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** Specifies the minimum value allowed in the field. */
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** Specifies the maximum value allowed in the field. */
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The maximum number of characters allowed in the field. */
    maxLength: PropTypes.number,
    /** The minimum number of characters allowed in the field. */
    minLength: PropTypes.number,
    /** Shows the help message below the Input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies the regular expression that the input's value is checked against.
     * This attribute is supported for text, search, url, tel, email, and password types. */
    pattern: PropTypes.string,
    /** @deprecated Backward compatibility only. Use `valueAlignment` instead. */
    isCentered: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
    /** Set the Input to checked state when true. It is used only for input type checkbox. */
    checked: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The variant changes the appearance of the Input. Accepted variants include default,
     *shaded and bare. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A string indicating the type of autocomplete functionality.
     * If any, to allow on the Input.
     *
     * Values accepted by the autocomplete prop: name, organization-title, username, new-password,
     * street-address, country, cc-name, transaction-currency, language, bday, sex, url, photo,
     * tel, email and impp
     *
     * For a detailed list, go to: https://www.w3.org/TR/WCAG21/#input-purposes */
    autoComplete: PropTypes.string,
    /** The size of the input. Valid values are small, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specifies the alignment of the value text. This value defaults to left. */
    valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

Input.defaultProps = {
    value: undefined,
    type: 'text',
    name: undefined,
    placeholder: null,
    icon: undefined,
    iconPosition: 'left',
    max: undefined,
    min: undefined,
    maxLength: undefined,
    minLength: undefined,
    bottomHelpText: null,
    required: false,
    pattern: undefined,
    isCentered: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    checked: undefined,
    className: undefined,
    style: undefined,
    variant: 'default',
    id: undefined,
    autoComplete: 'on',
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    size: 'medium',
    valueAlignment: undefined,
};

export default withReduxForm(Input);
