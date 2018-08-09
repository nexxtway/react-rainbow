import React from 'react';
import PropTypes from 'prop-types';

export default function LeftIcon({ icon, position }) {
    if (icon && position === 'left') {
        return (
            <span className="slds-button__icon slds-button__icon_left">
                {icon}
            </span>
        );
    }
    return null;
}

LeftIcon.propTypes = {
    icon: PropTypes.node.isRequired,
    position: PropTypes.oneOf([
        'left', 'right',
    ]),
};

LeftIcon.defaultProps = {
    position: undefined,
};
