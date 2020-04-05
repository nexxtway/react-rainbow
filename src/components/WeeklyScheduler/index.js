import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useLocale } from '../../libs/hooks';
import { useYearRange } from './hooks';
import { normalizeDate } from '../Calendar/helpers';
import { getFirstDayOfWeek, getFormattedWeek, addWeeks } from './helpers';
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

export default function WeeklyScheduler(props) {
    const { events, date, minDate, maxDate, locale: localLocale, className, style } = props;
    const locale = useLocale(localLocale);
    const hoursRef = useRef();
    const daysRef = useRef();
    const [currentWeek, setCurrentWeek] = useState(getFirstDayOfWeek(normalizeDate(date)));
    const formattedWeek = getFormattedWeek(currentWeek, locale);
    const yearsRange = useYearRange(minDate, maxDate, currentWeek);
    const lastYearItem = yearsRange[yearsRange.length - 1];
    const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    const disableNext = addWeeks(currentWeek, 1) > maxSelectableDate;
    const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    const prevDate = addWeeks(currentWeek, -1);
    const disablePrevious = prevDate.setDate(prevDate.getDate() + 6) < minSelectableDate;

    const handleYearChange = event => {
        const newWeek = new Date(currentWeek);
        newWeek.setFullYear(event.target.value);
        setCurrentWeek(newWeek);
    };

    const handlerScroll = event => {
        hoursRef.current.scrollTop = event.target.scrollTop;
        daysRef.current.scrollLeft = event.target.scrollLeft;
    };

    return (
        <StyledContainer className={className} style={style}>
            <StyledControls>
                <div>
                    <StyledArrowButton
                        onClick={() => setCurrentWeek(addWeeks(currentWeek, -1))}
                        variant="border-filled"
                        size="small"
                        disabled={disablePrevious}
                        icon={<LeftIcon />}
                        assistiveText="Previous Week"
                    />
                    <StyledArrowButton
                        onClick={() => setCurrentWeek(addWeeks(currentWeek, 1))}
                        variant="border-filled"
                        size="small"
                        disabled={disableNext}
                        icon={<RightIcon />}
                        assistiveText="Next Week"
                    />
                    <StyledTitle data-id="week">{formattedWeek}</StyledTitle>
                </div>
                <Select
                    label="select year"
                    hideLabel
                    value={currentWeek.getFullYear()}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </StyledControls>
            <Header currentWeek={currentWeek} locale={locale} ref={daysRef} />
            <StyledContent>
                <Hours locale={locale} ref={hoursRef} />
                <Week
                    currentWeek={currentWeek}
                    events={events}
                    locale={locale}
                    onScroll={handlerScroll}
                />
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
    /** The Calendar locale. Defaults to browser's language. */
    locale: PropTypes.string,
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
    locale: undefined,
    className: undefined,
    style: undefined,
};
