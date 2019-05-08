import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import autosize from 'autosize';
import withReduxForm from './../../libs/hocs/withReduxForm';
import { uniqueId } from './../../libs/utils';
import RenderIf from '../RenderIf';
import Label from './label';
import './styles.css';

/**
 * Textarea inputs are used for freeform data entry.
 * @category Form
 */
class Textarea extends Component {
    constructor(props) {
        super(props);
        this.textareaRef = React.createRef();
        this.textareaId = uniqueId('textarea');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
    }

    componentDidMount() {
        const { grow } = this.props;
        if (grow) {
            return autosize(this.textareaRef.current);
        }
        return null;
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-textarea_container',
            { 'rainbow-textarea--error': error },
            className,
        );
    }

    getInlineTextLabelId() {
        const { bottomHelpText } = this.props;
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

    /**
     * Sets focus on the element.
     * @public
     */
    focus() {
        this.textareaRef.current.focus();
    }

    /**
     * Sets click on the element.
     * @public
     */
    click() {
        this.textareaRef.current.click();
    }

    /**
     * Sets blur on the element.
     * @public
     */
    blur() {
        this.textareaRef.current.blur();
    }

    render() {
        const {
            style,
            onChange,
            onClick,
            onFocus,
            onBlur,
            onPaste,
            value,
            readOnly,
            label,
            error,
            placeholder,
            disabled,
            maxLength,
            minLength,
            bottomHelpText,
            required,
            rows,
            id,
            hideLabel,
            name,
        } = this.props;

        return (
            <div className={this.getContainerClassNames()} style={style} id={id}>
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    textareaId={this.textareaId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()}
                />

                <textarea
                    id={this.textareaId}
                    className="rainbow-textarea"
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    maxLength={maxLength}
                    minLength={minLength}
                    onChange={onChange}
                    onClick={onClick}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onPaste={onPaste}
                    readOnly={readOnly}
                    rows={rows}
                    value={value}
                    aria-labelledby={this.getInlineTextLabelId()}
                    aria-describedby={this.getErrorMessageId()}
                    ref={this.textareaRef}
                />

                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-textarea_bottom-help">{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-textarea_text-error">
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

Textarea.propTypes = {
    /** Text that describes the desired textarea input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** A boolean to hide the textarea label */
    hideLabel: PropTypes.bool,
    /** The name of the textarea */
    name: PropTypes.string,
    /** The value of the textarea, also used as the default value during init. */
    value: PropTypes.string,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The maximum number of characters allowed in the textarea. */
    maxLength: PropTypes.number,
    /** The minimum number of characters allowed in the textarea. */
    minLength: PropTypes.number,
    /** This make to textarea grow. This value defaults to false. */
    grow: PropTypes.bool,
    /** Shows the help message below the textarea. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the textarea field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that the textarea field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that the textarea element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The number of visible text lines for the control. The value by default is 3. */
    rows: PropTypes.number,
    /** Specifies that the textarea field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** Event fired when the user paste on the textarea */
    onPaste: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
};

Textarea.defaultProps = {
    value: undefined,
    name: undefined,
    placeholder: null,
    maxLength: undefined,
    minLength: undefined,
    grow: false,
    bottomHelpText: null,
    required: false,
    error: null,
    disabled: false,
    rows: 3,
    readOnly: false,
    onChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onPaste: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    hideLabel: false,
};

export default withReduxForm(Textarea);
