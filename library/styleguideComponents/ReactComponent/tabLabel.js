/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TabLabel({ icon, label }) {
    return (
        <span className="react-rainbow-tab-label">
            <FontAwesomeIcon icon={icon} className="rainbow-m-right_x-small" />
            <span>{label}</span>
        </span>
    );
}

TabLabel.propTypes = {
    icon: PropTypes.object,
    label: PropTypes.string,
};

TabLabel.defaultProps = {
    icon: null,
    label: null,
};
