import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './../Select';
import ButtonIcon from './../ButtonIcon';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import getFirstDayMonth from './helpers/get-first-day-month';
import addMonths from './helpers/addMonths';

const options = [
    { value: '2018', label: '2018' },
    { value: '2019', label: '2019' },
    { value: '2020', label: '2020' },
];

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

    render() {
        const {
            currentMonth,
        } = this.state;
        const { onChange, value } = this.props;
        const formattedMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentMonth);
        return (
            <section className="rainbow-date-picker_modal-container">
                <article className="rainbow-date-picker_calendar-container">
                    <div className="rainbow-date-picker_calendar-month-container">
                        <ButtonIcon
                            onClick={() => this.previousMonth()}
                            size="medium"
                            icon={<LeftIcon />} />
                        <h3 className="rainbow-date-picker_calendar-month-text">
                            {formattedMonth}
                        </h3>
                        <ButtonIcon
                            onClick={() => this.nextMonth()}
                            size="medium"
                            icon={<RightIcon />} />
                    </div>
                    <table>
                        <DaysOfWeek />
                        <Month value={value}
                            firstDayMonth={this.state.currentMonth}
                            onChange={onChange} />
                    </table>
                </article>
                <article className="rainbow-date-picker_calendar-details-container">
                    <div className="rainbow-date-picker_calendar-details-text-container">
                        <h1 className="rainbow-date-picker_calendar-details-day">
                            16
                        </h1>
                        <h2 className="rainbow-date-picker_calendar-details-month">
                            Month
                        </h2>
                    </div>
                    <Select className="rainbow-date-picker_calendar-select-year" options={options} />
                </article>
            </section>
        );
    }
}

Calendar.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
};

Calendar.defaultProps = {
    value: undefined,
    onChange: () => {},
};
