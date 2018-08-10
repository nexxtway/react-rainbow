import React from 'react';
import PropTypes from 'prop-types';

export default function LeftIcon({ icon, position }) {
    if (icon && position === 'left') {
        return (
            <span className="slds-button__icon_left slds-current-color">
                {icon}
            </span>
        );
    }
    return null;
}

LeftIcon.propTypes = {
    icon: PropTypes.node,
    position: PropTypes.oneOf([
        'left', 'right',
    ]),
};

LeftIcon.defaultProps = {
    icon: null,
    position: undefined,
};
