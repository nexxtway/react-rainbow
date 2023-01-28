/* eslint-disable react/no-unused-prop-types */
import React, { useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useScrollingIntent } from '@rainbow-modules/hooks';
import Label from '../Input/label';
import StyledContainer from '../Input/styled/container';
import InternalOverlay from '../InternalOverlay';
import ColorPicker from '../ColorPicker';
import {
    StyledAlpha,
    StyledAlphaInput,
    StyledCard,
    StyledContent,
    StyledInput,
    ColorInputContainer,
} from './styled';
import {
    useOutsideClick,
    useWindowResize,
    useUniqueIdentifier,
    useReduxForm,
    useErrorMessageId,
    useLabelId,
} from '../../libs/hooks';
import {
    StyledFlagContainer,
    StyledIndicator,
    StyledInputContainer,
    StyledTrigger,
} from '../PhoneInput/styled';
import AssistiveText from '../AssistiveText';
import RenderIf from '../RenderIf';
import HelpText from '../Input/styled/helpText';
import ErrorText from '../Input/styled/errorText';
import { useFocusIndex, useHandleBlur, useHandleFocus } from '../PhoneInput/hooks';
import ColorSample from './colorSample';
import { decomposeColor, hexToRgb, hexToRgba, recomposeColor } from '../../styles/helpers/color';
import isHexColor from '../../styles/helpers/color/isHexColor';
import StyledIconContainer from '../Input/styled/iconContainer';
import getHexString from './helpers/getHexString';
import getColorValue from './helpers/getColorValue';

/**
 * Provides a color input with an improved color picker.
 * @category Form
 */
