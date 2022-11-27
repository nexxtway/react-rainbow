/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useReduxForm, useErrorMessageId, useLabelId } from '../../libs/hooks';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import withReduxForm from '../../libs/hocs/withReduxForm';
import PlusIcon from './icons/plus';
import MinusIcon from './icons/minus';
import getValue from './helpers/getValue';
import getNormalizedValue from './helpers/getNormalizedValue';
import isButtonDisabled from './helpers/isButtonDisabled';
import isMax from './helpers/isMax';
import isMin from './helpers/isMin';
import { StyledContainer, StyledInput, StyledButton, ButtonContainer } from './styled';

/**
 * CounterInput is a component that lets you enter a number. You can increase and decrease the  value using your mouse or by simply typing the number.
 * @category Form
 */

const CounterInput = React.forwardRef((props, ref) => {
    const {
        id,
        name,
        value,
        placeholder,
        onChange,
        tabIndex,
        onFocus,
        onBlur,
        onClick,
        onKeyDown,
        disabled,
        readOnly,
        required,
        min,
        max,
        isBare,
        error,
        variant,
        step,
        label,
        labelAlignment,
        hideLabel,
        bottomHelpText,
        className,
        style,
        size,
        borderRadius,
    } = useReduxForm(props);

    const inputRef = useRef(null);
    const inputId = useUniqueIdentifier('counter-input');
    const errorMessageId = useErrorMessageId(error);
    const labelId = useLabelId(label);
    const isReadOnly = !!(!disabled && readOnly);

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

    const handlePlusMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
        const val = getValue(Number(value));
        if (val < min) return onChange(getNormalizedValue(min));
        return onChange(getNormalizedValue(val + step));
    };

    const handleMinusMouseDown = event => {
        event.preventDefault();
        inputRef.current.focus();
        const val = getValue(Number(value));
        if (val > max) return onChange(getNormalizedValue(max));
        return onChange(getNormalizedValue(val - step));
    };

    const handleEvents = (event, callback) => {
        if (event.target.value === '') {
            return callback();
        }
        return callback(Number(event.target.value));
    };

    return (
        <StyledContainer id={id} className={className} style={style}>
            <Label
                label={label}
                labelAlignment={labelAlignment}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={isReadOnly}
                id={labelId}
                size={size}
            />
            <RelativeElement>
                <ButtonContainer iconPosition="left" readOnly={readOnly} error={error}>
                    <StyledButton
                        variant="base"
                        size="small"
                        icon={<MinusIcon />}
                        onMouseDown={handleMinusMouseDown}
                        tabIndex={-1}
                        disabled={isButtonDisabled(isMin(value, step, min), disabled, readOnly)}
                        assistiveText="minus button"
                    />
                </ButtonContainer>
                <StyledInput
                    id={inputId}
                    name={name}
                    type="number"
                    value={value}
                    placeholder={placeholder}
                    onChange={event => handleEvents(event, onChange)}
                    tabIndex={tabIndex}
                    onFocus={event => handleEvents(event, onFocus)}
                    onBlur={event => handleEvents(event, onBlur)}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    min={min}
                    max={max}
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    ref={inputRef}
                    isBare={isBare}
                    error={error}
                    variant={variant}
                    step={step}
                    autoComplete="off"
                    size={size}
                    borderRadius={borderRadius}
                />
                <ButtonContainer iconPosition="right" readOnly={readOnly} error={error}>
                    <StyledButton
                        variant="base"
                        size="small"
                        icon={<PlusIcon />}
                        onMouseDown={handlePlusMouseDown}
                        disabled={isButtonDisabled(isMax(value, step, max), disabled, readOnly)}
                        tabIndex={-1}
                        assistiveText="plus button"
                    />
                </ButtonContainer>
            </RelativeElement>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
});
export default withReduxForm(CounterInput);

CounterInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The name of the input. */
    name: PropTypes.string,
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies the minimum value allowed in the field. */
    min: PropTypes.number,
    /** Specifies the maximum value allowed in the field. */
    max: PropTypes.number,
    /** Specifies the error that the input contains. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The variant changes the appearance of the Input. Accepted variants include default
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    /** A number that specifies the granularity that the value must adhere to. */
    step: PropTypes.number,
    /** Text label for the Input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Input label. */
    hideLabel: PropTypes.bool,
    /** Shows the help message below the Input. */
    bottomHelpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The border radius of the input. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

CounterInput.defaultProps = {
    id: undefined,
    name: undefined,
    value: undefined,
    placeholder: null,
    tabIndex: undefined,
    disabled: false,
    readOnly: false,
    required: false,
    min: undefined,
    max: undefined,
    error: null,
    step: 1,
    variant: 'default',
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onClick: () => {},
    onKeyDown: () => {},
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    bottomHelpText: null,
    className: undefined,
    style: undefined,
    size: 'mediun',
    borderRadius: 'rounded',
};
