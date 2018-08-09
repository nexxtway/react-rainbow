import React from 'react';
import PropTypes from 'prop-types';

export default function RightIcon({ icon, position }) {
    if (icon && position === 'right') {
        return (
            <span className="slds-button__icon slds-button__icon_right">
                {icon}
            </span>
        );
    }
    return null;
}

RightIcon.propTypes = {
    icon: PropTypes.node.isRequired,
    position: PropTypes.oneOf([
        'left', 'right',
    ]),
};

RightIcon.defaultProps = {
    position: undefined,
};
