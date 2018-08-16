import React from 'react';
import PropTypes from 'prop-types';
import IconSvg from '../IconSvg';

export default function IconRight({ iconName, position }) {
    if (iconName && position === 'right') {
        return (
            <IconSvg iconName={iconName} className="slds-button__icon slds-button__icon_right" />
        );
    }
    return null;
}

IconRight.propTypes = {
    iconName: PropTypes.string,
    position: PropTypes.string,
};
IconRight.defaultProps = {
    iconName: '',
    position: '',
};
