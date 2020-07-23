import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import StyledButtonItem from './styled/buttonItem';
import StyledButtonItemLabel from './styled/buttonItemLabel';
import StyledInput from './styled/input';
import { useUniqueIdentifier, useFixFocus } from '../../libs/hooks';

export default function RadioButtonItem(props) {
    const {
        itemRef,
        label,
        ariaDescribedby,
        onChange,
        value,
        disabled,
        isChecked,
        name,
        required,
        variant,
        size,
    } = props;
    const radioId = useUniqueIdentifier('radiobutton');
    const inputRef = useRef();

    useFixFocus(inputRef);

    return (
        <StyledButtonItem
            data-id="radio-button-group_radio-container"
            variant={variant}
            size={size}
            isChecked={isChecked}
            disabled={disabled}
            ref={itemRef}
        >
            <StyledInput
                type="radio"
                ref={inputRef}
                required={required}
                id={radioId}
                name={name}
                value={value}
                checked={isChecked}
                aria-describedby={ariaDescribedby}
                onChange={onChange}
                disabled={disabled}
            />

            <StyledButtonItemLabel
                disabled={disabled}
                isChecked={isChecked}
                variant={variant}
                htmlFor={radioId}
                size={size}
            >
                {label}
            </StyledButtonItemLabel>
        </StyledButtonItem>
    );
}

RadioButtonItem.propTypes = {
    label: PropTypes.node.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    ariaDescribedby: PropTypes.string,
    disabled: PropTypes.bool,
    isChecked: PropTypes.bool,
    name: PropTypes.string,
    required: PropTypes.bool.isRequired,
    itemRef: PropTypes.object.isRequired,
    variant: PropTypes.oneOf(['default', 'inverse', 'brand']),
    size: PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
};

RadioButtonItem.defaultProps = {
    value: undefined,
    onChange: () => {},
    ariaDescribedby: undefined,
    disabled: false,
    isChecked: false,
    name: undefined,
    variant: 'default',
    size: 'medium',
};
