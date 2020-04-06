import React from 'react';
import PropTypes from 'prop-types';
import { addDays } from '../../Calendar/helpers';
import Day from './day';
import ClockLine from './clockLine';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import StyledScroll from './styled/scroll';

export default function Week(props) {
    const { week, events, onEventClick, onScroll, locale } = props;

    function Days() {
        const days = [];
        let day = new Date(week);
        for (let i = 0; i < 7; i += 1) {
            days.push(
                <Day
                    key={i}
                    day={day}
                    events={events}
                    onEventClick={onEventClick}
                    locale={locale}
                />,
            );
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
    week: PropTypes.instanceOf(Date),
    events: PropTypes.array,
    onScroll: PropTypes.func,
    onEventClick: PropTypes.func,
    locale: PropTypes.string,
};

Week.defaultProps = {
    week: undefined,
    events: [],
    onScroll: () => {},
    onEventClick: () => {},
    locale: undefined,
};
