import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledHourLine from './styled/hourLine';
import { getHeightOfDate } from './helpers';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';

export default function HourLine(props) {
    const { locale } = props;
    const [date, setDate] = useState(new Date());
    const [timer, setTimer] = useState((60 - date.getSeconds()) * 1000);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer !== 60000) {
                setTimer(60000);
            }
            setDate(new Date());
        }, timer);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <StyledHourLine hourHeight={() => getHeightOfDate(date)}>
            <span>
                {new Intl.DateTimeFormat(locale, {
                    hour: 'numeric',
                    minute: 'numeric',
                }).format(date)}
            </span>
            <StyledCircle />
            <StyledLine />
        </StyledHourLine>
    );
}

HourLine.propTypes = {
    locale: PropTypes.string,
};

HourLine.defaultProps = {
    locale: undefined,
};
