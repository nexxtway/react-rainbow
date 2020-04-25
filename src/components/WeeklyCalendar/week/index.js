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
        return Array.from(Array(7), (_value, index) => {
            const day = addDays(week, index);
            return (
                <Day
                    key={index}
                    day={day}
                    events={events}
                    onEventClick={onEventClick}
                    locale={locale}
                />
            );
        });
    }

    function GridLines() {
        return Array.from(Array(24), (_value, index) => {
            return <StyledGridLine key={index} />;
        });
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
