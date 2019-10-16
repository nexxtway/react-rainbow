import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';

export default function Title({ text }) {
    if (typeof text === 'string') {
        return <StyledTitle>{text}</StyledTitle>;
    }
    return text;
}

Title.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Title.defaultProps = {
    text: null,
};
