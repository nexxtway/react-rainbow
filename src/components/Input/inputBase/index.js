import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../../libs/utils';
import Label from '../label';
import RenderIf from '../../RenderIf';
import RelativeElement from '../../Structural/relativeElement';
import StyledContainer from '../styled/container';
import StyledIconContainer from '../styled/iconContainer';
import { StyledInput, TogglePasswordButton } from './styled';
import HelpText from '../styled/helpText';
import ErrorText from '../styled/errorText';
import { Eye, EyeClosed } from './icons';
import getValueAlignment from '../helpers/getValueAlignment';

export default class InputBase extends Component {
    constructor(props) {
        super(props);
        this.inputId = uniqueId('input');
        this.inlineTextLabelId = uniqueId('inline-text-label');
        this.errorMessageId = uniqueId('error-message');
        this.inputRef = React.createRef();
        this.handlePasswordToggle = this.handlePasswordToggle.bind(this);
        this.state = {
            isPasswordVisible: false,
        };
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

    getToggleButtonIcon() {
        const { isPasswordVisible } = this.state;
        return isPasswordVisible ? <EyeClosed /> : <Eye />;
    }

    getInputType() {
        const { type } = this.props;
        if (type === 'password') {
            const { isPasswordVisible } = this.state;
            return isPasswordVisible ? 'text' : 'password';
        }
        return type;
    }

    handlePasswordToggle() {
        const { type } = this.props;
        if (type === 'password') {
            const { isPasswordVisible } = this.state;
            this.setState({
                isPasswordVisible: !isPasswordVisible,
            });
        }
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
            className,
            style,
            value,
            label,
            error,
            placeholder,
            onChange,
            disabled,
            readOnly,
            tabIndex,
            onFocus,
            onBlur,
            onClick,
            onKeyDown,
            type,
            max,
            min,
            maxLength,
            minLength,
            pattern,
            icon,
            bottomHelpText,
            required,
            id,
            autoComplete,
            name,
            labelAlignment,
            hideLabel,
            isBare,
            isCentered,
            iconPosition,
            variant,
            size,
            valueAlignment,
        } = this.props;
        const isReadOnly = !!(!disabled && readOnly);
        const isPassword = type === 'password';

        return (
            <StyledContainer id={id} className={className} style={style}>
                <Label
                    label={label}
                    labelAlignment={labelAlignment}
                    hideLabel={hideLabel}
                    required={required}
                    inputId={this.inputId}
                    readOnly={isReadOnly}
                    id={this.getInlineTextLabelId()}
                    size={size}
                />
                <RelativeElement>
                    <RenderIf isTrue={icon}>
                        <StyledIconContainer
                            iconPosition={iconPosition}
                            readOnly={readOnly}
                            error={error}
                            size={size}
                        >
                            {icon}
                        </StyledIconContainer>
                    </RenderIf>

                    <StyledInput
                        id={this.inputId}
                        name={name}
                        type={this.getInputType()}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        tabIndex={tabIndex}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onClick={onClick}
                        onKeyDown={onKeyDown}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        max={max}
                        min={min}
                        maxLength={maxLength}
                        minLength={minLength}
                        pattern={pattern}
                        autoComplete={autoComplete}
                        aria-labelledby={this.getInlineTextLabelId()}
                        aria-describedby={this.getErrorMessageId()}
                        ref={this.inputRef}
                        isBare={isBare}
                        valueAlignment={getValueAlignment({ valueAlignment, isCentered })}
                        iconPosition={iconPosition}
                        icon={icon}
                        error={error}
                        variant={variant}
                        size={size}
                    />
                    <RenderIf isTrue={isPassword}>
                        <TogglePasswordButton
                            icon={this.getToggleButtonIcon()}
                            onClick={this.handlePasswordToggle}
                            size={size}
                        />
                    </RenderIf>
                </RelativeElement>
                <RenderIf isTrue={bottomHelpText}>
                    <HelpText alignSelf="center">{bottomHelpText}</HelpText>
                </RenderIf>
                <RenderIf isTrue={error}>
                    <ErrorText alignSelf="center" id={this.getErrorMessageId()}>
                        {error}
                    </ErrorText>
                </RenderIf>
            </StyledContainer>
        );
    }
}

InputBase.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    placeholder: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    max: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    min: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    required: PropTypes.bool,
    pattern: PropTypes.string,
    /** @deprecated Backward compatibility only. Use `valueAlignment` instead. */
    isCentered: PropTypes.bool,
    isBare: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    id: PropTypes.string,
    autoComplete: PropTypes.string,
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    hideLabel: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

InputBase.defaultProps = {
    value: undefined,
    name: undefined,
    type: 'text',
    label: undefined,
    placeholder: undefined,
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
    isBare: false,
    error: null,
    disabled: false,
    readOnly: false,
    onChange: () => {},
    tabIndex: undefined,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    className: undefined,
    style: undefined,
    variant: 'default',
    id: undefined,
    autoComplete: 'on',
    labelAlignment: 'center',
    hideLabel: false,
    size: 'medium',
    valueAlignment: undefined,
};
