import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import Icon from './icon';
import Help from './help';
import Error from './error';
import Label from './label';

const inputId = uniqueId('input');
const inlineTextLabelId = uniqueId('inline-text-label');
const errorMessageId = uniqueId('error-message');

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
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The value of the input */
    value: PropTypes.string,
    /** Event fired when the input value change */
    onChange: PropTypes.func,
    /** The input label */
    label: PropTypes.node,
    /** The error to show below the input. */
    error: PropTypes.node,
    /** The placeholder of the input */
    placeholder: PropTypes.string,
    /** Disables the input if set to true. */
    disabled: PropTypes.bool,
    /** If set to true the input is read only. */
    readOnly: PropTypes.bool,
    /** If set to true the input is required. */
    required: PropTypes.bool,
    /** Tab index */
    tabIndex: PropTypes.number,
    /** The input type */
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
    /** The max length of characters allowed by the input. */
    maxLength: PropTypes.number,
    /** The min length of characters allowed by the input. */
    minLength: PropTypes.number,
    /** The input pattern. */
    pattern: PropTypes.string,
    /** The class name of the label element. */
    labelClassName: PropTypes.string,
    /** The name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. */
    iconName: PropTypes.string,
    /** The position of the icon if it is passed. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    /** The help text to show below the input. */
    bottomHelpText: PropTypes.node,
    /** If is set to true the input will not have border. */
    isBare: PropTypes.bool,
    /** If is set to true the input text will be centered. */
    isCentered: PropTypes.bool,
};

Input.defaultProps = {
    className: undefined,
    style: {},
    value: undefined,
    onChange: () => {},
    label: null,
    error: null,
    placeholder: null,
    disabled: false,
    readOnly: false,
    required: false,
    tabIndex: undefined,
    type: 'text',
    maxLength: undefined,
    minLength: undefined,
    pattern: undefined,
    labelClassName: undefined,
    iconName: undefined,
    iconPosition: 'left',
    bottomHelpText: null,
    isBare: false,
    isCentered: false,
};
