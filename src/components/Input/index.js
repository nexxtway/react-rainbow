import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../libs/utils';
import Label from './label';
import RenderIf from '../RenderIf';
import './styles.css';

/**
 * Text inputs are used for freeform data entry.
 */
export default class Input extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
    }

    getContainerClassNames() {
        const {
            className,
            error,
        } = this.props;
        return classnames('rainbow-input-container', { 'rainbow-input-has-error': error }, className);
    }

    getIconPositionClassNames() {
        const {
            icon,
            iconPosition,
        } = this.props;
        return classnames({
            'rainbow-input-has-icon': icon,
            [`rainbow-input-has-icon_${iconPosition}`]: icon,
        });
    }

    getInputClassNames() {
        const {
            isBare,
            isCentered,
        } = this.props;
        return classnames('rainbow-input', {
            'rainbow-input_bare': isBare,
            'rainbow-input_counter': isCentered,
        });
    }

    getInlineTextLabelId() {
        const {
            bottomHelpText,
        } = this.props;
        if (bottomHelpText) {
            return this.inlineTextLabelId;
        }
        return undefined;
    }

    getErrorMessageId() {
        const { error } = this.props;
        if (error) {
            return this.errorMessageId;
        }
        return undefined;
    }

    render() {
        const {
            style,
            value,
            onChange,
            label,
            error,
            placeholder,
            disabled,
            readOnly,
            tabIndex,
            type,
            maxLength,
            minLength,
            pattern,
            icon,
            bottomHelpText,
            required,
        } = this.props;
        const isRequiredOrHasError = !!(required || error);

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <Label
                    label={label}
                    required={isRequiredOrHasError}
                    inputId={this.inputId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()} />

                <div className={this.getIconPositionClassNames()}>
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-input__icon">
                            {icon}
                        </span>
                    </RenderIf>

                    <input
                        id={this.inputId}
                        type={type}
                        className={this.getInputClassNames()}
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
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()} />

                </div>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-input-help">{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-input-help">{error}</div>
                </RenderIf>
            </div>
        );
    }
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
    /** Specifies that an input field must be filled out before submitting the form. */
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
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
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
    className: undefined,
    style: undefined,
};
