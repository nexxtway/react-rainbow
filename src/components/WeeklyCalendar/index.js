import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../libs/hooks';
import { useCurrentWeek, useYearRange, useFormattedWeek, useDisabledControls } from './hooks';
import { addWeeks } from './helpers';
import Select from './../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import Header from './header';
import Week from './week';
import Hours from './hours';
import StyledContainer from './styled/container';
import StyledContent from './styled/content';
import StyledControls from './styled/controls';
import StyledTitle from './styled/title';
import StyledArrowButton from './styled/arrowButton';
import StyledGradient from './styled/gradient';

export default function WeeklyCalendar(props) {
    const {
        events,
        currentWeek,
        minDate,
        maxDate,
        locale: localLocale,
        onWeekChange,
        onEventClick,
        className,
        style,
    } = props;
    const locale = useLocale(localLocale);
    const hoursRef = useRef();
    const daysRef = useRef();
    const week = useCurrentWeek(currentWeek);
    const formattedWeek = useFormattedWeek(week, locale);
    const [today, setToday] = useState(new Date());
    const yearsRange = useYearRange(minDate, maxDate, week);
    const [isDisableNext, isDisablePrevious] = useDisabledControls(
        yearsRange,
        week,
        minDate,
        maxDate,
    );

    const selectPreviousWeek = () => {
        const newWeek = addWeeks(week, -1);
        newWeek.setHours(0, 0, 0, 0);
        return onWeekChange({ week: newWeek });
    };

    const selectNextWeek = () => {
        const newWeek = addWeeks(week, 1);
        newWeek.setHours(0, 0, 0, 0);
        return onWeekChange({ week: newWeek });
    };

    const handleYearChange = event => {
        const newWeek = new Date(week);
        newWeek.setFullYear(event.target.value);
        newWeek.setHours(0, 0, 0, 0);
        return onWeekChange({ week: newWeek });
    };

    const handleScroll = event => {
        hoursRef.current.scrollTop = event.target.scrollTop;
        daysRef.current.scrollLeft = event.target.scrollLeft;
    };

    return (
        <StyledContainer className={className} style={style}>
            <StyledControls>
                <div>
                    <StyledArrowButton
                        onClick={selectPreviousWeek}
                        variant="border-filled"
                        size="small"
                        disabled={isDisablePrevious}
                        icon={<LeftIcon />}
                        assistiveText="Previous Week"
                    />
                    <StyledTitle data-id="week">{formattedWeek}</StyledTitle>
                    <StyledArrowButton
                        onClick={selectNextWeek}
                        variant="border-filled"
                        size="small"
                        disabled={isDisableNext}
                        icon={<RightIcon />}
                        assistiveText="Next Week"
                    />
                </div>
                <Select
                    label="select year"
                    hideLabel
                    value={week.getFullYear()}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </StyledControls>
            <Header week={week} locale={locale} today={today} ref={daysRef} />
            <StyledContent>
                <Hours locale={locale} ref={hoursRef} today={today} setToday={setToday} />
                <Week
                    week={week}
                    events={events}
                    locale={locale}
                    onEventClick={onEventClick}
                    onScroll={handleScroll}
                />
            </StyledContent>
            <StyledGradient />
        </StyledContainer>
    );
}

WeeklyCalendar.propTypes = {
    /** An array that contains events that should be displayed on the calendar. */
    events: PropTypes.array,
    /** Sets the date for the Calendar programmatically. */
    currentWeek: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The Calendar locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** Function triggered when week is changed */
    onWeekChange: PropTypes.func,
    /** Function triggered when a event is clicked */
    onEventClick: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

WeeklyCalendar.defaultProps = {
    events: [],
    currentWeek: undefined,
    minDate: undefined,
    maxDate: undefined,
    onWeekChange: () => {},
    onEventClick: () => {},
    locale: undefined,
    className: undefined,
    style: undefined,
};
