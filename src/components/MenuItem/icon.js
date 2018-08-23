import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconNamePropType from './../../propTypes/iconNamePropType';
import IconSvg from './../IconSvg';

export default function Icon({ iconName, isVisible, position }) {
    const getIconClassNames = () => classnames('slds-icon slds-icon_x-small slds-icon-text-default', {
        'slds-m-right_small': position === 'left',
        'slds-m-left_small slds-shrink-none': position === 'right',
    });

    if (isVisible) {
        return (
            <IconSvg
                iconName={iconName}
                className={getIconClassNames()} />
        );
    }
    return null;
}

Icon.propTypes = {
    iconName: iconNamePropType,
    isVisible: PropTypes.bool.isRequired,
    position: PropTypes.string.isRequired,
};

Icon.defaultProps = {
    iconName: undefined,
};
