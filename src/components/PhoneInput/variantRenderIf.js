/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { StyledTrigger, StyledFlagContainer, StyledIndicator } from './styled';

export default function VariantRenderIf(props) {
    const { ref, onClick, onBlur, tabIndex, disabled, error, countries, flagIcon } = props;

    if (countries.length === 1) {
        return (
            <StyledTrigger ref={ref} tabIndex={tabIndex} disabled={disabled}>
                <StyledFlagContainer disabled={disabled}>{flagIcon}</StyledFlagContainer>
            </StyledTrigger>
        );
    }
    return (
        <StyledTrigger
            ref={ref}
            onClick={onClick}
            onBlur={onBlur}
            tabIndex={tabIndex}
            disabled={disabled}
        >
            <StyledFlagContainer disabled={disabled}>
                {flagIcon}
                <StyledIndicator error={error} disabled={disabled} />
            </StyledFlagContainer>
        </StyledTrigger>
    );
}
VariantRenderIf.propTypes = {
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    countries: PropTypes.node,
    flagIcon: PropTypes.node,
    ref: PropTypes.node,
    onBlur: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
