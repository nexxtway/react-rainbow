/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import CalendarMonth from './calendarMonth';
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
} from './helpers';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledMonth from './styled/month';
import StyledArrowButton from './styled/arrowButton';
import StyledCalendarContainer from './styled/calendarContainer';
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
import { uniqueId, getLocale } from '../../libs/utils';
import { Consumer } from '../Application/context';
import { Provider } from './context';

class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        const currentMonth = getFirstDayMonth(normalizeDate(props.value));

        this.state = {
            focusedDate: normalizeDate(props.value),
            currentMonth,
            nextMonth: addMonths(currentMonth, 1),
        };
        this.enableNavKeys = false;
        this.monthLabelId = uniqueId('month');
        this.nextMonthLabelId = uniqueId('month');
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
    }

    componentDidUpdate(prevProps) {
        const { value: prevValue } = prevProps;
        const { value } = this.props;
        const normalizedDate = normalizeDate(value);
        if (formatDate(normalizeDate(prevValue)) !== formatDate(normalizedDate)) {
            this.updateCurrentMonth(normalizedDate);
            this.updateFocusedDate(normalizedDate);
        }
    }

    onDayFocus() {
        this.enableNavKeys = true;
    }

    onDayBlur() {
        this.enableNavKeys = false;
    }

    getContext() {
        const { focusedDate } = this.state;
        return {
            focusedDate,
            useAutoFocus: this.enableNavKeys,
            privateKeyDown: this.handleKeyDown,
            privateOnFocus: this.onDayFocus,
            privateOnBlur: this.onDayBlur,
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
            nextMonth: addMonths(nextFocusedMonth, 1),
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
        const currentMonth = getFirstDayMonth(value);
        this.setState({
            currentMonth,
            nextMonth: addMonths(currentMonth, 1),
        });
    }

    updateFocusedDate(value) {
        this.setState({
            focusedDate: value,
        });
    }

    nextMonth() {
        const newMonth = addMonths(this.state.currentMonth, 1);
        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
            nextMonth: addMonths(newMonth, 1),
        });
    }

    previousMonth() {
        const newMonth = addMonths(this.state.currentMonth, -1);
        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
            nextMonth: addMonths(newMonth, 1),
        });
    }

    handleYearChange(event) {
        const year = +event.target.value;
        const newMonth = new Date(this.state.currentMonth);
        newMonth.setFullYear(year);

        const { value } = this.props;
        const focusedDate = getNextFocusedDate(value, newMonth);

        this.setState({
            focusedDate,
            currentMonth: newMonth,
            nextMonth: addMonths(newMonth, 1),
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
        const { currentMonth, nextMonth } = this.state;
        const {
            id,
            value,
            onChange,
            minDate,
            maxDate,
            className,
            style,
            locale,
            variant,
        } = this.props;
        const formattedMonth = getFormattedMonth(currentMonth, locale);
        const formattedNextMonth = getFormattedMonth(nextMonth, locale);
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
            <section id={id} className={className} style={style}>
                <StyledControlsContainer variant={variant}>
                    <StyledMonthContainer variant={variant}>
                        <StyledArrowButton
                            onClick={this.previousMonth}
                            size="medium"
                            disabled={disablePreviousMonth}
                            icon={<LeftIcon />}
                            assistiveText="Previous Month"
                        />

                        <StyledMonth id={this.monthLabelId} data-id="month">
                            {formattedMonth}
                        </StyledMonth>

                        <RenderIf isTrue={variant === 'double'}>
                            <StyledMonth id={this.nextMonthLabelId} data-id="month">
                                {formattedNextMonth}
                            </StyledMonth>
                        </RenderIf>

                        <StyledArrowButton
                            onClick={this.nextMonth}
                            size="medium"
                            disabled={disableNextMonth}
                            icon={<RightIcon />}
                            assistiveText="Next Month"
                        />
                    </StyledMonthContainer>
                    <Select
                        label="select year"
                        hideLabel
                        value={currentYear}
                        options={yearsRange}
                        onChange={this.handleYearChange}
                    />
                </StyledControlsContainer>
                <StyledCalendarContainer variant={variant}>
                    <Provider value={this.getContext()}>
                        <CalendarMonth
                            monthLabelId={this.monthLabelId}
                            value={value}
                            month={currentMonth}
                            onChange={onChange}
                            minDate={minDate}
                            maxDate={maxDate}
                            locale={locale}
                        />
                        <RenderIf isTrue={variant === 'double'}>
                            <CalendarMonth
                                monthLabelId={this.nextMonthLabelId}
                                month={nextMonth}
                                onChange={onChange}
                                minDate={minDate}
                                maxDate={maxDate}
                                locale={locale}
                            />
                        </RenderIf>
                    </Provider>
                </StyledCalendarContainer>
            </section>
        );
    }
}

/**
 * Calendar provide a simple way to select a single date.
 */
export default function Calendar({ locale, ...rest }) {
    return (
        <Consumer>
            {values => <CalendarComponent locale={getLocale(values, locale)} {...rest} />}
        </Consumer>
    );
}

export { CalendarComponent as Component };

Calendar.propTypes = {
    /** Sets the date for the Calendar programmatically. */
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The component locale. If the locale is not passed, it defaults to the context language, and if the context language is not passed, it will default to the browser's language. */
    locale: PropTypes.string,
    /** The component variant. Defaults to 'single' */
    variant: PropTypes.oneOf(['single', 'double']),
};

Calendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    locale: undefined,
    variant: 'single',
};
