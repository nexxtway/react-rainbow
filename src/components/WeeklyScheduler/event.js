import React from 'react';
import PropTypes from 'prop-types';
import StyledEvent from './styled/event';

export default function Event(props) {
    const { id, title, start, end } = props;
    return <StyledEvent id={id}>{title}</StyledEvent>;
}

Event.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
};

Event.defaultProps = {
    id: undefined,
    title: undefined,
    start: undefined,
    end: undefined,
};
