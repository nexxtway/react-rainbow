import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

export default function Content({ children, isLoading }) {
    if (isLoading) {
        return <Spinner assistiveText="loading menu" isVisible size="small" />;
    }
    return children;
}

Content.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Content.defaultProps = {
    className: undefined,
    style: undefined,
};