const ColorInput = props => {
    const {
        id,
        className,
        style,
        value,
        onChange,
        defaultColors,
        variant,
        onClick,
        label,
        labelAlignment,
        hideLabel,
        required,
        readOnly,
        disabled,
        error,
        tabIndex,
        name,
        placeholder,
        bottomHelpText,
        onFocus: focusInProps,
        onBlur: blurInProps,
        size,
        borderRadius,
    } = useReduxForm(props);
    const [isOpen, setIsOpen] = useState(false);
    const [colorValue, setColorValue] = useState(getColorValue(value));
    const [sampleColor, setSampleColor] = useState(value);
    const pickerRef = useRef();
    const containerRef = useRef();
    const triggerRef = useRef();
    const alphaInputRef = useRef();
    const inputRef = useRef();

    const inputId = useUniqueIdentifier('color-input');
    const errorMessageId = useErrorMessageId(error);
    const labelId = useLabelId(label);

    const [focusIndex, setFocusIndex] = useFocusIndex(
        containerRef,
        triggerRef,
        inputRef,
        alphaInputRef,
    );

    useOutsideClick(
        containerRef,
        () => {
            setFocusIndex(-1);
        },
        focusIndex > -1,
    );
    useOutsideClick(
        pickerRef,
        event => {
            if (
                event.target !== triggerRef.current &&
                !triggerRef.current.contains(event.target) &&
                !pickerRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        },
        isOpen,
    );
    useScrollingIntent({
        callback: () => setIsOpen(false),
        isListening: isOpen,
        triggerElementRef: () => triggerRef,
        threshold: 5,
    });
    useWindowResize(() => setIsOpen(false), isOpen);

    const onBlur = useCallback(() => {
        const { hex } = value;
        if (!isHexColor(hex)) setSampleColor(undefined);
        blurInProps(value);
    }, [value, blurInProps]);

    const onFocus = useCallback(() => focusInProps(value), [value, focusInProps]);

    const handleFocus = useHandleFocus({ focusIndex, onFocus, setFocusIndex, value });
    const handleBlur = useHandleBlur({ focusIndex, onBlur, value });

    const handleClick = event => {
        if (focusIndex === 1) {
            setFocusIndex(0);
        } else {
            setFocusIndex(1);
        }

        event.preventDefault();
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
        return onClick(event);
    };

    const handleChange = event => {
        const eventValue = event.target.value;
        const { alpha } = value;
        const hex = getHexString(eventValue);
        const isValid = isHexColor(hex);
        const newValue = { hex, alpha, isValid };
        if (isValid) {
            setSampleColor(newValue);
            setColorValue(getColorValue(newValue));
        }
        onChange(newValue);
    };

    const handleAlphaChange = event => {
        if (!event.target.value) {
            onChange({ ...value, alpha: null });
            return;
        }

        let alpha = Number.parseInt(event.target.value || '0', 10);
        if (alpha > 100) alpha = 100;
        else if (alpha < 0) alpha = 0;
        alpha /= 100;

        const newValue = { ...value, alpha };
        setSampleColor(newValue);
        setColorValue(getColorValue(newValue));
        if (!Number.isNaN(alpha)) onChange(newValue);
    };

    const handleColorChange = color => {
        const { hex, rgba } = color;
        const newValue = { hex, alpha: rgba[3], isValid: isHexColor(hex) };
        setColorValue(color);
        setSampleColor(newValue);
        onChange(newValue);
    };

    const isFocus = focusIndex > -1 || isOpen;
    const inputValue =
        (value && value.hex) || value.hex === '' ? value.hex.replace('#', '') : '000000';
    const alphaValue =
        (value && value.alpha) || value.alpha === 0 ? Math.round(value.alpha * 100) : '';

    return (
        <StyledContainer id={id} className={className} style={style} ref={containerRef}>
            <Label
                label={label}
                labelAlignment={labelAlignment}
                hideLabel={hideLabel}
                required={required}
                inputId={inputId}
                readOnly={readOnly}
                id={labelId}
                size={size}
            />
            <StyledInputContainer
                disabled={disabled}
                readOnly={readOnly}
                error={error}
                isFocus={isFocus}
                borderRadius={borderRadius}
                size={size}
            >
                <StyledTrigger
                    ref={triggerRef}
                    onClick={handleClick}
                    onFocus={event => handleFocus(event, 0)}
                    onBlur={handleBlur}
                    tabIndex={tabIndex}
                    disabled={disabled}
                    type="button"
                >
                    <StyledFlagContainer disabled={disabled}>
                        <ColorSample value={sampleColor} size={size} />
                        <StyledIndicator error={error} disabled={disabled} />
                    </StyledFlagContainer>
                    <AssistiveText text="pick color" />
                </StyledTrigger>
                <ColorInputContainer>
                    <StyledIconContainer>#</StyledIconContainer>
                    <StyledInput
                        id={inputId}
                        ref={inputRef}
                        name={name}
                        type="text"
                        value={inputValue}
                        placeholder={placeholder}
                        tabIndex={tabIndex}
                        onFocus={event => handleFocus(event, 2)}
                        onBlur={handleBlur}
                        onClick={onClick}
                        onChange={handleChange}
                        disabled={disabled}
                        readOnly={readOnly}
                        required={required}
                        aria-labelledby={labelId}
                        aria-describedby={errorMessageId}
                        error={error}
                        isFocus={isFocus}
                        size={size}
                    />
                </ColorInputContainer>
                <StyledAlpha disabled={disabled}>
                    <StyledAlphaInput
                        type="number"
                        min="0"
                        max="100"
                        ref={alphaInputRef}
                        onFocus={event => handleFocus(event, 3)}
                        onBlur={handleBlur}
                        onChange={handleAlphaChange}
                        value={alphaValue}
                        size={size}
                    />
                    %
                </StyledAlpha>
            </StyledInputContainer>
            <RenderIf isTrue={bottomHelpText}>
                <HelpText alignSelf="center">{bottomHelpText}</HelpText>
            </RenderIf>
            <RenderIf isTrue={error}>
                <ErrorText alignSelf="center" id={errorMessageId}>
                    {error}
                </ErrorText>
            </RenderIf>
            <InternalOverlay isVisible={isOpen} triggerElementRef={() => triggerRef}>
                <div ref={pickerRef}>
                    <StyledCard borderRadius={borderRadius}>
                        <StyledContent>
                            <ColorPicker
                                value={colorValue}
                                defaultColors={defaultColors}
                                variant={variant}
                                onChange={handleColorChange}
                            />
                        </StyledContent>
                    </StyledCard>
                </div>
            </InternalOverlay>
        </StyledContainer>
    );
};

ColorInput.toRgb = value => {
    const { hex } = value;
    const arr = decomposeColor(hexToRgb(hex)).values;
    arr.toString = () =>
        recomposeColor({
            type: 'rgb',
            values: arr,
        });
    return arr;
};

ColorInput.toRgba = value => {
    const { hex, alpha } = value;
    const arr = decomposeColor(hexToRgba(hex, alpha)).values;
    arr.toString = () =>
        recomposeColor({
            type: 'rgba',
            values: arr,
        });
    return arr;
};

ColorInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    value: PropTypes.shape({
        hex: PropTypes.string,
        alpha: PropTypes.number,
        isValid: PropTypes.bool,
    }),
    /** Specifies the default colors to choice. */
    defaultColors: PropTypes.array,
    /** The variant changes the appearance of the Chip. Accepted variants include default, color-fixed */
    variant: PropTypes.oneOf(['default', 'colors-fixed']),
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
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
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
    /** The size of the input. Valid values are small, medium, and large. */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The border radius of the input. Valid values are square, semi-square, semi-rounded and rounded. This value defaults to rounded. */
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

ColorInput.defaultProps = {
    id: undefined,
    value: { hex: '#000000', alpha: 1 },
    defaultColors: undefined,
    variant: 'default',
    tabIndex: 0,
    onChange: () => {},
    className: undefined,
    style: undefined,
    // Input props
    name: undefined,
    placeholder: null,
    bottomHelpText: null,
    required: false,
    error: null,
    disabled: false,
    readOnly: false,
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
    label: undefined,
    labelAlignment: 'center',
    hideLabel: false,
    size: 'medium',
    borderRadius: 'rounded',
};

export default ColorInput;
