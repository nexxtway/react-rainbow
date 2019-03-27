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
import formatDate from './helpers/format-date';
import getYearsRange from './helpers/get-years-range';
import getFormattedMonth from './helpers/get-formatted-month';

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
            formatStyle,
        } = this.props;
        const formattedDate = formatDate(value, formatStyle);
        const formattedMonth = getFormattedMonth(currentMonth);
        const currentYear = this.state.currentMonth.getFullYear();
        const disableNextMonth = addMonths(currentMonth, 1) > maxDate;
        const disablePreviousMonth = getLastDayMonth(addMonths(currentMonth, -1)) < minDate;
        return (
            <section className="rainbow-date-picker_modal-container">
                <header className="rainbow-date-picker_calendar-details-header">
                    <h2 className="rainbow-date-picker_calendar-date--selected">
                        {formattedDate}
                    </h2>
                </header>
                <article className="rainbow-date-picker_calendar-container">
                    <div className="rainbow-date-picker_calendar-controls-container">
                        <div className="rainbow-date-picker_calendar-month-container">
                            <ButtonIcon
                                onClick={() => this.previousMonth()}
                                size="medium"
                                disabled={disablePreviousMonth}
                                icon={<LeftIcon />} />
                            <h3 className="rainbow-date-picker_calendar-month-text">
                                {formattedMonth}
                            </h3>
                            <ButtonIcon
                                onClick={() => this.nextMonth()}
                                size="medium"
                                disabled={disableNextMonth}
                                icon={<RightIcon />} />
                        </div>
                        <Select
                            className="rainbow-date-picker_calendar-select-year"
                            value={currentYear}
                            options={getYearsRange({ minDate, maxDate })}
                            onChange={event => this.handleYearChange(event)}
                        />
                    </div>
                    <table>
                        <DaysOfWeek />
                        <Month value={value}
                            firstDayMonth={this.state.currentMonth}
                            minDate={minDate}
                            maxDate={maxDate}
                            onChange={onChange} />
                    </table>
                </article>
            </section>
        );
    }
}

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    onChange: PropTypes.func,
};

Calendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
    onChange: () => {},
};
