import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function AssistiveText({ text }) {
    if (text) {
        return <span className="rainbow-assistive-text">{text}</span>;
    }
    return null;
}

AssistiveText.propTypes = {
    text: PropTypes.string,
};

AssistiveText.defaultProps = {
    text: undefined,
};
