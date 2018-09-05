import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function HeaderIcon({ icon }) {
    if (icon) {
        return (
            <div className="rainbow-card-media__figure">
                {icon}
            </div>
        );
    }
    return null;
}

HeaderIcon.propTypes = {
    icon: PropTypes.node,
};
HeaderIcon.defaultProps = {
    icon: null,
};
