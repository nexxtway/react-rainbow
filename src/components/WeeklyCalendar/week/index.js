import React from 'react';
import PropTypes from 'prop-types';
import { addDays } from '../../Calendar/helpers';
import Day from './day';
import ClockLine from './clockLine';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import StyledScroll from './styled/scroll';
import StyledDays from './styled/days';

export default function Week(props) {
    const { week, events, onEventClick, onScroll, locale } = props;

    function Days() {
        let day = new Date(week);
        return Array.from(Array(7), (_value, index) => {
            const item = (
                <Day
                    key={index}
                    day={day}
                    events={events}
                    onEventClick={onEventClick}
                    locale={locale}
                />
            );
            day = addDays(day, 1);
            return item;
        });
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

                <ClockLine />
                <StyledDays>
                    <div />
                    <Days />
                </StyledDays>
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
