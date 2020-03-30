/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import StyledDay from './styled/day';
import Event from '../event';
import useUniqueIdentifier from '../../../libs/hooks/useUniqueIdentifier';

export default function Day(props) {
    const { day, locale, onChange } = props;
    const id = useUniqueIdentifier('Event');
    const start = new Date(day);
    start.setMinutes(3 * 60);
    const end = new Date(start);
    end.setMinutes(120);
    return (
        <StyledDay>
            <Event id={id} title={id} start={start} end={end} locale={locale} />
        </StyledDay>
    );
}

Day.propTypes = {
    day: PropTypes.instanceOf(Date),
    locale: PropTypes.string,
    onChange: PropTypes.func,
};

Day.defaultProps = {
    day: undefined,
    locale: undefined,
    onChange: () => {},
};
