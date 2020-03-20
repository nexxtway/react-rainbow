import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';
import StyledDivider from './styled/divider';

export default function Header({ content, id }) {
    if (typeof content === 'string') {
        return (
            <>
                <StyledTitle id={id}>{content}</StyledTitle>
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
    id: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

Header.defaultProps = {
    id: undefined,
    content: undefined,
};
