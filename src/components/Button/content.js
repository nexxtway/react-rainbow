import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './buttonContent';
import StyledSpinner from './styled/spinner';
import StyledContent from './styled/content';

const variantMap = {
    base: 'base',
    neutral: 'base',
    brand: 'inverse',
    destructive: 'inverse',
    success: 'inverse',
    inverse: 'inverse',
    'outline-brand': 'brand',
    'border-inverse': 'inverse',
};

export default function Content({ label, children, variant, isLoading }) {
    if (isLoading) {
        return (
            <StyledContent>
                <ButtonContent label={label}>{children}</ButtonContent>
                <StyledSpinner isVisible={isLoading} variant={variantMap[variant]} size="small" />
            </StyledContent>
        );
    }
    return <ButtonContent label={label}>{children}</ButtonContent>;
}

Content.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    variant: PropTypes.oneOf([
        'base',
        'neutral',
        'brand',
        'outline-brand',
        'destructive',
        'success',
        'inverse',
        'border-inverse',
    ]),
    isLoading: PropTypes.bool,
};

Content.defaultProps = {
    label: undefined,
    children: null,
    variant: 'neutral',
    isLoading: false,
};
