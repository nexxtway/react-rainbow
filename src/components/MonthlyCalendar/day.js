import React, { useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { compareDates } from '../Calendar/helpers';
import { MonthCalendarContext } from './context';
import StyledDayContainer from './styled/dayContainer';
import StyledDay from './styled/day';
import StyledDayLabel from './styled/dayLabel';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayContent from './styled/dayContent';

export default function Day(props) {
    const { date, firstDayMonth, isSelected, minDate, maxDate, onSelect } = props;
    const { dateComponent } = useContext(MonthCalendarContext);
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled = useMemo(
        () => compareDates(date, maxDate) > 0 || compareDates(date, minDate) < 0,
        [date, maxDate, minDate],
    );

    const handleSelectDate = () => onSelect({ date });

    if (isAdjacentDate || isDisabled) {
        return (
            <StyledDayContainer role="gridcell" aria-selected="false">
                <StyledDay disabled>
                    <StyledDayAdjacent>{day}</StyledDayAdjacent>
                </StyledDay>
            </StyledDayContainer>
        );
    }

    return (
        <StyledDayContainer role="gridcell">
            <StyledDay isSelected={isSelected} onClick={handleSelectDate}>
                <StyledDayLabel>{day}</StyledDayLabel>
                <StyledDayContent>{dateComponent && dateComponent(date)}</StyledDayContent>
            </StyledDay>
        </StyledDayContainer>
    );
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func,
};

Day.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    isSelected: false,
    onSelect: () => {},
};
