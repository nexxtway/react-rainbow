import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from './../../../libs/utils';
import Label from './label';
import RenderIf from '../../RenderIf';
import './styles.css';

export default class InputBase extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
    }

    getContainerClassNames() {
        const {
            className,
            error,
        } = this.props;
        return classnames('rainbow-input_container', { 'rainbow-input--error': error }, className);
    }

    getIconPositionClassNames() {
        const {
            icon,
            iconPosition,
        } = this.props;
        return classnames({
            'rainbow-input_icon-container': icon,
            [`rainbow-input_icon--${iconPosition}`]: icon,
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
            placeholder,
            disabled,
            readOnly,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            type,
            maxLength,
            minLength,
            pattern,
            icon,
            bottomHelpText,
            required,
            id,
            autoComplete,
            name,
            hideLabel,
        } = this.props;

        return (
            <div id={id} className={this.getContainerClassNames()} style={style}>
                <Label
                    label={label}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={readOnly}
                    id={this.getInlineTextLabelId()} />

                <div className={this.getIconPositionClassNames()}>
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-input_icon">
                            {icon}
                        </span>
                    </RenderIf>

                    <input
                        id={this.inputId}
                        name={name}
                        type={type}
                        className={this.getInputClassNames()}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        maxLength={maxLength}
                        minLength={minLength}
                        pattern={pattern}
                        autoComplete={autoComplete}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.inputRef} />

                </div>
                <RenderIf isTrue={!!bottomHelpText}>
                    <div className="rainbow-input_help">{bottomHelpText}</div>
                </RenderIf>
                <RenderIf isTrue={!!error}>
                    <div id={this.getErrorMessageId()} className="rainbow-input_error">{error}</div>
                </RenderIf>
            </div>
        );
    }
}

InputBase.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
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
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf([
        'left', 'right',
    ]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    bottomHelpText: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    required: PropTypes.bool,
    pattern: PropTypes.string,
    isCentered: PropTypes.bool,
    isBare: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.number,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    hideLabel: PropTypes.bool,
};

InputBase.defaultProps = {
    value: undefined,
    name: undefined,
    type: 'text',
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
    autoComplete: 'on',
    hideLabel: false,
};
