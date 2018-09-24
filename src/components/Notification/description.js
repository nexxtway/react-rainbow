import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ text }) {
    if (typeof text === 'string') {
        return (
            <p className="rainbow-notification_description">{text}</p>
        );
    }
    return text;
}

Description.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Description.defaultProps = {
    text: null,
};
