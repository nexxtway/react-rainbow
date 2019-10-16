import React from 'react';
import PropTypes from 'prop-types';
import StyledDescription from './styled/description';

export default function Description({ text }) {
    if (typeof text === 'string') {
        return <StyledDescription>{text}</StyledDescription>;
    }
    return text;
}

Description.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Description.defaultProps = {
    text: null,
};
