import React from 'react';
import PropTypes from 'prop-types';
import IconSvg from '../IconSvg';

function ButtonIcon(props) {
    const { isVisible, iconName, position } = props;

    const getIconClassName = () => `slds-button__icon slds-button__icon_${position}`;

    if (isVisible) {
        return <IconSvg iconName={iconName} className={getIconClassName()} />;
    }
    return null;
}

ButtonIcon.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    iconName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
};

export default ButtonIcon;
