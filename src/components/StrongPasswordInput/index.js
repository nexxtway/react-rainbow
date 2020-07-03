import React, { useImperativeHandle, useRef } from 'react';
import PropTypes from 'prop-types';
import Label from '../Input/label';
import StyledIconContainer from '../Input/styled/iconContainer';
import RelativeElement from '../Structural/relativeElement';
import StyledInput from './styled/input'; // TODO: change to import from index
import RenderIf from '../RenderIf';
import ErrorText from '../Input/styled/errorText';
import StrengthBar from './strengthBar';
import { StyledContainer, StyledHelpText } from './styled';
import { useUniqueIdentifier, useErrorMessageId, useLabelId } from '../../libs/hooks';
import usePasswordState from './hooks/usePasswordState';
import useReduxForm from '../../libs/hooks/useReduxForm';

/**
 * StrongPasswordInput component is used to provide feedback about password strength
 * @category Form
 */
const StrongPasswordInput = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        style,
        bottomHelpText,
        error,
        passwordState,
        passwordStateLabels,
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
        icon,
        required,
        name,
        label,
        hideLabel,
        iconPosition,
    } = useReduxForm(props);

    const inputId = useUniqueIdentifier('input');
    const errorMessageId = useErrorMessageId(error);
    const labelId = useLabelId(label);
    const status = usePasswordState(passwordState);

    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                label={label}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={labelId}
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
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    iconPosition={iconPosition}
                    icon={icon}
                    error={error}
                    status={status}
                    ref={inputRef}
                />
            </RelativeElement>
            <StrengthBar passwordState={passwordState} passwordStateLabels={passwordStateLabels} />
            <RenderIf isTrue={!!bottomHelpText}>
                <StyledHelpText alignSelf="center">{bottomHelpText}</StyledHelpText>
            </RenderIf>
            <RenderIf isTrue={!!error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});

StrongPasswordInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.string,
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
    /** The state of the password strenght */
    passwordState: PropTypes.oneOf(['weak', 'average', 'strong']),
    /** The label to show at the right of the bar */
    passwordStateLabels: PropTypes.shape({
        weak: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        average: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        strong: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    }),
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
    label: undefined,
    hideLabel: false,
    passwordState: undefined,
    passwordStateLabels: undefined,
};

export default StrongPasswordInput;
