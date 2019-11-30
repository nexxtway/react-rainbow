import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styled/header';
import StyledTitle from './styled/title';

export default function Header({ title, id }) {
    if (typeof title === 'string') {
        return (
            <StyledHeader>
                <StyledTitle id={id}>{title}</StyledTitle>
            </StyledHeader>
        );
    }
    return title;
}

Header.propTypes = {
    id: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    id: undefined,
    title: undefined,
};
