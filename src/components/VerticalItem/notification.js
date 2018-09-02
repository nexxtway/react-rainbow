import React from 'react';
import PropTypes from 'prop-types';

export default function Notification({ notification }) {
    if (notification) {
        return <span className="rainbow-col_bump-left">{notification}</span>;
    }
    return null;
}

Notification.propTypes = {
    notification: PropTypes.node,
};

Notification.defaultProps = {
    notification: null,
};
