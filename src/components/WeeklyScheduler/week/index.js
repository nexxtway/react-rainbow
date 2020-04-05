import React from 'react';
import PropTypes from 'prop-types';
import { useInterval } from '../hooks';
import { addDays } from '../../Calendar/helpers';
import Day from './day';
import ClockLine from './clockLine';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import StyledScroll from './styled/scroll';

export default function Week(props) {
    const { currentWeek, events, locale, onScroll } = props;
    useInterval({ interval: 1, unit: 'days' });

    function Days() {
        const days = [];
        let day = new Date(currentWeek);
        for (let i = 0; i < 7; i += 1) {
            days.push(<Day key={i} day={day} events={events} locale={locale} />);
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
        <StyledScroll onScroll={onScroll}>
            <StyledContainer>
                <StyledGrid>
                    <GridLines />
                </StyledGrid>
                <div />
                <Days />
                <ClockLine />
            </StyledContainer>
        </StyledScroll>
    );
}

Week.propTypes = {
    currentWeek: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    locale: PropTypes.string,
    onScroll: PropTypes.func,
};

Week.defaultProps = {
    currentWeek: undefined,
    events: [],
    locale: undefined,
    onScroll: () => {},
};
