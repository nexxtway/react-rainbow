import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
import StyledDivider from './styled/divider';

export default function Header({ title }) {
    if (typeof title === 'string') {
        return (
            <>
                <StyledTitle>{title}</StyledTitle>
                <StyledDivider />
            </>
        );
    }

    return (
        <>
            {title}
            <StyledDivider />
        </>
    );
}

Header.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    title: undefined,
};
