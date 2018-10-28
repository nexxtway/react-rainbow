import React from 'react';
import PropTypes from 'prop-types';
import ButtonContent from './buttonContent';
import Spinner from '../Spinner';
import './styles.css';

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
            <span className="rainbow-button--content-hidden">
                <ButtonContent label={label}>
                    {children}
                </ButtonContent>
                <Spinner
                    className="rainbow-button--spinner-visible"
                    isVisible={isLoading}
                    variant={variantMap[variant]}
                    size="small" />
            </span>
        );
    }
    return (
        <ButtonContent label={label}>
            {children}
        </ButtonContent>
    );
}

Content.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
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
