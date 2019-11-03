/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './../Select';
import ButtonIcon from './../ButtonIcon';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
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
    compareDates,
} from './helpers';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledMonth from './styled/month';
import {
    UP_KEY,
    DOWN_KEY,
    RIGHT_KEY,
    LEFT_KEY,
    HOME_KEY,
    END_KEY,
    PAGEUP_KEY,
    PAGEDN_KEY,
} from '../../libs/constants';
import { uniqueId, getLocale } from '../../libs/utils';
import { Consumer } from '../Application/context';
import { Provider } from './context';
import isSameDay from './helpers/isSameDay';

/**
 * Calendar provide a simple way to select a single date.
 */
class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedDate: undefined,
            currentMonth: getFirstDayMonth(normalizeDate(props.value)),
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
        };
        this.keyHandlerMapAlt = {
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
        }
    }

    onDayFocus(day) {
        const { focusedDate } = this.state;
        this.enableNavKeys = true;
        if (!isSameDay(focusedDate, day)) {
            this.setState({ focusedDate: normalizeDate(day) });
        }
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
        const { minDate, maxDate } = this.props;
        const { currentMonth, focusedDate } = this.state;
        let nextFocusedDate = addDays(focusedDate, increment);
        let nextFocusedMonth = currentMonth;

        if (nextFocusedDate.getMonth() !== currentMonth.getMonth()) {
            nextFocusedMonth = getFirstDayMonth(addMonths(currentMonth, Math.sign(increment)));
        }

        if (minDate && compareDates(nextFocusedDate, minDate) < 0) {
            nextFocusedDate = minDate;
            nextFocusedMonth = getFirstDayMonth(minDate);
        } else if (maxDate && compareDates(nextFocusedDate, maxDate) > 0) {
            nextFocusedDate = maxDate;
            nextFocusedMonth = getFirstDayMonth(maxDate);
        }

        this.setState({
            focusedDate: nextFocusedDate,
            currentMonth: nextFocusedMonth,
        });
    }

    moveFocusedMonth(increment) {
        const { minDate, maxDate } = this.props;
        const { focusedDate } = this.state;
        let nextFocusedDate = addMonths(focusedDate, increment);

        if (minDate && compareDates(nextFocusedDate, minDate) < 0) {
            nextFocusedDate = minDate;
        } else if (maxDate && compareDates(nextFocusedDate, maxDate) > 0) {
            nextFocusedDate = maxDate;
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

    nextMonth() {
        this.setState({
            currentMonth: addMonths(this.state.currentMonth, 1),
        });
    }

    previousMonth() {
        this.setState({
            currentMonth: addMonths(this.state.currentMonth, -1),
        });
    }

    handleYearChange(event) {
        const year = +event.target.value;
        const newMonth = new Date(this.state.currentMonth);
        newMonth.setFullYear(year);
        this.setState({
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
        const diff = 6 - focusedDate.getDay();
        this.moveFocusedDay(diff);
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

    render() {
        const { currentMonth } = this.state;
        const { id, onChange, value, minDate, maxDate, className, style, locale } = this.props;
        const formattedMonth = getFormattedMonth(currentMonth, locale);
        const currentYear = currentMonth.getFullYear();
        const yearsRange = getYearsRange({
            minDate,
            maxDate,
            currentMonth: currentMonth.getMonth(),
        });
        const lastYearItem = yearsRange[yearsRange.length - 1];
        const maxSelectableDate = maxDate || new Date(lastYearItem.value + 1, 0, 1);
        const disableNextMonth = addMonths(currentMonth, 1) > maxSelectableDate;
        const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
        const prevDate = getLastDayMonth(addMonths(currentMonth, -1));
        const disablePreviousMonth = prevDate < minSelectableDate;

        return (
            <section id={id} className={className} style={style}>
                <StyledControlsContainer>
                    <StyledMonthContainer>
                        <ButtonIcon
                            onClick={this.previousMonth}
                            size="medium"
                            disabled={disablePreviousMonth}
                            icon={<LeftIcon />}
                            assistiveText="Previous Month"
                        />

                        <StyledMonth id={this.monthLabelId} data-id="month">
                            {formattedMonth}
                        </StyledMonth>

                        <ButtonIcon
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
                <table role="grid" aria-labelledby={this.monthLabelId}>
                    <DaysOfWeek locale={locale} />
                    <Provider value={this.getContext()}>
                        <Month
                            value={value}
                            firstDayMonth={currentMonth}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={onChange}
                        />
                    </Provider>
                </table>
            </section>
        );
    }
}

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
    /** The Calendar locale. Defaults to browser's language. */
    locale: PropTypes.string,
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
};
