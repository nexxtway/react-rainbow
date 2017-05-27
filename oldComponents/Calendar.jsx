import React from 'react';
import classnames from 'classnames';
import IconSvg from './Icon.jsx';
import moment from 'moment';
import { getCalendarDays, getFirstDayOfTheMonth } from './libs/dateUtils';
import uniqueId from './libs/uniqueId';

export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            month: props.startWithMonth
        }
    }

    render() {
        let selectUniqueId = uniqueId('select');
        let currentYear = moment(this.state.month).format('YYYY');

        return (
                <div className="slds-datepicker"  aria-hidden="false">
                    <div className="slds-datepicker__filter slds-grid">
                        {/* months picker */}
                        <div className="slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-grow">
                            <div className="slds-align-middle">
                                <button className="slds-button slds-button--icon-container"
                                        onClick={ () => this.previousMonth() }
                                        title="Previous Month">
                                    <IconSvg iconName="utility:left" iconSize="x-small"/>
                                    <span className="slds-assistive-text">Previous Month</span>
                                </button>
                            </div>
                            <h2 id="month" className="slds-align-middle" aria-live="assertive" aria-atomic="true">
                                { moment(this.state.month).format('MMMM') }
                            </h2>
                            <button className="slds-button slds-button--icon-container"
                                    onClick={ () => this.nextMonth() }
                                    title="Next Month">
                                <IconSvg iconName="utility:right" iconSize="x-small"/>
                                <span className="slds-assistive-text">Next Month</span>
                            </button>
                        </div>
                        {/* year picker */}
                        <div className="slds-shrink-none">
                            <label className="slds-assistive-text" htmlFor={ selectUniqueId }>Pick a Year</label>
                            <div className="slds-select_container">
                                <select id={ selectUniqueId }
                                        className="slds-select"
                                        value={ currentYear }
                                        onChange={ (e) => this.setYear(e.target.value) }>
                                    { this.renderYears() }
                                </select>
                            </div>
                        </div>
                    </div>

                    <table className="slds-datepicker__month" role="grid" aria-labelledby="month">
                        <thead>
                        <tr id="weekdays">
                            <th id="Sunday" scope="col">
                                <abbr title="Sunday">Sun</abbr>
                            </th>
                            <th id="Monday" scope="col">
                                <abbr title="Monday">Mon</abbr>
                            </th>
                            <th id="Tuesday" scope="col">
                                <abbr title="Tuesday">Tue</abbr>
                            </th>
                            <th id="Wednesday" scope="col">
                                <abbr title="Wednesday">Wed</abbr>
                            </th>
                            <th id="Thursday" scope="col">
                                <abbr title="Thursday">Thu</abbr>
                            </th>
                            <th id="Friday" scope="col">
                                <abbr title="Friday">Fri</abbr>
                            </th>
                            <th id="Saturday" scope="col">
                                <abbr title="Saturday">Sat</abbr>
                            </th>
                        </tr>
                        </thead>
                        { this.renderCalendarBody() }
                    </table>
                </div>
        );
    }
    renderCalendarBody() {
        let calendarDays = getCalendarDays(this.state.month);
        let rows = calendarDays.length / 7;
        let calendarBody = [];

        for (let i = 0; i < rows; i+=1) {
            let rowClasses = classnames({
                'slds-has-multi-row-selection': this.hasACellSelected(i, calendarDays)
            });
            calendarBody.push(
                <tr key={i} className={ rowClasses } id={ `week${i}` }>
                    { this.renderDaysOfRow(i, calendarDays) }
                </tr>
            );
        }
        
        return (
            <tbody>
                { calendarBody }
            </tbody>
        )
    }

    hasACellSelected(row, calendarDays) {
        let index = row * 7;
        for (let i = index; i < index + 7; i+=1) {
            if (this.isSelected(calendarDays[i])) {
                return true;
                break;
            }
        }
        return false;
    }

    renderDaysOfRow(row, calendarDays) {
        let days = [];
        for (let i = 0; i < 7; i+=1) {
            let index = row * 7 + i;
            let cellClasses = this.getCellClasses(calendarDays[index]);
            days.push(
                <td className={ cellClasses } key={ index }
                    role="gridcell"
                    onClick={ () => { this.props.onDayClick && this.props.onDayClick(calendarDays[index]) }}>
                    <span className="slds-day">{ this.renderDay(calendarDays[index]) }</span>
                </td>
            );
        }
        return days;
    }

    renderDay(date) {
        return moment(date).format('DD');
    }

    getCellClasses (date) {
        let isSelected = this.isSelected(date);
        return classnames({
            'slds-disabled-text': this.isAdjacentDay(date) && !isSelected,
            'slds-is-selected' : isSelected,
            'slds-is-selected-multi': isSelected
        });
    }

    isSelected(date) {
        return this.props.selectedDays.some((day) => {
            return moment(date).format('MM-DD-YYYY') === moment(day).format('MM-DD-YYYY');
        });
    }

    isAdjacentDay(date) {
        return moment(this.state.month).format('MM') !==  moment(date).format('MM');
    }

    nextMonth () {
        this.setState({
            month: moment(this.state.month).add(1, 'months')
        });
    }

    previousMonth () {
        this.setState({
            month: moment(this.state.month).subtract(1, 'months')
        });
    }

    setYear(year) {
        this.setState({ month : moment(this.state.month).set('year', year).toDate() })
    }

    renderYears() {
        let years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020];

        return years.map((year) => {
            return <option value={ year } key={ year }>{ year }</option>;
        })
    }
}

Calendar.propTypes= {
    startWithMonth: React.PropTypes.object,
    selectedDays: React.PropTypes.array,
    isRangeSelection: React.PropTypes.bool
};

Calendar.defaultProps = {
    startWithMont: getFirstDayOfTheMonth(new Date()),
    selectedDays: [],
    onDayClick: React.PropTypes.func,
    isRangeSelection: false
};


