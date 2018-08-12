import React from 'react';
import PropTypes from 'prop-types';

export default function AssistiveText({ text }) {
    if (text) {
        return <span className="slds-assistive-text">{text}</span>;
    }
    return null;
}

AssistiveText.propTypes = {
    text: PropTypes.string,
};

AssistiveText.defaultProps = {
    text: undefined,
};
