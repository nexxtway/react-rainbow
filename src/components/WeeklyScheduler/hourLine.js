import React from 'react';
import PropTypes from 'prop-types';
import StyledHourLine from './styled/hourLine';
import { getHeightOfDate } from './helpers';
import StyledCircle from './styled/circle';
import StyledLine from './styled/line';
import useInterval from './hooks/useInterval';

export default function HourLine(props) {
    const { locale } = props;
    const date = useInterval({ interval: 1, unit: 'minutes' });

    return (
        <StyledHourLine hourHeight={() => getHeightOfDate(date)}>
            <span>
                {new Intl.DateTimeFormat(locale, {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
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
