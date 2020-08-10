import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from '../Option/styled/header';
import StyledHeaderLabel from '../Option/styled/headerLabel';
import { StyledPrimitiveCheckbox } from './styled';

function PlaceholderOption(props) {
    const { label, title, isChecked, onClick, ...rest } = props;

    return (
        <StyledHeader title={title} role="presentation" onMouseDown={onClick}>
            <StyledPrimitiveCheckbox type="checkbox" label="" checked={isChecked} {...rest} />
            <StyledHeaderLabel>{label}</StyledHeaderLabel>
        </StyledHeader>
    );
}

PlaceholderOption.propTypes = {
    /** Text of the PicklistOption. */
    label: PropTypes.string,
    /** The name of the PicklistOption. */
    title: PropTypes.string,
    /** Specifies if the header is selected */
    isChecked: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    /** The action triggered when clicked. */
    onClick: PropTypes.func,
};

PlaceholderOption.defaultProps = {
    label: undefined,
    title: undefined,
    isChecked: false,
    onClick: () => {},
};

export default PlaceholderOption;
