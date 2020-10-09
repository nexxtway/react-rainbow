import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import Label from '../Input/label';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import { uniqueId } from '../../libs/utils';
import PlusIcon from './icons/plus';
import MinusIcon from './icons/minus';
import floatify from './helpers/floatify';
import isValueNan from './helpers/isValueNan';
import disableButton from './helpers/disableButtons';
import { StyledContainer, StyledInput, StyledButton, ButtonContainer } from './styled';

/**
 * CounterInput allows to increase or decrease a numerical value.
 * @category Form
 */

export default function CounterInput(props) {
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
    } = props;

    const inputRef = useRef(null);
    const inlineTextLabelId = uniqueId('inline-text-label');
    const inputId = uniqueId('counter-input');
    const errorMessageId = uniqueId('error-message');
    const isReadOnly = !!(!disabled && readOnly);
    const finalStep = step || 1;

    const getInlineTextLabelId = () => {
        if (bottomHelpText) {
            return inlineTextLabelId;
        }
        return undefined;
    };

    const getErrorMessageId = () => {
        if (error) {
            return errorMessageId;
        }
        return undefined;
    };

    const handleMinus = () => {
        inputRef.current.focus();
        onChange(floatify(Number(inputRef.current.value) - finalStep));
    };

    const handlePlus = () => {
        inputRef.current.focus();
        onChange(floatify(Number(inputRef.current.value) + finalStep));
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
                id={getInlineTextLabelId()}
            />
            <RelativeElement>
                <ButtonContainer iconPosition={'left'} readOnly={readOnly} error={error}>
                    <StyledButton
                        variant="base"
                        size="small"
                        icon={<MinusIcon />}
                        onClick={handleMinus}
                        tabIndex={-1}
                        disabled={disableButton(
                            isValueNan(Number(value)) - finalStep < min,
                            disabled,
                            readOnly,
                        )}
                    />
                </ButtonContainer>
                <StyledInput
                    id={inputId}
                    name={name}
                    type="number"
                    value={value}
                    placeholder={placeholder}
                    onChange={event => onChange(event.target.value)}
                    tabIndex={tabIndex}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    min={min}
                    max={max}
                    aria-labelledby={getInlineTextLabelId()}
                    aria-describedby={getErrorMessageId()}
                    ref={inputRef}
                    isBare={isBare}
                    error={error}
                    variant={variant}
                    step={step}
                    autoComplete={false}
                />
                <ButtonContainer iconPosition={'right'} readOnly={readOnly} error={error}>
                    <StyledButton
                        variant="base"
                        size="small"
                        icon={<PlusIcon />}
                        onClick={handlePlus}
                        disabled={disableButton(
                            isValueNan(Number(value)) + finalStep > max,
                            disabled,
                            readOnly,
                        )}
                        tabIndex={-1}
                    />
                </ButtonContainer>
            </RelativeElement>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
                <ErrorText alignSelf="center" id={getErrorMessageId()}>
                    {error}
                </ErrorText>
            </RenderIf>
        </StyledContainer>
    );
}

CounterInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The name of the input. */
    name: PropTypes.string,
    /** Specifies the value of an input element. */
    value: PropTypes.number,
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
    /** Specifies that an input will not have border. This value defaults to false. */
    isBare: PropTypes.bool,
    /** Specifies the error that the input contains. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The variant changes the appearance of the Input. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
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
    isBare: false,
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
};
