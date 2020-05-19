/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './context';
import StyledDay from './styled/day';
import StyledDayAdjacent from './styled/dayAdjacent';
import StyledDayButton from './styled/dayButton';
import { isSameDay, compareDates } from './helpers';

function DayComponent(props) {
    const {
        date,
        firstDayMonth,
        isSelected,
        minDate,
        maxDate,
        onChange,
        isWithinRange,
        // isFirstDayOfWeek,
        // isLastDayOfWeek,
    } = props;
    const {
        useAutoFocus,
        focusedDate,
        privateKeyDown,
        privateOnFocus,
        privateOnBlur,
        privateOnHover,
    } = props;
    const day = date.getDate();
    const isAdjacentDate = date.getMonth() !== firstDayMonth.getMonth();
    const isDisabled = compareDates(date, maxDate) > 0 || compareDates(date, minDate) < 0;
    const tabIndex = isSameDay(focusedDate, date) ? 0 : -1;
    const buttonRef = useRef();

    useEffect(() => {
        if (!useAutoFocus || !buttonRef.current || tabIndex === -1) return;
        buttonRef.current.focus();
    }, [tabIndex, useAutoFocus]);

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
                tabIndex={tabIndex}
                onClick={() => onChange(new Date(date))}
                onMouseOver={() => privateOnHover(new Date(date))}
                isSelected={isSelected}
                data-selected={isSelected}
                onKeyDown={privateKeyDown}
                onFocus={privateOnFocus}
                onBlur={privateOnBlur}
                isWithinRange={isWithinRange}
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
