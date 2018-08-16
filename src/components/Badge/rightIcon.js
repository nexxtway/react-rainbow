import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function IconRight({ iconName, position, label }) {
    if (!label && iconName && position === 'right') {
        return (
            <Icon iconName={iconName} size="xx-small" />
        );
    }
    if (label && iconName && position === 'right') {
        return (
            <Icon iconName={iconName} size="xx-small" className="slds-m-left_xx-small" />
        );
    }
    return null;
}

IconRight.propTypes = {
    iconName: PropTypes.string,
    position: PropTypes.string,
    label: PropTypes.string,
};
IconRight.defaultProps = {
    iconName: '',
    position: '',
    label: '',
};
