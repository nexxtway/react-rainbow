/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import StyledDay from './styled/day';
import Event from './event';
import useUniqueIdentifier from '../../libs/hooks/useUniqueIdentifier';

export default function Day(props) {
    const { date, onChange } = props;
    const locale = 'es';
    const id = useUniqueIdentifier('event');
    return (
        <StyledDay>
            <Event id={id} title={id} />
        </StyledDay>
    );
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

Day.defaultProps = {
    date: undefined,
    onChange: () => {},
};
