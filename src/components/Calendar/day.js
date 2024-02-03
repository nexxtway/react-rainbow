/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import StyledDay from './styled/day';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayButton from './styled/dayButton';
import StyledRangeHighlight from './styled/rangeHighlight';
import { isSameDay, compareDates } from './helpers';
import { useRangeStartDate, useRangeEndDate } from './hooks';
import isInArray from './helpers/isInArray';

function DayComponent(props) {
    const {
        date,
        firstDayMonth,
        isSelected,
        minDate,
        maxDate,
        maxRangeEnd,
        onChange,
        isWithinRange,
        isFirstDayOfWeek,
        isLastDayOfWeek,
        useAutoFocus,
        focusedDate,
        currentRange,
        disabledDays,
        highlightedDays,
        privateKeyDown,
        privateOnFocus,
        privateOnBlur,
        privateOnHover,
    } = props;

    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled =
        isAdjacentDate ||
        compareDates(date, maxDate) > 0 ||
        compareDates(date, minDate) < 0 ||
        (maxRangeEnd && compareDates(date, maxRangeEnd) > 0) ||
        isInArray(date, disabledDays);
    const isHighlighted = isInArray(date, highlightedDays);
    const tabIndex = isSameDay(focusedDate, date) ? 0 : -1;
    const buttonRef = useRef();
    const isRangeStartDate = useRangeStartDate(date, currentRange);
    const isRangeEndDate = useRangeEndDate(date, currentRange);
    const isToday = isSameDay(date, new Date());

    useEffect(() => {
        if (useAutoFocus && buttonRef.current && tabIndex !== -1) {
            buttonRef.current.focus();
        }
    }, [tabIndex, useAutoFocus]);

    if (isAdjacentDate || isDisabled) {
        return (
            <StyledDay role="gridcell" aria-selected="false">
                <StyledDayAdjacent
                    tabIndex={tabIndex}
                    ref={buttonRef}
                    onKeyDown={privateKeyDown}
                    onFocus={privateOnFocus}
                    onBlur={privateOnBlur}
                    role="button"
                    aria-disabled="true"
                    isHighlighted={isHighlighted}
                >
                    {day}
                </StyledDayAdjacent>
            </StyledDay>
        );
    }

    return (
        <StyledDay role="gridcell">
            <StyledRangeHighlight
                isVisible={isWithinRange && !(isRangeStartDate && isRangeEndDate)}
                isFirstInRange={isRangeStartDate}
                isLastInRange={isRangeEndDate}
                isFirstDayOfWeek={isFirstDayOfWeek}
                isLastDayOfWeek={isLastDayOfWeek}
                isToday={isToday}
            >
                <StyledDayButton
                    ref={buttonRef}
                    tabIndex={tabIndex}
                    type="button"
                    onClick={() => onChange(date)}
                    onMouseEnter={() => privateOnHover(date)}
                    isSelected={isSelected}
                    isHovered={!isSelected && isRangeEndDate}
                    data-selected={isSelected}
                    onKeyDown={privateKeyDown}
                    onFocus={privateOnFocus}
                    onBlur={privateOnBlur}
                    isWithinRange={isWithinRange}
                    isToday={isToday}
                    isHighlighted={isHighlighted}
                >
                    {day}
                </StyledDayButton>
            </StyledRangeHighlight>
        </StyledDay>
    );
}

export default function Day(props) {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Consumer>{values => <DayComponent {...values} {...props} />}</Consumer>;
}

Day.propTypes = {
    date: PropTypes.instanceOf(Date),
    firstDayMonth: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    isSelected: PropTypes.bool,
    isWithinRange: PropTypes.bool,
    isFirstDayOfWeek: PropTypes.bool,
    isLastDayOfWeek: PropTypes.bool,
    onChange: PropTypes.func,
};

Day.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    minDate: undefined,
    maxDate: undefined,
    isSelected: false,
    isWithinRange: false,
    isFirstDayOfWeek: false,
    isLastDayOfWeek: false,
    onChange: () => {},
};
