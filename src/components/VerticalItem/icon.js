import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({ icon }) {
    if (icon) {
        return (
            <span className="rainbow-nav-vertical_icon" >{icon}</span>
        );
    }
    return null;
}

Icon.propTypes = {
    icon: PropTypes.node,
};

Icon.defaultProps = {
    icon: undefined,
};
