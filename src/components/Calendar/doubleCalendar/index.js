import React, { useRef, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import { Provider } from '../context';
import RightIcon from '../icons/rightArrow';
import LeftIcon from '../icons/leftArrow';
import DaysOfWeek from '../daysOfWeek';
import Month from '../month';
import {
    getFirstDayMonth,
    addMonths,
    getNextFocusedDate,
    isEmptyRange,
    isDateBelowLimit,
} from '../helpers';
import {
    useNormalizedValue,
    useYearsRange,
    useDisabledControls,
    useFormattedMonth,
    useHandleKeyDown,
} from './hooks';
import YearSelect from './yearSelect';
import StyledArrowButton from '../styled/arrowButton';
import StyledTable from '../styled/table';
import {
    StyledCalendar,
    StyledSection,
    StyledHeaderContainer,
    StyledMonth,
    StyledControlsContainer,
} from './styled';
import shouldUpdateCurrentMonth from './helpers/shouldUpdateCurrentMonth';
import useHeaderArrowNav from '../hooks/useHeaderArrowNav';

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
    const currentValue = useNormalizedValue(value);
    const [focusedDate, setFocusedDate] = useState(currentValue);
    const [currentMonth, setCurrentMonth] = useState(getFirstDayMonth(currentValue));
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

    const headerElementsRefs = [useRef(), useRef(), useRef(), useRef()];
    const { updateFocusedItem, handleKeyDown: handleHeaderElementKeyDown } = useHeaderArrowNav({
        disableNextMonth,
        disablePreviousMonth,
        refs: headerElementsRefs,
        delta: 1,
        firstIndex: disablePreviousMonth ? 1 : 0,
        lastIndex: disableNextMonth ? 2 : 3,
    });

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
        updateFocusedItem(0);
    }, [value, currentMonth, updateFocusedItem]);

    const nextMonthClick = useCallback(() => {
        const newMonth = addMonths(currentMonth, 1);
        setFocusedDate(getNextFocusedDate(value, newMonth));
        setCurrentMonth(newMonth);
        updateFocusedItem(3);
    }, [value, currentMonth, updateFocusedItem]);

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
        setFocusedDate(currentValue);
        if (shouldUpdateCurrentMonth(currentValue, currentMonth, rightCalendarMonth)) {
            setCurrentMonth(getFirstDayMonth(currentValue));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentValue]);

    useEffect(() => {
        setCurrentRange(selectedRange);
    }, [selectedRange]);

    const currentYearSelectTabIndex = disablePreviousMonth ? undefined : -1;

    return (
        <StyledSection id={id} className={className} style={style} data-calendar-type="double">
            <StyledControlsContainer>
                <StyledArrowButton
                    ref={headerElementsRefs[0]}
                    onClick={prevMonthClick}
                    disabled={disablePreviousMonth}
                    size="medium"
                    icon={<LeftIcon />}
                    assistiveText="Previous Month"
                    onKeyDown={handleHeaderElementKeyDown}
                    onFocus={() => updateFocusedItem(0)}
                />
                <StyledHeaderContainer onKeyDown={handleHeaderElementKeyDown}>
                    <StyledMonth id={currentMonthLabelId} data-id="month">
                        {currentMonthFormattedLabel}
                    </StyledMonth>
                    <YearSelect
                        ref={headerElementsRefs[1]}
                        currentYear={currentYear}
                        yearsRange={yearsRange}
                        onYearChange={handleLeftCalendarYearChange}
                        tabIndex={currentYearSelectTabIndex}
                        onClick={() => updateFocusedItem(1)}
                        onFocus={() => updateFocusedItem(1)}
                    />
                </StyledHeaderContainer>
            </StyledControlsContainer>
            <StyledControlsContainer onKeyDown={handleHeaderElementKeyDown}>
                <StyledHeaderContainer>
                    <StyledMonth id={rightMonthLabelId} data-id="month">
                        {rightMonthFormattedLabel}
                    </StyledMonth>
                    <YearSelect
                        ref={headerElementsRefs[2]}
                        currentYear={rightCalendarYear}
                        yearsRange={yearsRange}
                        onYearChange={handleRightCalendarYearChange}
                        tabIndex={-1}
                        onClick={() => updateFocusedItem(2)}
                        onFocus={() => updateFocusedItem(2)}
                    />
                </StyledHeaderContainer>
                <StyledArrowButton
                    ref={headerElementsRefs[3]}
                    onClick={nextMonthClick}
                    disabled={disableNextMonth}
                    size="medium"
                    icon={<RightIcon />}
                    assistiveText="Next Month"
                    tabIndex={-1}
                    onKeyDown={handleHeaderElementKeyDown}
                    onFocus={() => updateFocusedItem(3)}
                />
            </StyledControlsContainer>
            <StyledCalendar>
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
                </Provider>
            </StyledCalendar>
            <StyledCalendar>
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
                </Provider>
            </StyledCalendar>
        </StyledSection>
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
