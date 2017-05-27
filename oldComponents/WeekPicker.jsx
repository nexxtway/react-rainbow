import React from 'react';
import moment from 'moment';
import Calendar from './Calendar.jsx';
import Icon from './Icon.jsx';

export default class WeekPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weekRange: this.getWeekRange(this.props.startWithWeek)
        }
    }

    componentDidMount() {
        this.props.onChange && this.props.onChange(this.state.weekRange);
    }

    render() {
        return (
            <fieldset className="slds-form--compound">
                <input type="hidden" value={ this.getFormattedStartDate() } name={ `${ this.props.name}StartDate` }/>
                <input type="hidden" value={ this.getFormattedEndDate() } name={ `${ this.props.name}EndDate` }/>
                <legend className="slds-form-element__label slds-text-title--caps">{ this.props.label }</legend>
                <div className="slds-form-element__group">
                    <div className="slds-form-element__row">
                        <div className="slds-form-element slds-size--1-of-2">
                        <Calendar startWithMonth={ this.props.startWithWeek }
                                  selectedDays={ this.getWeekRangeDays(this.state.weekRange) }
                                  onDayClick={ (date) => this.handleDayClick(date) }/>
                        </div>
                        <div className="slds-form-element slds-size--1-of-2">
                            { this.renderWeekTile() }
                        </div>
                    </div>
                </div>
            </fieldset>
        );
    }

    handleDayClick(date) {
        let newWeekRange = this.getWeekRange(date);

        this.setState({ weekRange: newWeekRange });
        this.props.onChange && this.props.onChange(newWeekRange);
    }

    getWeekRange(date) {
        let weekday = moment(date).weekday();

        return {
            startDate: moment(date).subtract(weekday, 'days').toDate(),
            endDate: moment(date).add(6 - weekday, 'days').toDate()
        }
    }

    getWeekRangeDays(range) {
        let days = [];
        let startDate = moment(range.startDate);
        let endDate = moment(range.endDate);

        while (startDate.isBefore(endDate)) {
            days.push(startDate.toDate());
            startDate.add(1, 'days');
        }
        days.push(endDate.toDate());
        return days;
    }

    getWeekOfYear() {
        return moment(this.state.weekRange.startDate).weeks()
    }

    renderWeekTile() {
        let containerStyles = {
            border: '1px solid #ccc',
            borderRadius: 4,
            padding: 10
        };
        return (
            <div className="slds-tile slds-media" style={ containerStyles }>
                <div className="slds-media__figure">
                    <Icon iconName="standard:event"/>
                </div>
                <div className="slds-media__body">
                    <h3 className="slds-truncate" title="Salesforce UX">
                        <a href="javascript:void(0);">Week of year { this.getWeekOfYear() }</a></h3>
                    <div className="slds-tile__detail slds-text-body--small">
                        <dl className="slds-dl--horizontal">
                            <dt className="slds-dl--horizontal__label">
                                <p className="slds-truncate" title="Company">Start:</p>
                            </dt>
                            <dd className="slds-dl--horizontal__detail slds-tile__meta">
                                <p className="slds-truncate" title={ this.getFormattedStartDate() }>
                                    { this.getFormattedStartDate() }
                                </p>
                            </dd>
                            <dt className="slds-dl--horizontal__label">
                                <p className="slds-truncate" title="Email">End:</p>
                            </dt>
                            <dd className="slds-dl--horizontal__detail slds-tile__meta">
                                <p className="slds-truncate" title={ this.getFormattedEndDate() }>
                                    { this.getFormattedEndDate() }
                                </p>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        )
    }

    getFormattedStartDate() {
        return  moment(this.state.weekRange.startDate).format('MM-DD-YYYY');
    }

    getFormattedEndDate() {
        return moment(this.state.weekRange.endDate).format('MM-DD-YYYY');
    }
}

WeekPicker.PropTypes = {
    startWithWeek: React.PropTypes.object,
    label: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
};
