import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Icon({ icon, isVisible, position }) {
    const getIconClassNames = () => classnames('rainbow-icon-container', `rainbow-icon-${position}`);

    if (isVisible) {
        return <span className={getIconClassNames()}>{icon}</span>;
    }
    return null;
}

Icon.propTypes = {
    icon: PropTypes.node,
    isVisible: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    icon: null,
};
