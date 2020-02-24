import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';

export default function Header({ title }) {
    if (typeof title === 'string') {
        return <StyledTitle>{title}</StyledTitle>;
    }
    return title;
}

Header.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    title: undefined,
};
