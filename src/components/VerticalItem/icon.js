import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function ItemIcon({ iconName }) {
    if (iconName) {
        return <Icon iconName={iconName} className="slds-line-height_reset slds-m-right_x-small" size="x-small" />;
    }
    return null;
}

ItemIcon.propTypes = {
    iconName: PropTypes.string.isRequired,
};
