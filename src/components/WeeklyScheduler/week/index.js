import React from 'react';
import PropTypes from 'prop-types';
import Day from './day';
import StyledContainer from './styled/container';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';
import { addDays } from '../helpers';

export default function Week(props) {
    const { currentWeek, onChange } = props;

    function Days() {
        const days = [];
        let day = new Date(currentWeek);
        for (let i = 0; i < 7; i += 1) {
            days.push(
                <Day currentWeek={currentWeek} key={day.getTime()} day={day} onChange={onChange} />,
            );
            day = addDays(day, 1);
        }
        return days;
    }

    function GridLines() {
        const gridLines = [];

        for (let i = 0; i < 24; i += 1) {
            gridLines.push(<StyledGridLine />);
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
    onChange: PropTypes.func,
};

Week.defaultProps = {
    currentWeek: undefined,
    onChange: () => {},
};
