import React from 'react';
import PropTypes from 'prop-types';
import Day from './day';
import StyledContentDays from './styled/contentDays';
import StyledGrid from './styled/grid';
import StyledGridLine from './styled/gridLine';

export default function Week(props) {
    const { currentWeek, onChange } = props;

    function Days() {
        const days = [];
        for (let i = 0; i < 7; i += 1) {
            days.push(<Day currentWeek={currentWeek} key={i} onChange={onChange} />);
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
        <StyledContentDays>
            <StyledGrid>
                <GridLines />
            </StyledGrid>
            <Days />
        </StyledContentDays>
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
