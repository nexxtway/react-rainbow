import React from 'react';
import PropTypes from 'prop-types';
import IconSvg from '../IconSvg';

export default function RightIcon({ iconName, position }) {
    if (iconName && position === 'right') {
        return (
            <IconSvg iconName={iconName} className="slds-button__icon slds-button__icon_right" />
        );
    }
    return null;
}

RightIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};
