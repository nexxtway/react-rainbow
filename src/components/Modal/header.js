import React from 'react';
import PropTypes from 'prop-types';
import StyledHeader from './styled/header';

export default function Header({ title, id }) {
    if (typeof title === 'string') {
        return (
            <StyledHeader>
                <h2 id={id}>{title}</h2>
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
