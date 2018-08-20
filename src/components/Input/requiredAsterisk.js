import React from 'react';
import PropTypes from 'prop-types';

export default function RequiredAsterisk({ required }) {
    if (required) {
        return <abbr className="slds-required" title="required">*</abbr>;
    }
    return null;
}

RequiredAsterisk.propTypes = {
    required: PropTypes.bool.isRequired,
};
