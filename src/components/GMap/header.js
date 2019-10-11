import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styled/header';

export default function Header({ text }) {
    if (typeof text === 'string') {
        return <StyledHeader>{text}</StyledHeader>;
    }
    return text;
}

Header.propTypes = {
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    text: undefined,
};
