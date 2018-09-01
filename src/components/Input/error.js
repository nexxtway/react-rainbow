import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Error({ id, error }) {
    if (error) {
        return <div id={id} className="rainbow-form-element__help">{error}</div>;
    }
    return null;
}

Error.propTypes = {
    error: PropTypes.node,
    id: PropTypes.string,
};

Error.defaultProps = {
    error: null,
    id: undefined,
};
