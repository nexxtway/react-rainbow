import React from 'react';
import PropTypes from 'prop-types';

export default function Help({ text }) {
    if (text) {
        return <div className="rainbow-form-element__help rainbow-color__text_gray-11">{text}</div>;
    }
    return null;
}

Help.propTypes = {
    text: PropTypes.node,
};

Help.defaultProps = {
    text: null,
};
