import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from './../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import StyledControls from './styled/controls';
import StyledWeekContainer from './styled/weekContainer';
import StyledWeek from './styled/week';
import StyledArrowButton from './styled/arrowButton';
import DaysOfWeek from './daysOfWeek';
import {
    normalizeDate,
    getFirstDayOfWeek,
    getFormattedWeek,
    getYearsRange,
    addWeeks,
} from './helpers';
import Week from './week';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import Hours from './hours';

export default function WeeklyScheduler(props) {
    const { events, date, minDate, maxDate, onChange, className, style } = props;
    const locale = 'en';
    const [currentWeek, setCurrentWeek] = useState(getFirstDayOfWeek(normalizeDate(date)));
    const formattedWeek = getFormattedWeek(currentWeek, locale);
    const yearsRange = getYearsRange({
        minDate,
        maxDate,
        currentMonth: currentWeek.getMonth(),
    });
    const lastYearItem = yearsRange[yearsRange.length - 1];
    const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    const disableNextMonth = addWeeks(currentWeek, 1) > maxSelectableDate;
    const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    const prevDate = addWeeks(currentWeek, -1);
    const disablePreviousMonth = prevDate.setDate(prevDate.getDate() + 6) < minSelectableDate;

    const handleYearChange = event => {
        const newWeek = new Date(currentWeek);
        newWeek.setFullYear(event.target.value);
        setCurrentWeek(getFirstDayOfWeek(newWeek));
    };

    return (
        <StyledContainer className={className} style={style}>
            <StyledControls>
                <StyledWeekContainer>
                    <StyledArrowButton
                        onClick={() => setCurrentWeek(addWeeks(currentWeek, -1))}
                        size="medium"
                        disabled={disablePreviousMonth}
                        icon={<LeftIcon />}
                        assistiveText="Previous Month"
                    />

                    <StyledWeek data-id="week">{formattedWeek}</StyledWeek>

                    <StyledArrowButton
                        onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}
                        size="medium"
                        disabled={disableNextMonth}
                        icon={<RightIcon />}
                        assistiveText="Next Month"
                    />
                </StyledWeekContainer>
                <Select
                    label="select year"
                    hideLabel
                    value={currentWeek.getFullYear()}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </StyledControls>
            <DaysOfWeek locale={locale} currentWeek={currentWeek} />
            <StyledContent>
                <Hours />
                <Week currentWeek={currentWeek} onChange={onChange} />
            </StyledContent>
        </StyledContainer>
    );
}

WeeklyScheduler.propTypes = {
    /** An array that contains events that should be displayed on the calendar. */
    events: PropTypes.array,
    /** Sets the date for the Calendar programmatically. */
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The action triggered when a events attribute changes. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

WeeklyScheduler.defaultProps = {
    events: [],
    date: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
