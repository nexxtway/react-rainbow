import React from 'react';
import PropTypes from 'prop-types';
import StyledDivider from './styled/divider';
import StyledFooter from './styled/footer';

export default function DrawerFooter({ content }) {
    if (typeof content === 'string') {
        return (
            <>
                <StyledDivider />
                <StyledFooter>{content}</StyledFooter>
            </>
        );
    }

    return (
        <>
            <StyledDivider />
            {content}
        </>
    );
}

DrawerFooter.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

DrawerFooter.defaultProps = {
    content: undefined,
};
