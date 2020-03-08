import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
import StyledDivider from './styled/divider';

export default function Header({ content }) {
    if (typeof content === 'string') {
        return (
            <>
                <StyledTitle>{content}</StyledTitle>
                <StyledDivider />
            </>
        );
    }

    return (
        <>
            {content}
            <StyledDivider />
        </>
    );
}

Header.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    content: undefined,
};
