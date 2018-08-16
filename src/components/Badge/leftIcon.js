import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function IconLeft({ iconName, position, label }) {
    if (!label && iconName && position === 'left') {
        return (
            <Icon iconName={iconName} size="xx-small" />
        );
    }
    if (label && iconName && position === 'left') {
        return (
            <Icon iconName={iconName} size="xx-small" className="slds-m-right_xx-small" />
        );
    }
    return null;
}

IconLeft.propTypes = {
    iconName: PropTypes.string,
    position: PropTypes.string,
    label: PropTypes.string,
};
IconLeft.defaultProps = {
    iconName: '',
    position: '',
    label: '',
};
