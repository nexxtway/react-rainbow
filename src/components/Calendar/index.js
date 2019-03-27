import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './../Select';
import ButtonIcon from './../ButtonIcon';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import getFirstDayMonth from './helpers/get-first-day-month';
import getLastDayMonth from './helpers/get-last-day-month';
import addMonths from './helpers/addMonths';
import getYearsRange from './helpers/get-years-range';
import getFormattedMonth from './helpers/get-formatted-month';
import './styles.css';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        const {
            value,
        } = props;
        const today = new Date();
        this.state = {
            currentMonth: getFirstDayMonth(value || today),
        };
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
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
        const {
            currentMonth,
        } = this.state;
        const {
            onChange,
            value,
            minDate,
            maxDate,
            className,
            style,
        } = this.props;
        const formattedMonth = getFormattedMonth(currentMonth);
        const currentYear = this.state.currentMonth.getFullYear();
        const disableNextMonth = addMonths(currentMonth, 1) > maxDate;
        const disablePreviousMonth = getLastDayMonth(addMonths(currentMonth, -1)) < minDate;
        const yearsRange = getYearsRange({ minDate, maxDate });

        return (
            <section className={className} style={style}>
                <div className="rainbow-calendar_controls-container">
                    <div className="rainbow-calendar_month-container">
                        <ButtonIcon
                            onClick={this.previousMonth}
                            size="medium"
                            disabled={disablePreviousMonth}
                            icon={<LeftIcon />} />
                        <h3 className="rainbow-calendar_month-text">
                            {formattedMonth}
                        </h3>
                        <ButtonIcon
                            onClick={this.nextMonth}
                            size="medium"
                            disabled={disableNextMonth}
                            icon={<RightIcon />} />
                    </div>
                    <Select
                        label="select year"
                        hideLabel
                        className="rainbow-calendar_select-year"
                        value={currentYear}
                        options={yearsRange}
                        onChange={this.handleYearChange} />
                </div>
                <table>
                    <DaysOfWeek />
                    <Month
                        value={value}
                        firstDayMonth={this.state.currentMonth}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChange={onChange} />
                </table>
            </section>
        );
    }
}

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
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
