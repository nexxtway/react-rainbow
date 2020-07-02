import React from 'react';
import PropTypes from 'prop-types';
import { CheckboxContainer as StyledCheckboxContainer, Checkbox as StyledCheckbox } from './styled';
import { useUniqueIdentifier } from '../../../libs/hooks';

export default function Checkbox({ isChecked }) {
    const inputId = useUniqueIdentifier('markdown-input-checkbox');
    return (
        <StyledCheckboxContainer data-id="input-checkbox_container">
            <StyledCheckbox
                as="input"
                type="checkbox"
                tabIndex="-1"
                id={inputId}
                checked={isChecked}
                readOnly
            />
            <label htmlFor={inputId}>
                <span className="rainbow-input_faux" />
            </label>
        </StyledCheckboxContainer>
    );
}

Checkbox.propTypes = {
    isChecked: PropTypes.bool,
};

Checkbox.defaultProps = {
    isChecked: false,
};
