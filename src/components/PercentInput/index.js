/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef, useState, useEffect, useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import {
    useLocale,
    useUniqueIdentifier,
    useReduxForm,
    useErrorMessageId,
    useLabelId,
} from '../../libs/hooks';
import { clearValue, countCharacters, isValidStringNumber } from '../CurrencyInput/helpers';
import { useDecimalSeparator, useGroupSeparator } from '../CurrencyInput/hooks';
import useOptions from './hooks/useOptions';
import Label from '../Input/label';
import RenderIf from '../RenderIf';
import RelativeElement from '../Structural/relativeElement';
import StyledContainer from '../Input/styled/container';
import StyledIconContainer from '../Input/styled/iconContainer';
import { StyledInput } from '../Input/inputBase/styled';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import formatPercent from './helpers/formatPercent';
import { normalizeValue } from './helpers';

const PercentInput = forwardRef((props, ref) => {
    const {
        value,
        name,
        placeholder,
        icon,
        iconPosition,
        bottomHelpText,
        required,
        error,
        disabled,
        readOnly,
        onChange,
        tabIndex,
        onClick,
        onFocus,
        onBlur,
        onKeyDown,
        className,
        style,
        variant,
        id,
        label,
        labelAlignment,
        hideLabel,
        locale: localeProp,
        size,
        valueAlignment,
    } = useReduxForm(props);

    const inputRef = useRef();
    const inputId = useUniqueIdentifier('percent-input');
    const errorMessageId = useErrorMessageId(error);
    const labelId = useLabelId(label);

    const [focused, setFocused] = useState(false);
    const [cursor, setCursor] = useState(0);
    const options = useOptions(props);
    const locale = useLocale(localeProp);
    const decimalSeparator = useDecimalSeparator({ locale, style: 'percent' });
    const groupSeparator = useGroupSeparator({ locale, style: 'percent' });

    const normalizedValue = normalizeValue({ value, locale, decimalSeparator, options });
    const currentValue = focused ? normalizedValue : formatPercent({ value, locale, options });

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

    useEffect(() => {
        inputRef.current.setSelectionRange(cursor, cursor);
    }, [cursor]);

    const handleChange = event => {
        const { value: newValue, selectionStart } = event.target;
        const cleanValue = clearValue(newValue, decimalSeparator);
        const normalizeNewValue = normalizeValue({
            value: cleanValue,
            locale,
            decimalSeparator,
            options,
        });

        if (isValidStringNumber(cleanValue) && normalizeNewValue !== normalizedValue) {
            onChange(cleanValue);
            const diffOfChar =
                countCharacters(normalizeNewValue, groupSeparator) -
                countCharacters(normalizedValue, groupSeparator);

            const newCursor = selectionStart + diffOfChar;
            if (
                cleanValue.charAt(0) === '0' &&
                cleanValue.charAt(1) &&
                cleanValue.charAt(1) !== '0' &&
                cleanValue.charAt(1) !== '.'
            ) {
                return setCursor(newCursor - 1);
            }

            if (diffOfChar > -2) {
                return setCursor(newCursor);
            }
            return setCursor(selectionStart);
        }
        const diffOfChar = normalizedValue.length - newValue.length;
        return setCursor(selectionStart + diffOfChar);
    };

    const handleBlur = event => {
        setFocused(false);
        onBlur(event);
    };

    const handleFocus = event => {
        setFocused(true);
        onFocus(event);
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
                    ref={inputRef}
                    id={inputId}
                    name={name}
                    type="text"
                    value={currentValue}
                    placeholder={placeholder}
                    onChange={handleChange}
                    tabIndex={tabIndex}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onClick={onClick}
                    onKeyDown={onKeyDown}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    aria-labelledby={labelId}
                    aria-describedby={errorMessageId}
                    iconPosition={iconPosition}
                    icon={icon}
                    error={error}
                    variant={variant}
                    size={size}
                    valueAlignment={valueAlignment}
                />
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

PercentInput.propTypes = {
    /** Specifies the value of an input element. */
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** The name of the input. */
    name: PropTypes.string,
    /** Text label for the Input. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Describes the position of the Input label. Options include left, center and right.
     * This value defaults to center. */
    labelAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** A boolean to hide the Input label. */
    hideLabel: PropTypes.bool,
    /** Text that is displayed when the field is empty, to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** The icon to show if it is passed. It must be a svg icon or a font icon. */
    icon: PropTypes.node,
    /** Describes the position of the icon with respect to body. Options include left and right.
     * This value defaults to left. */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /** Shows the help message below the Input. */
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
    /** The variant changes the appearance of the Input. Accepted variants include default,
     *shaded and bare. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The CurrencyInput locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** The minimum number of integer digits to use.
     * A value with a smaller number of integer digits than this number will be left-padded with zeros (to the specified
     *  length) when formatted. Possible values are from 1 to 21; The default is 1. */
    minimumIntegerDigits: PropTypes.number,
    /** The minimum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for percent formatting is 0; */
    minimumFractionDigits: PropTypes.number,
    /** The maximum number of fraction digits to use. Possible values are from 0 to 20;
     *  the default for percent formatting is the larger of minimumFractionDigits and 0. */
    maximumFractionDigits: PropTypes.number,
    /** The minimum number of significant digits to use. Possible values are from 1 to 21; The default is 1. */
    minimumSignificantDigits: PropTypes.number,
    /** The maximum number of significant digits to use. Possible values are from 1 to 21; The default is 21. */
    maximumSignificantDigits: PropTypes.number,
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Specifies the alignment of the value text. This value defaults to left. */
    valueAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

PercentInput.defaultProps = {
    value: undefined,
    name: undefined,
    placeholder: null,
    icon: undefined,
    iconPosition: 'left',
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
    variant: 'default',
    id: undefined,
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    locale: undefined,
    minimumIntegerDigits: undefined,
    minimumFractionDigits: undefined,
    maximumFractionDigits: undefined,
    minimumSignificantDigits: undefined,
    maximumSignificantDigits: undefined,
    size: 'medium',
    valueAlignment: 'left',
};

export default PercentInput;
