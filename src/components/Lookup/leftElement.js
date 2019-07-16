import React from 'react';
import PropTypes from 'prop-types';

export default function LeftElement({ icon }) {
    return <span className="rainbow-lookup_input-left-icon">{icon}</span>;
}

LeftElement.propTypes = {
    icon: PropTypes.node,
};

LeftElement.defaultProps = {
    icon: undefined,
};
