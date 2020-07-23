import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroupPickerContext } from '../ButtonGroupPicker/context';
import HiddenElement from '../Structural/hiddenElement';
import { StyledLabel, StyledText } from './styled';
import isOptionSelected from './helpers/isOptionSelected';
import { useUniqueIdentifier, useFixFocus } from '../../libs/hooks';

/**
 * @category Form
 */
export default function ButtonOption(props) {
    const { className, style, name, label, disabled, onClick } = props;
    const { type, values, name: contextName, onChange, ariaDescribedBy, size } = useContext(
        ButtonGroupPickerContext,
    );
    const inputId = useUniqueIdentifier('button-option');
    const inputRef = useRef();
    const checked = isOptionSelected(values, name);

    useFixFocus(inputRef);

    return (
        <StyledLabel
            className={className}
            style={style}
            onClick={() => onClick({ isSelected: checked })}
            checked={checked}
            htmlFor={inputId}
        >
            <HiddenElement
                id={inputId}
                as="input"
                type={type}
                name={contextName}
                value={name}
                aria-describedby={ariaDescribedBy}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                ref={inputRef}
            />
            <StyledText size={size} disabled={disabled} checked={checked}>
                {label}
            </StyledText>
        </StyledLabel>
    );
}

ButtonOption.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with a custom style applied to the outer element. */
    style: PropTypes.object,
    /** It is a unique value that identifies the picker option. */
    name: PropTypes.string,
    /** The content to be displayed inside the ButtonOption */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies whether this button should be displayed in a disabled state. Disabled buttons can't be clicked. */
    disabled: PropTypes.bool,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
};

ButtonOption.defaultProps = {
    className: undefined,
    style: undefined,
    name: undefined,
    label: undefined,
    disabled: false,
    onClick: () => {},
};
