/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import InternalOverlay from '../InternalOverlay';
import ColorPicker from '../ColorPicker';
import { StyledContainer, StyledInput, StyledCard, StyledContent } from './styled';
import { useOutsideClick, useWindowResize } from '../../libs/hooks';

/**
 * Provides a color input with an improved color picker.
 * @category Form
 */
const ColorPickerInput = ({
    id,
    className,
    style,
    value,
    onChange,
    defaultColors,
    variant,
    format,
    onClick,
    ...inputProps
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef();
    const pickerRef = useRef();

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
    useWindowResize(() => setIsOpen(false), isOpen);

    const handleClick = event => {
        event.preventDefault();
        if (isOpen) setIsOpen(false);
        else setIsOpen(true);
        return onClick(event);
    };

    const handleChange = color => {
        onChange(color);
    };

    const inputValue = value && value.hex ? value.hex : '#000';

    return (
        <StyledContainer id={id} className={className} style={style}>
            <div ref={triggerRef}>
                <StyledInput
                    type="color"
                    onClick={handleClick}
                    value={inputValue}
                    {...inputProps}
                />
            </div>
            <InternalOverlay isVisible={isOpen} triggerElementRef={() => triggerRef}>
                <div ref={pickerRef}>
                    <StyledCard>
                        <StyledContent>
                            <ColorPicker
                                value={value}
                                defaultColors={defaultColors}
                                variant={variant}
                                onChange={handleChange}
                            />
                        </StyledContent>
                    </StyledCard>
                </div>
            </InternalOverlay>
        </StyledContainer>
    );
};

ColorPickerInput.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** Specifies the color of ColorPicker. */
    value: PropTypes.string,
    /** Specifies the default colors to choice. */
    defaultColors: PropTypes.array,
    /** The variant changes the appearance of the Chip. Accepted variants include default, color-fixed */
    variant: PropTypes.oneOf(['default', 'colors-fixed']),
    /** Specifies the tab order of an element (when the tab button is used for navigating). */
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /** The action triggered when the value changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The format to represent the color. */
    format: PropTypes.oneOf(['hex', 'rgba', 'hsv']),
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
    /** Specifies that an input text will be centered. This value defaults to false. */
    isCentered: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an input element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** Specifies that an input field is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The action triggered when the element receives focus. */
    onFocus: PropTypes.func,
    /** The action triggered when the element releases focus. */
    onBlur: PropTypes.func,
    /** The action triggered when a key is pressed on the element. */
    onKeyDown: PropTypes.func,
};

ColorPickerInput.defaultProps = {
    id: undefined,
    value: '',
    defaultColors: undefined,
    variant: 'default',
    tabIndex: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    format: 'hex',
    // Input props
    name: undefined,
    placeholder: null,
    icon: undefined,
    iconPosition: 'left',
    bottomHelpText: null,
    required: false,
    isCentered: false,
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
};

export default ColorPickerInput;
