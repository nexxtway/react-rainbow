/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import StyledDay from './styled/day';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayButton from './styled/dayButton';
import isSameDay from './helpers/isSameDay';
import { compareDates } from './helpers';

function DayComponent(props) {
    const { date, firstDayMonth, isSelected, minDate, maxDate, onChange } = props;
    const { focusedDate } = props;
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled = compareDates(date, maxDate) > 0 || compareDates(date, minDate) < 0;
    const isFocused = !isSelected && isSameDay(focusedDate, date);

    if (isAdjacentDate || isDisabled) {
        return (
            <StyledDay role="gridcell" aria-selected="false">
                <StyledDayAdjacent>{day}</StyledDayAdjacent>
            </StyledDay>
        );
    }

    return (
        <StyledDay role="gridcell">
            <StyledDayButton
                tabIndex="-1"
                onClick={() => onChange(new Date(date))}
                isSelected={isSelected}
                isFocused={isFocused}
                data-selected={isSelected}
            >
                {day}
            </StyledDayButton>
        </StyledDay>
    );
}

export default function Day(props) {
    return <Consumer>{values => <DayComponent {...values} {...props} />}</Consumer>;
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
};

Day.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    isSelected: false,
    onChange: () => {},
};
