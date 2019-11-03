/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import StyledDay from './styled/day';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayButton from './styled/dayButton';
import isSameDay from './helpers/isSameDay';

function DayComponent(props) {
    const { date, firstDayMonth, isSelected, minDate, maxDate, onChange } = props;
    const { focusedDate, useAutoFocus, privateKeyDown, privateOnFocus, privateOnBlur } = props;
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled = date > maxDate || date < minDate;
    const buttonRef = useRef();

    useEffect(() => {
        if (!useAutoFocus || !buttonRef.current || !isSameDay(focusedDate, date)) return;
        buttonRef.current.focus();
    }, [date, focusedDate, useAutoFocus]);

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
                ref={buttonRef}
                onClick={() => onChange(new Date(date))}
                onKeyDown={privateKeyDown}
                isSelected={isSelected}
                data-selected={isSelected}
                onFocus={() => privateOnFocus(date)}
                onBlur={privateOnBlur}
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
