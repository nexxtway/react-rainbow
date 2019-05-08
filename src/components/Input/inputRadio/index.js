import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../../libs/utils';
import RenderIf from './../../RenderIf';
import Label from './label';
import './styles.css';

export default class InputRadio extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input-radio');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getContainerClassNames() {
        const { className, error } = this.props;
        return classnames(
            'rainbow-input-radio_container',
            {
                'rainbow-input-radio--error': error,
            },
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
            disabled,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onKeyDown,
            bottomHelpText,
            id,
            name,
            checked,
            hideLabel,
        } = this.props;

        return (
            <div id={id} className={this.getContainerClassNames()} style={style}>
                <span className="rainbow-input-radio_inner-container">
                    <input
                        id={this.inputId}
                        name={name}
                        type="radio"
                        value={value}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        disabled={disabled}
                        checked={checked}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.inputRef}
                    />

                    <Label
                        disabled={disabled}
                        label={label}
                        hideLabel={hideLabel}
                        inputId={this.inputId}
                        id={this.getInlineTextLabelId()}
                    />
                </span>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-input-radio_help">{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div
                        id={this.getErrorMessageId()}
                        className="rainbow-input-radio_error-message"
                    >
                        {error}
                    </div>
                </RenderIf>
            </div>
        );
    }
}

InputRadio.propTypes = {
    value: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    name: PropTypes.string,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    checked: PropTypes.bool,
    hideLabel: PropTypes.bool,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
};

InputRadio.defaultProps = {
    value: undefined,
    name: undefined,
    bottomHelpText: null,
    error: null,
    disabled: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    checked: undefined,
    hideLabel: false,
    className: undefined,
    style: undefined,
    id: undefined,
};
