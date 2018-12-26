/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

export default function TabLabel({ icon, label }) {
    return (
        <span className="react-rainbow-tab-label rainbow-flex rainbow-align_center">
            <span>{icon}</span>
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
