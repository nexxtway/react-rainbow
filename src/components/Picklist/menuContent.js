import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';

export default function MenuContent({ children, isLoading }) {
    if (isLoading) {
        return <Spinner assistiveText="loading menu" isVisible size="small" />;
    }
    return children;
}

MenuContent.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MenuContent.defaultProps = {
    className: '',
    style: {},
};
