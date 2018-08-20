/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from './icon';
import Help from './help';
import Error from './error';
import RequiredAsterisk from './requiredAsterisk';
import { uniqueId } from './../../libs/utils';

const inputId = uniqueId('input');

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

    const getInputClassNames = () => classnames(
            'slds-input',
            { 'slds-input_bare': isBare, 'slds-input_counter': isCentered },
    );

    const getLabelClassNames = () => classnames('slds-form-element__label', labelClassName);

    const getContainerClassNames = () => classnames(
        'slds-form-element',
        { 'slds-has-error': error },
        className,
    );

    const getIconContainerClassNames = () => {
        if (iconName) {
            return classnames('slds-input-has-icon', `slds-input-has-icon_${iconPosition}`);
        }
        return null;
    };

    const getFormControlClassNames = () => classnames('slds-form-element__control', getIconContainerClassNames());

    const isLeftIcon = iconName && iconPosition === 'left';
    const isRightIcon = iconName && iconPosition === 'right';
    return (
        <div className={getContainerClassNames()} style={style}>
            <label className={getLabelClassNames()} htmlFor={inputId}>
                <RequiredAsterisk required={required} />
                {label}
            </label>
            <div className={getFormControlClassNames()}>
                <Icon
                    data-id="input-left-icon"
                    isVisible={isLeftIcon}
                    iconName={iconName}
                    position={iconPosition}
                    error={error} />
                <input
                    data-id={inputId}
                    type={type}
                    className={getInputClassNames()}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern} />
                <Icon
                    data-id="input-right-icon"
                    isVisible={isRightIcon}
                    iconName={iconName}
                    position={iconPosition}
                    error={error} />
                <Help text={bottomHelpText} />
            </div>
            <Error error={error} />
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
    error: PropTypes.node,
    /** The placeholder of the input */
    placeholder: PropTypes.string,
    /** Disables the input if set to true. */
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
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
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    pattern: PropTypes.string,
    labelClassName: PropTypes.string,
    /** The name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. */
    iconName: PropTypes.string,
    /** The position of the icon if it is passed. */
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    bottomHelpText: PropTypes.node,
    isBare: PropTypes.bool,
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
    iconName: '',
    iconPosition: 'left',
    bottomHelpText: null,
    isBare: false,
    isCentered: false,
};
