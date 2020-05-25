import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { Provider } from '../context';
import RightIcon from '../icons/rightArrow';
import LeftIcon from '../icons/leftArrow';
import DaysOfWeek from '../daysOfWeek';
import Month from '../month';
import {
    normalizeDate,
    getFirstDayMonth,
    addMonths,
    getNextFocusedDate,
    isEmptyRange,
    isDateBelowLimit,
} from '../helpers';
import { useYearsRange, useDisabledControls, useFormattedMonth, useHandleKeyDown } from './hooks';
import MonthHeader from './monthHeader';
import StyledControlsContainer from '../styled/controlsContainer';
import StyledArrowButton from '../styled/arrowButton';
import StyledTable from '../styled/table';
import { StyledMonthsContainer, StyledContainer, StyledCalendar, StyledDivider } from './styled';

export default function DoubleCalendar(props) {
    const {
        id,
        className,
        style,
        locale,
        value,
        minDate,
        maxDate,
        onChange,
        selectedRange,
        selectionType,
    } = props;
    const [focusedDate, setFocusedDate] = useState(normalizeDate(value));
    const [currentMonth, setCurrentMonth] = useState(getFirstDayMonth(normalizeDate(value)));
    const [currentRange, setCurrentRange] = useState(selectedRange);
    const [enableNavKeys, setEnableNavKeys] = useState(false);

    const rightCalendarMonth = addMonths(currentMonth, 1);
    const currentYear = currentMonth.getFullYear();
    const rightCalendarYear = rightCalendarMonth.getFullYear();

    const currentMonthLabelId = useUniqueIdentifier('first-month');
    const rightMonthLabelId = useUniqueIdentifier('second-month');
    const currentMonthFormattedLabel = useFormattedMonth(currentMonth, locale);
    const rightMonthFormattedLabel = useFormattedMonth(rightCalendarMonth, locale);
    const yearsRange = useYearsRange(minDate, maxDate, currentMonth);
    const [disablePreviousMonth, disableNextMonth] = useDisabledControls(
        yearsRange,
        minDate,
        maxDate,
        currentMonth,
        rightCalendarMonth,
    );
    const handleKeyDown = useHandleKeyDown(
        focusedDate,
        currentMonth,
        rightCalendarMonth,
        minDate,
        maxDate,
        onChange,
        enableNavKeys,
        setFocusedDate,
        setCurrentMonth,
    );

    const handleOnDayFocus = () => setEnableNavKeys(true);
    const handleOnDayBlur = () => setEnableNavKeys(false);
    const handleOnDayHover = useCallback(
        date => {
            if (selectionType === 'single' || isEmptyRange(selectedRange)) return;

            const [rangeStart, rangeEnd] = selectedRange;
            if (rangeEnd) return;

            const [currentRangeStart] = currentRange;

            if (isDateBelowLimit(date, rangeStart)) {
                setCurrentRange([currentRangeStart]);
            } else {
                setCurrentRange([rangeStart, date]);
            }
        },
        [currentRange, selectedRange, selectionType],
    );

    const prevMonthClick = useCallback(() => {
        const newMonth = addMonths(currentMonth, -1);
        setFocusedDate(getNextFocusedDate(value, newMonth));
        setCurrentMonth(newMonth);
    }, [value, currentMonth]);

    const nextMonthClick = useCallback(() => {
        const newMonth = addMonths(currentMonth, 1);
        setFocusedDate(getNextFocusedDate(value, newMonth));
        setCurrentMonth(newMonth);
    }, [value, currentMonth]);

    const handleLeftCalendarYearChange = useCallback(
        event => {
            const year = +event.target.value;
            const newMonth = new Date(currentMonth);
            newMonth.setFullYear(year);
            setFocusedDate(getNextFocusedDate(value, newMonth));
            setCurrentMonth(newMonth);
        },
        [currentMonth, value],
    );

    const handleRightCalendarYearChange = useCallback(
        event => {
            const year = +event.target.value;
            const newMonth = new Date(rightCalendarMonth);
            newMonth.setFullYear(year);
            setFocusedDate(getNextFocusedDate(value, newMonth));
            setCurrentMonth(addMonths(newMonth, -1));
        },
        [rightCalendarMonth, value],
    );

    useEffect(() => {
        setFocusedDate(normalizeDate(value));
    }, [value]);

    useEffect(() => {
        setCurrentRange(selectedRange);
    }, [selectedRange]);

    return (
        <section id={id} className={className} style={style}>
            <StyledControlsContainer>
                <StyledArrowButton
                    onClick={prevMonthClick}
                    disabled={disablePreviousMonth}
                    size="medium"
                    icon={<LeftIcon />}
                    assistiveText="Previous Month"
                />
                <StyledMonthsContainer>
                    <MonthHeader
                        id={currentMonthLabelId}
                        label={currentMonthFormattedLabel}
                        currentYear={currentYear}
                        yearsRange={yearsRange}
                        onYearChange={handleLeftCalendarYearChange}
                    />
                    <StyledDivider />
                    <MonthHeader
                        id={rightMonthLabelId}
                        label={rightMonthFormattedLabel}
                        currentYear={rightCalendarYear}
                        yearsRange={yearsRange}
                        onYearChange={handleRightCalendarYearChange}
                    />
                </StyledMonthsContainer>
                <StyledArrowButton
                    onClick={nextMonthClick}
                    disabled={disableNextMonth}
                    size="medium"
                    icon={<RightIcon />}
                    assistiveText="Next Month"
                />
            </StyledControlsContainer>
            <StyledContainer>
                <Provider
                    value={{
                        useAutoFocus: enableNavKeys,
                        focusedDate,
                        selectionType,
                        selectedRange,
                        currentRange,
                        privateOnFocus: handleOnDayFocus,
                        privateOnBlur: handleOnDayBlur,
                        privateKeyDown: handleKeyDown,
                        privateOnHover: handleOnDayHover,
                    }}
                >
                    <StyledCalendar>
                        <StyledTable role="grid" aria-labelledby={currentMonthLabelId}>
                            <DaysOfWeek locale={locale} />
                            <Month
                                value={value}
                                firstDayMonth={currentMonth}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={onChange}
                                selectedRange={currentRange}
                            />
                        </StyledTable>
                    </StyledCalendar>
                    <StyledDivider />
                    <StyledCalendar>
                        <StyledTable role="grid" aria-labelledby={rightMonthLabelId}>
                            <DaysOfWeek locale={locale} />
                            <Month
                                value={value}
                                firstDayMonth={rightCalendarMonth}
                                minDate={minDate}
                                maxDate={maxDate}
                                onChange={onChange}
                                selectedRange={currentRange}
                            />
                        </StyledTable>
                    </StyledCalendar>
                </Provider>
            </StyledContainer>
        </section>
    );
}

DoubleCalendar.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    locale: PropTypes.string,
    selectionType: PropTypes.oneOf(['single', 'range']),
    selectedRange: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    ),
};

DoubleCalendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    locale: undefined,
    selectionType: 'single',
    selectedRange: undefined,
};
