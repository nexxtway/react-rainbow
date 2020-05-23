/* eslint-disable no-unused-vars */
import React, { useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier } from '../../../libs/hooks';
import {
    UP_KEY,
    DOWN_KEY,
    RIGHT_KEY,
    LEFT_KEY,
    HOME_KEY,
    END_KEY,
    PAGEUP_KEY,
    PAGEDN_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../libs/constants';
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
    isSameMonth,
} from '../helpers';
import {
    useYearsRange,
    useLastDayMonth,
    useMoveFocusedDayFunction,
    useMoveFocusedMonthFunction,
} from './hooks';
import StyledControlsContainer from '../styled/controlsContainer';
import StyledArrowButton from '../styled/arrowButton';
import StyledMonthsContainer from './styled/monthsContainer';
import StyledTable from '../styled/table';
import StyledContainer from './styled/container';
import StyledCalendar from './styled/calendar';
import StyledDivider from './styled/divider';
import MonthHeader from './monthHeader';

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
    const firstMonthLabelId = useUniqueIdentifier('first-month');
    const secondMonthLabelId = useUniqueIdentifier('second-month');
    const currentYear = currentMonth.getFullYear();
    const rightCalendarYear = rightCalendarMonth.getFullYear();
    const yearsRange = useYearsRange(minDate, maxDate, currentMonth);
    const lastYearItem = yearsRange[yearsRange.length - 1];
    const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    const lastDayMonth = useLastDayMonth(currentMonth);
    const disableNextMonth = addMonths(currentMonth, 1) > maxSelectableDate;
    const disablePreviousMonth = lastDayMonth < minSelectableDate;

    const moveFocusedDay = useMoveFocusedDayFunction(focusedDate, currentMonth, minDate, maxDate);
    const moveFocusedMonth = useMoveFocusedMonthFunction(focusedDate, minDate, maxDate);

    const onDayFocus = () => setEnableNavKeys(true);
    const onDayBlur = () => setEnableNavKeys(false);

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

    const handleYearChange = useCallback(event => {
        const year = +event.target.value;
    }, []);

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: () => {
                const result = moveFocusedDay(-7);
                setFocusedDate(result.day);
            },
            [DOWN_KEY]: () => {
                const result = moveFocusedDay(7);
                setFocusedDate(result.day);
            },
            [LEFT_KEY]: () => {
                const result = moveFocusedDay(-1);
                setFocusedDate(result.day);
            },
            [RIGHT_KEY]: () => {
                const result = moveFocusedDay(1);
                setFocusedDate(result.day);
            },
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-1);
                setFocusedDate(result.day);
                if (
                    !isSameMonth(result.month, rightCalendarMonth) &&
                    !isSameMonth(result.month, currentMonth)
                ) {
                    setCurrentMonth(result.month);
                }
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(1);
                setFocusedDate(result.day);
                if (
                    !isSameMonth(result.month, rightCalendarMonth) &&
                    !isSameMonth(result.month, currentMonth)
                ) {
                    setCurrentMonth(rightCalendarMonth);
                }
            },
            [SPACE_KEY]: () => onChange(new Date(focusedDate)),
            [ENTER_KEY]: () => onChange(new Date(focusedDate)),
        }),
        [currentMonth, focusedDate, moveFocusedDay, moveFocusedMonth, onChange, rightCalendarMonth],
    );

    const keyHandlerMapAlt = useMemo(
        () => ({
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-12);
                setFocusedDate(result.day);
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(12);
                setFocusedDate(result.day);
            },
        }),
        [focusedDate, moveFocusedDay, moveFocusedMonth],
    );

    const handleKeyDown = useCallback(
        event => {
            if (enableNavKeys) {
                const { keyCode, altKey } = event;
                const keyHandler = altKey ? keyHandlerMapAlt : keyHandlerMap;
                if (keyHandler[keyCode]) {
                    event.preventDefault();
                    event.stopPropagation();
                    keyHandler[keyCode]();
                }
            }
        },
        [enableNavKeys, keyHandlerMap, keyHandlerMapAlt],
    );

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
                        id={firstMonthLabelId}
                        locale={locale}
                        month={currentMonth}
                        currentYear={currentYear}
                        yearsRange={yearsRange}
                        onYearChange={handleYearChange}
                    />
                    <StyledDivider />
                    <MonthHeader
                        locale={locale}
                        id={secondMonthLabelId}
                        month={rightCalendarMonth}
                        currentYear={rightCalendarYear}
                        yearsRange={yearsRange}
                        onYearChange={handleYearChange}
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
                        privateOnFocus: onDayFocus,
                        privateOnBlur: onDayBlur,
                        privateKeyDown: handleKeyDown,
                        privateOnHover: () => {},
                    }}
                >
                    <StyledCalendar>
                        <StyledTable role="grid" aria-labelledby={firstMonthLabelId}>
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
                        <StyledTable role="grid" aria-labelledby={secondMonthLabelId}>
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
