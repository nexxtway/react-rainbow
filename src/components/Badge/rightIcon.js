import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function RightIcon({ iconName, position, label }) {
    const hasRightIcon = iconName && position === 'right';
    if (!label && hasRightIcon) {
        return (
            <Icon iconName={iconName} size="xx-small" />
        );
    }
    if (label && hasRightIcon) {
        return (
            <Icon iconName={iconName} size="xx-small" className="slds-m-left_xx-small" />
        );
    }
    return null;
}

RightIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    label: PropTypes.string,
};
RightIcon.defaultProps = {
    label: '',
};
