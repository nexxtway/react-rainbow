import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ text }) {
    if (typeof text === 'string') {
        return <h2 className="rainbow-google-map_header">{text}</h2>;
    }
    return text;
}

Header.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
};

Header.defaultProps = {
    text: undefined,
};
