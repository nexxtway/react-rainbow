import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ description, isExpanded }) {
    if (isExpanded) {
        return null;
    }
    return (
        <span className="rainbow-nav-vertical__action-description">
            {description}
        </span>
    );
}

Description.propTypes = {
    description: PropTypes.node.isRequired,
    isExpanded: PropTypes.bool.isRequired,
};
