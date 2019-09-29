import React from 'react';
import PropTypes from 'prop-types';
import HiddenElement from '../Structural/hiddenElement';

export default function AssistiveText({ text }) {
    if (text) {
        return <HiddenElement>{text}</HiddenElement>;
    }
    return null;
}

AssistiveText.propTypes = {
    text: PropTypes.string,
};

AssistiveText.defaultProps = {
    text: undefined,
};
