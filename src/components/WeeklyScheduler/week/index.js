import React from 'react';
import PropTypes from 'prop-types';
import Day from './day';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import { addDays } from '../../Calendar/helpers';
import useInterval from '../hooks/useInterval';

export default function Week(props) {
    const { currentWeek, events, locale } = props;
    useInterval({ interval: 1, unit: 'days' });

    function Days() {
        const days = [];
        let day = new Date(currentWeek);
        for (let i = 0; i < 7; i += 1) {
            days.push(<Day key={day.getDate()} day={day} events={events} locale={locale} />);
            day = addDays(day, 1);
        }
        return days;
    }

    function GridLines() {
        const gridLines = [];

        for (let i = 0; i < 24; i += 1) {
            gridLines.push(<StyledGridLine key={i} />);
        }
        return gridLines;
    }

    return (
        <StyledContainer>
            <StyledGrid>
                <GridLines />
            </StyledGrid>
            <Days />
        </StyledContainer>
    );
}

Week.propTypes = {
    currentWeek: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    locale: PropTypes.string,
};

Week.defaultProps = {
    currentWeek: undefined,
    events: [],
    locale: undefined,
};
