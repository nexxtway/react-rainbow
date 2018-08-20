import React from 'react';
import PropTypes from 'prop-types';

export default function Help({ text }) {
    if (text) {
        return <div id="123" className="slds-form-element__help">{text}</div>;
    }
    return null;
}

Help.propTypes = {
    text: PropTypes.node.isRequired,
};
