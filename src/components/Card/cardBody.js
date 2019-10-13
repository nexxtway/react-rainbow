import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

export default function CardBoddy({ isLoading, children }) {
    if (isLoading) {
        return <Spinner isVisible={isLoading} size="small" />;
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
