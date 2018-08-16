import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function LeftIcon({ iconName, position, label }) {
    const hasLeftIcon = iconName && position === 'left';
    if (!label && hasLeftIcon) {
        return (
            <Icon iconName={iconName} size="xx-small" />
        );
    }
    if (label && hasLeftIcon) {
        return (
            <Icon iconName={iconName} size="xx-small" className="slds-m-right_xx-small" />
        );
    }
    return null;
}

LeftIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    label: PropTypes.string,
};
LeftIcon.defaultProps = {
    label: '',
};
