import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import './styles.css';

export default function CardBoddy({ isLoading, children }) {
    if (isLoading) {
        return (
            <Spinner className="rainbow-card__spinner" isVisible={isLoading} size="small" />
        );
    }
    return children;
}

CardBoddy.propTypes = {
    isLoading: PropTypes.bool,
    children: PropTypes.node,
};
CardBoddy.defaultProps = {
    isLoading: null,
    children: null,
};
