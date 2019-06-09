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
    addMonths,
    formatDate,
    getFirstDayMonth,
    getFormattedMonth,
    getLastDayMonth,
    getYearsRange,
} from './helpers';
import './styles.css';

/**
 * Calendar provide a simple way to select a single date.
 */
export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: getFirstDayMonth(normalizeDate(props.value)),
        };
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { value: prevValue } = prevProps;
        const { value } = this.props;
        const normalizedDate = normalizeDate(value);
        if (formatDate(normalizeDate(prevValue)) !== formatDate(normalizedDate)) {
            this.updateCurrentMonth(normalizedDate);
        }
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

    render() {
        const { currentMonth } = this.state;
        const { onChange, value, minDate, maxDate, className, style } = this.props;
        const formattedMonth = getFormattedMonth(currentMonth);
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
            <section className={className} style={style}>
                <div className="rainbow-calendar_controls-container">
                    <div className="rainbow-calendar_month-container">
                        <ButtonIcon
                            onClick={this.previousMonth}
                            size="medium"
                            disabled={disablePreviousMonth}
                            icon={<LeftIcon />}
                            assistiveText="Previous Month"
                        />

                        <h3 className="rainbow-calendar_month-text" id="month">
                            {formattedMonth}
                        </h3>

                        <ButtonIcon
                            onClick={this.nextMonth}
                            size="medium"
                            disabled={disableNextMonth}
                            icon={<RightIcon />}
                            assistiveText="Next Month"
                        />
                    </div>
                    <Select
                        label="select year"
                        hideLabel
                        className="rainbow-calendar_select-year"
                        value={currentYear}
                        options={yearsRange}
                        onChange={this.handleYearChange}
                    />
                </div>
                <table role="grid" aria-labelledby="month">
                    <DaysOfWeek />
                    <Month
                        value={value}
                        firstDayMonth={currentMonth}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={onChange}
                    />
                </table>
            </section>
        );
    }
}

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
};

Calendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
