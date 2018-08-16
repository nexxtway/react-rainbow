import React from 'react';
import PropTypes from 'prop-types';
import IconSvg from '../IconSvg';

export default function IconLeft({ iconName, position }) {
    if (iconName && position === 'left') {
        return (
            <IconSvg iconName={iconName} className="slds-button__icon slds-button__icon_left" />
        );
    }
    return null;
}

IconLeft.propTypes = {
    iconName: PropTypes.string,
    position: PropTypes.string,
};
IconLeft.defaultProps = {
    iconName: '',
    position: '',
};
