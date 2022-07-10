/* eslint-disable react/sort-comp */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import {
    normalizeDate,
    addDays,
    addMonths,
    formatDate,
    getFirstDayMonth,
    getFormattedMonth,
    getLastDayMonth,
    getYearsRange,
    isSameMonth,
    getSign,
    getCalendarBounds,
    isDateBelowLimit,
    isDateBeyondLimit,
    getNextFocusedDate,
    isSameDatesRange,
    isEmptyRange,
} from './helpers';
import CalendarHeader from './calendarHeader';
import StyledTable from './styled/table';
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
} from '../../libs/constants';
import { uniqueId } from '../../libs/utils';
import { Provider } from './context';
import normalizeDates from './helpers/normalizeDates';

class SingleCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedDate: normalizeDate(props.value),
            currentMonth: getFirstDayMonth(normalizeDate(props.value)),
            currentRange: props.selectedRange,
            maxRangeEnd: undefined,
        };
        this.enableNavKeys = false;
        this.monthLabelId = uniqueId('month');
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUpPressed = this.handleKeyUpPressed.bind(this);
        this.handleKeyDownPressed = this.handleKeyDownPressed.bind(this);
        this.handleKeyLeftPressed = this.handleKeyLeftPressed.bind(this);
        this.handleKeyRightPressed = this.handleKeyRightPressed.bind(this);
        this.handleKeyHomePressed = this.handleKeyHomePressed.bind(this);
        this.handleKeyEndPressed = this.handleKeyEndPressed.bind(this);
        this.handleKeyPageUpPressed = this.handleKeyPageUpPressed.bind(this);
        this.handleKeyPageDownPressed = this.handleKeyPageDownPressed.bind(this);
        this.handleKeyEnterPressed = this.handleKeyEnterPressed.bind(this);
        this.handleKeyAltPageUpPressed = this.handleKeyAltPageUpPressed.bind(this);
        this.handleKeyAltPageDownPressed = this.handleKeyAltPageDownPressed.bind(this);
        this.keyHandlerMap = {
            [UP_KEY]: this.handleKeyUpPressed,
            [DOWN_KEY]: this.handleKeyDownPressed,
            [LEFT_KEY]: this.handleKeyLeftPressed,
            [RIGHT_KEY]: this.handleKeyRightPressed,
            [HOME_KEY]: this.handleKeyHomePressed,
            [END_KEY]: this.handleKeyEndPressed,
            [PAGEUP_KEY]: this.handleKeyPageUpPressed,
            [PAGEDN_KEY]: this.handleKeyPageDownPressed,
            [SPACE_KEY]: this.handleKeyEnterPressed,
            [ENTER_KEY]: this.handleKeyEnterPressed,
        };
        this.keyHandlerMapAlt = {
            [HOME_KEY]: this.handleKeyHomePressed,
            [END_KEY]: this.handleKeyEndPressed,
            [PAGEUP_KEY]: this.handleKeyAltPageUpPressed,
            [PAGEDN_KEY]: this.handleKeyAltPageDownPressed,
        };

        this.onDayFocus = this.onDayFocus.bind(this);
        this.onDayBlur = this.onDayBlur.bind(this);
        this.onDayHover = this.onDayHover.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { selectedRange: prevSelectedRange, value: prevValue } = prevProps;
        const { selectedRange, value } = this.props;
        const normalizedDate = normalizeDate(value);
        if (formatDate(normalizeDate(prevValue)) !== formatDate(normalizedDate)) {
            this.updateCurrentMonth(normalizedDate);
            this.updateFocusedDate(normalizedDate);
        }
        if (!isSameDatesRange(prevSelectedRange, selectedRange)) {
            this.updateCurrentRange(selectedRange);
        }
    }

    onDayFocus() {
        this.enableNavKeys = true;
    }

    onDayBlur() {
        this.enableNavKeys = false;
    }

    onDayHover(date) {
        const { selectionType, selectedRange } = this.props;
        if (selectionType === 'single' || isEmptyRange(selectedRange)) return;

        const [rangeStart, rangeEnd] = selectedRange;
        if (rangeEnd !== undefined) return;

        const { currentRange } = this.state;
        const [currentRangeStart] = currentRange;

        if (isDateBelowLimit(date, rangeStart)) {
            this.setState({
                currentRange: [currentRangeStart],
            });
        } else {
            this.setState({
                currentRange: [rangeStart, date],
            });
        }
    }

    getContext() {
        const { focusedDate, currentRange, maxRangeEnd } = this.state;
        const { selectionType, selectedRange, disabledDays } = this.props;
        return {
            focusedDate,
            useAutoFocus: this.enableNavKeys,
            selectionType,
            selectedRange,
            currentRange,
            disabledDays,
            maxRangeEnd,
            privateKeyDown: this.handleKeyDown,
            privateOnFocus: this.onDayFocus,
            privateOnBlur: this.onDayBlur,
            privateOnHover: this.onDayHover,
        };
    }

    moveFocusedDay(increment) {
        const { currentMonth, focusedDate } = this.state;
        let nextFocusedDate = addDays(focusedDate, increment);
        let nextFocusedMonth = currentMonth;

        if (!isSameMonth(nextFocusedDate, currentMonth)) {
            nextFocusedMonth = getFirstDayMonth(addMonths(currentMonth, getSign(increment)));
        }

        const { minDate, maxDate } = this.props;
        const { minCalendarDate, maxCalendarDate } = getCalendarBounds(minDate, maxDate);

        if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) {
            nextFocusedDate = minCalendarDate;
            nextFocusedMonth = getFirstDayMonth(minCalendarDate);
        } else if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) {
            nextFocusedDate = maxCalendarDate;
            nextFocusedMonth = getFirstDayMonth(maxCalendarDate);
        }

        this.setState({
            focusedDate: nextFocusedDate,
            currentMonth: nextFocusedMonth,
        });
    }

    moveFocusedMonth(increment) {
        const { focusedDate } = this.state;
        let nextFocusedDate = addMonths(focusedDate, increment);

        const { minDate, maxDate } = this.props;
        const { minCalendarDate, maxCalendarDate } = getCalendarBounds(minDate, maxDate);
        if (isDateBelowLimit(nextFocusedDate, minCalendarDate)) {
            nextFocusedDate = minCalendarDate;
        } else if (isDateBeyondLimit(nextFocusedDate, maxCalendarDate)) {
            nextFocusedDate = maxCalendarDate;
        }

        this.setState({
            focusedDate: nextFocusedDate,
            currentMonth: getFirstDayMonth(nextFocusedDate),
        });
    }

    updateCurrentMonth(value) {
        this.setState({
            currentMonth: getFirstDayMonth(value),
        });
    }

    updateFocusedDate(value) {
        this.setState({
            focusedDate: value,
        });
    }

    updateCurrentRange(value) {
        const { disabledDays: disabledDaysInProps } = this.props;
        const disabledDays = normalizeDates(disabledDaysInProps);

        const maxRangeEnd =
            value.length === 1
                ? Math.min(...disabledDays.filter(day => isDateBeyondLimit(day, value[0])))
                : undefined;
        this.setState({
            currentRange: value,
            maxRangeEnd,
        });
    }

    nextMonth() {
        const { currentMonth } = this.state;
        const newMonth = addMonths(currentMonth, 1);
        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
        });
    }

    previousMonth() {
        const { currentMonth } = this.state;
        const newMonth = addMonths(currentMonth, -1);
        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
        });
    }

    handleYearChange(event) {
        const { currentMonth } = this.state;
        const year = +event.target.value;
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);

        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
        });
    }

    handleKeyDown(event) {
        if (!this.enableNavKeys) return;
        const { keyCode, altKey } = event;
        const keyHandler = altKey ? this.keyHandlerMapAlt : this.keyHandlerMap;
        if (keyHandler[keyCode]) {
            event.preventDefault();
            event.stopPropagation();
            keyHandler[keyCode]();
        }
    }

    handleKeyUpPressed() {
        this.moveFocusedDay(-7);
    }

    handleKeyDownPressed() {
        this.moveFocusedDay(7);
    }

    handleKeyLeftPressed() {
        this.moveFocusedDay(-1);
    }

    handleKeyRightPressed() {
        this.moveFocusedDay(1);
    }

    handleKeyHomePressed() {
        const { focusedDate } = this.state;
        this.moveFocusedDay(-focusedDate.getDay());
    }

    handleKeyEndPressed() {
        const { focusedDate } = this.state;
        this.moveFocusedDay(6 - focusedDate.getDay());
    }

    handleKeyPageUpPressed() {
        this.moveFocusedMonth(-1);
    }

    handleKeyPageDownPressed() {
        this.moveFocusedMonth(1);
    }

    handleKeyAltPageUpPressed() {
        this.moveFocusedMonth(-12);
    }

    handleKeyAltPageDownPressed() {
        this.moveFocusedMonth(12);
    }

    handleKeyEnterPressed() {
        const { onChange } = this.props;
        const { focusedDate } = this.state;
        onChange(new Date(focusedDate));
    }

    render() {
        const { currentMonth, currentRange } = this.state;
        const { id, value, onChange, minDate, maxDate, className, style, locale } = this.props;
        const formattedMonth = getFormattedMonth(currentMonth, locale);
        const currentYear = currentMonth.getFullYear();
        const yearsRange = getYearsRange({
            minDate,
            maxDate,
            currentMonth: currentMonth.getMonth(),
        });
        const lastYearItem = yearsRange[yearsRange.length - 1];
        const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
        const disableNextMonth = addMonths(currentMonth, 1) > maxSelectableDate;
        const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
        const prevDate = getLastDayMonth(addMonths(currentMonth, -1));
        const disablePreviousMonth = prevDate < minSelectableDate;

        return (
            <section id={id} className={className} style={style} data-calendar-type="single">
                <CalendarHeader
                    variant="single"
                    monthLabelId={this.monthLabelId}
                    formattedMonth={formattedMonth}
                    currentYear={currentYear}
                    yearsRange={yearsRange}
                    disablePreviousMonth={disablePreviousMonth}
                    disableNextMonth={disableNextMonth}
                    onPrevMonthClick={this.previousMonth}
                    onNextMonthClick={this.nextMonth}
                    onYearChange={this.handleYearChange}
                />
                <StyledTable role="grid" aria-labelledby={this.monthLabelId}>
                    <DaysOfWeek locale={locale} />
                    <Provider value={this.getContext()}>
                        <Month
                            value={value}
                            firstDayMonth={currentMonth}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={onChange}
                            selectedRange={currentRange}
                        />
                    </Provider>
                </StyledTable>
            </section>
        );
    }
}

SingleCalendar.propTypes = {
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
    disabledDays: PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    ),
};

SingleCalendar.defaultProps = {
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
    disabledDays: [],
};

export default SingleCalendar;
