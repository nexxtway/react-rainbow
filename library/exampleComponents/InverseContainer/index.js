import React from 'react';
import PropTypes from 'prop-types';
import StyledInverseContainer from './styled';

export default function InverseContainer(props) {
    const { className, children } = props;
    return <StyledInverseContainer className={className}>{children}</StyledInverseContainer>;
}

InverseContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

InverseContainer.defaultProps = {
    children: null,
    className: undefined,
};
