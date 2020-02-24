import React from 'react';
import PropTypes from 'prop-types';
import StyledDivider from './styled/divider';

export default function DrawerFooter({ footer }) {
    if (typeof title === 'string') {
        return (
            <>
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

DrawerFooter.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

DrawerFooter.defaultProps = {
    title: undefined,
};
