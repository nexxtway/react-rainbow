import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

export default function HeaderIcon({ iconName }) {
    if (iconName) {
        return (
            <div className="slds-media__figure">
                <Icon iconName={iconName} size="small" />
            </div>
        );
    }
    return null;
}

HeaderIcon.propTypes = {
    iconName: PropTypes.string,
};
HeaderIcon.defaultProps = {
    iconName: null,
};
