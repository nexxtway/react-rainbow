import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ButtonGroupPickerContext } from '../ButtonGroupPicker/context';
import HiddenElement from '../Structural/hiddenElement';
import StyledLabel from './styled/label';
import StyledText from './styled/text';
import isOptionSelected from './helpers/isOptionSelected';
import { uniqueId } from '../../libs/utils';

export default function ButtonOption(props) {
    const inputId = uniqueId('button-option');
    const { className, style, name, label, disabled, onClick } = props;

    const context = useContext(ButtonGroupPickerContext);
    const checked = isOptionSelected(context.values, name);

    return (
        <StyledLabel className={className} style={style} checked={checked} for={inputId}>
            <HiddenElement
                id={inputId}
                as="input"
                type={context.type}
                name={context.name}
                value={name}
                aria-describedby={context.ariaDescribedBy}
                checked={checked}
                onChange={context.onChange}
                disabled={disabled}
            />
            <StyledText onClick={onClick} disabled={disabled} checked={checked}>
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
    name: PropTypes.string.isRequired,
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
