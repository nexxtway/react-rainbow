import React from 'react';
import PropTypes from 'prop-types';

export default function Error({ error }) {
    if (error) {
        return <div className="slds-form-element__help">{error}</div>;
    }
    return null;
}

Error.propTypes = {
    error: PropTypes.node.isRequired,
};
