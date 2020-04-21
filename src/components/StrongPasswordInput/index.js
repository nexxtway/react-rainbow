import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import Label from '../Input/label';
import StyledIconContainer from '../Input/styled/iconContainer';
import RelativeElement from '../Structural/relativeElement';
import StyledInput from './styled/input'; // TODO: change to import from index
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import StrengthBar from './strengthBar';
import { StyledContainer } from './styled';

/**
 * StrongPasswordInput component is used to provide feedback about password strength
 * @category Form
 */
const StrongPasswordInput = React.forwardRef((props, ref) => {
    const inputId = uniqueId('input');
    const errorMessageId = uniqueId('error-message');
    const inlineTextLabelId = uniqueId('inline-text-label');

    function getInlineTextLabelId() {
        const { bottomHelpText } = props;
        if (bottomHelpText) {
            return inlineTextLabelId;
        }
        return undefined;
    }

    function getErrorMessageId() {
        const { error } = props;
        if (error) {
            return errorMessageId;
        }
        return undefined;
    }

    const {
        id,
        className,
        style,
        bottomHelpText,
        error,
        passwordState,
        passwordStateLabel,
        value,
        placeholder,
        onChange,
        disabled,
        readOnly,
        tabIndex,
        onFocus,
        onBlur,
        onClick,
        onKeyDown,
        maxLength,
        minLength,
        pattern,
        icon,
        required,
        autoComplete,
        name,
        label,
        hideLabel,
        isBare,
        isCentered,
        iconPosition,
    } = props;

    let status;
    if (passwordState === 'poor') {
        status = 'error';
    } else if (passwordState === 'average') {
        status = 'warning';
    } else if (passwordState === 'strong') {
        status = 'success';
    }

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                label={label}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={getInlineTextLabelId()}
            />

            <RelativeElement>
                <RenderIf isTrue={!!icon}>
                    <StyledIconContainer
                        iconPosition={iconPosition}
                        readOnly={readOnly}
                        error={error}
                    >
                        {icon}
                    </StyledIconContainer>
                </RenderIf>

                <StyledInput
                    id={inputId}
                    name={name}
                    type="password"
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
                    maxLength={maxLength}
                    minLength={minLength}
                    pattern={pattern}
                    autoComplete={autoComplete}
                    aria-labelledby={getInlineTextLabelId()}
                    aria-describedby={getErrorMessageId()}
                    isBare={isBare}
                    isCentered={isCentered}
                    iconPosition={iconPosition}
                    icon={icon}
                    error={error}
                    status={status}
                    ref={ref}
                />
            </RelativeElement>
            <StrengthBar passwordState={passwordState} passwordStateLabel={passwordStateLabel} />
            <RenderIf isTrue={!!bottomHelpText}>
                <HelpText alignSelf="center" style={{ margin: 0 }}>
                    {bottomHelpText}
                </HelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center" id={getErrorMessageId()}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

StrongPasswordInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** The name of the input. */
    name: PropTypes.string,
    /** Text label for the input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A boolean to hide the input label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** The maximum number of characters allowed in the field. */
    maxLength: PropTypes.number,
    /** The minimum number of characters allowed in the field. */
    minLength: PropTypes.number,
    /** Shows the help message below the input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A string indicating the type of autocomplete functionality.
     * If any, to allow on the input. */
    autoComplete: PropTypes.string,
    /**
     * The state of the password strenght
     */
    passwordState: PropTypes.oneOf(['poor', 'average', 'strong']),
    /**
     * The label to show at the right of the bar
     */
    passwordStateLabel: PropTypes.string,
};

StrongPasswordInput.defaultProps = {
    value: undefined,
    name: undefined,
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
    onKeyDown: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    autoComplete: 'on',
    label: undefined,
    hideLabel: false,
    passwordState: undefined,
    passwordStateLabel: undefined,
};

export default StrongPasswordInput;
