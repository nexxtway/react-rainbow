import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ text }) {
    if (typeof text === 'string') {
        return (
            <h1 className="rainbow-notification_title">{text}</h1>
        );
    }
    return text;
}

Title.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Title.defaultProps = {
    text: null,
};
