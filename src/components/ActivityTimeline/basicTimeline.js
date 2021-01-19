import React from 'react';
import PropTypes from 'prop-types';
import StyledUl from './styled/ul';

export default function BasicTimeline(props) {
    const { id, children, className, style } = props;
    return (
        <StyledUl id={id} className={className} style={style}>
            {children}
        </StyledUl>
    );
}

BasicTimeline.propTypes = {
    id: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    className: PropTypes.string,
    style: PropTypes.object,
};

BasicTimeline.defaultProps = {
    id: undefined,
    children: null,
    className: undefined,
    style: undefined,
};
