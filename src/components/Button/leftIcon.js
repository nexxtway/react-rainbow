import React from 'react';
import PropTypes from 'prop-types';
import IconSvg from '../IconSvg';

export default function LeftIcon({ iconName, position }) {
    if (iconName && position === 'left') {
        return (
            <IconSvg iconName={iconName} className="slds-button__icon slds-button__icon_left" />
        );
    }
    return null;
}

LeftIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};
