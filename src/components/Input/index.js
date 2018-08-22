import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import iconNamePropType from './../../propTypes/iconNamePropType';
import Icon from './icon';
import Help from './help';
import Error from './error';
import Label from './label';

const inputId = uniqueId('input');
const inlineTextLabelId = uniqueId('inline-text-label');
const errorMessageId = uniqueId('error-message');

/**
* Text inputs are used for freeform data entry.
*/
export default function Input(props) {
    const {
        className,
        style,
        value,
        onChange,
        label,
        error,
        placeholder,
        disabled,
        readOnly,
        required,
        tabIndex,
        type,
        maxLength,
        minLength,
        pattern,
        labelClassName,
        iconName,
        iconPosition,
        bottomHelpText,
        isBare,
        isCentered,
    } = props;
    const isRequiredOrHasError = !!(required || error);

    const getContainerClassNames = () => classnames('slds-form-element', {
        'slds-has-error': error,
    }, className);

    const getFormControlClassNames = () => classnames('slds-form-element__control', {
        'slds-input-has-icon': iconName,
        [`slds-input-has-icon_${iconPosition}`]: iconName,
    });

    const getInputClassNames = () => classnames('slds-input', {
        'slds-input_bare': isBare,
        'slds-input_counter': isCentered,
    });

    const getInlineTextLabelId = () => {
        if (bottomHelpText) {
            return inlineTextLabelId;
        }
        return undefined;
    };

    const getErrorMessageId = () => {
        if (error) {
            return errorMessageId;
        }
        return undefined;
    };

    return (
        <div className={getContainerClassNames()} style={style}>
            <Label
                className={labelClassName}
                label={label}
                required={isRequiredOrHasError}
                inputId={inputId}
                id={getInlineTextLabelId()} />

            <div className={getFormControlClassNames()}>
                <Icon
                    iconName={iconName}
                    position={iconPosition}
                    error={error} />

                <input
                    id={inputId}
                    type={type}
                    className={getInputClassNames()}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={isRequiredOrHasError}
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern}
                    aria-labelledby={getInlineTextLabelId()}
                    aria-describedby={getErrorMessageId()} />

            </div>
            <Help text={bottomHelpText} />
            <Error id={getErrorMessageId()} error={error} />
        </div>
    );
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
    ]),
    /** The input label */
    label: PropTypes.node,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The Lightning Design System name of the icon used as a fallback when
    * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
    * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
    * Only utility icons can be used in this component. */
    iconName: iconNamePropType,
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
    bottomHelpText: PropTypes.node,
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
    /** Specifies that an input field must be filled out before submitting the form.
    * This value defaults to false. */
    error: PropTypes.node,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.number,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** A CSS class for the label element, in addition to the label's base classes. */
    labelClassName: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Input.defaultProps = {
    value: undefined,
    type: 'text',
    label: null,
    placeholder: null,
    iconName: undefined,
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
    className: undefined,
    labelClassName: undefined,
    style: {},
};
