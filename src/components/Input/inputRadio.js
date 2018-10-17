import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../../libs/utils';
import RenderIf from './../RenderIf';
import RequiredAsterisk from './../RequiredAsterisk';

export default class InputRadio extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-radio');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getContainerClassNames() {
        const { className, error, isCentered } = this.props;
        return classnames(
            'rainbow-input-radio_container',
            { 'rainbow-input-radio--error': error },
            { 'rainbow-input-radio_container--counter': isCentered }, className);
    }

    getLabelClassNames() {
        const { disabled } = this.props;
        return classnames(
            'rainbow-input-radio_label',
            { 'rainbow-input-radio_label--disabled': disabled });
    }

    getBottomHelpTextClassName() {
        const { isCentered } = this.props;
        return classnames(
            'rainbow-input-radio_help',
            { 'rainbow-input-radio_help--counter': isCentered });
    }

    getErrorMessageClassName() {
        const { isCentered } = this.props;
        return classnames(
            'rainbow-input-radio_error-message',
            { 'rainbow-input-radio_error-message--counter': isCentered });
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
        const {
            style,
            value,
            onChange,
            label,
            error,
            placeholder,
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            maxLength,
            minLength,
            pattern,
            bottomHelpText,
            required,
            id,
        } = this.props;

        return (
            <div id={id} className={this.getContainerClassNames()} style={style}>
                    <span className="rainbow-input-radio_inner-container">
                        <input
                            id={this.inputId}
                            type="radio"
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            tabIndex={tabIndex}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onClick={onClick}
                            disabled={disabled}
                            required={required}
                            maxLength={maxLength}
                            minLength={minLength}
                            pattern={pattern}
                            aria-labelledby={this.getInlineTextLabelId()}
                            aria-describedby={this.getErrorMessageId()}
                            ref={this.inputRef} />
                        <RenderIf isTrue={!!label}>
                            <label
                                className="rainbow-input-radio_label-container"
                                htmlFor={this.inputId}
                                id={this.getInlineTextLabelId()}>
                                <span className="rainbow-input-radio_faux" />
                                <RequiredAsterisk required={required} />
                                <span className={this.getLabelClassNames()}>{label}</span>
                            </label>
                        </RenderIf>
                    </span>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className={this.getBottomHelpTextClassName()}>{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className={this.getErrorMessageClassName()}>
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

InputRadio.propTypes = {
    value: PropTypes.string,
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    required: PropTypes.bool,
    pattern: PropTypes.string,
    isCentered: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

InputRadio.defaultProps = {
    value: undefined,
    label: null,
    placeholder: null,
    maxLength: undefined,
    minLength: undefined,
    bottomHelpText: null,
    required: false,
    pattern: undefined,
    isCentered: false,
    error: null,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
};
