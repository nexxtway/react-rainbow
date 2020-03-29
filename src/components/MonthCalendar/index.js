import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useLocale } from '../../libs/hooks';
import {
    normalizeDate,
    getFirstDayMonth,
    getFormattedMonth,
    getYearsRange,
    getLastDayMonth,
    addMonths,
} from '../Calendar/helpers';
import { Provider } from './context';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledArrowButton from './styled/arrowButton';
import StyledMonth from './styled/month';
import StyledTable from './styled/table';

export default function MonthCalendar(props) {
    const {
        id,
        className,
        style,
        minDate,
        maxDate,
        selectedDate,
        locale,
        onSelectDate,
        onMonthChanged,
        dateComponent,
    } = props;
    const monthLabelId = useUniqueIdentifier('month');
    const currentLocale = useLocale(locale);
    const [currentMonth, setCurrentMonth] = useState(getFirstDayMonth(normalizeDate(selectedDate)));
    const currentYear = currentMonth.getFullYear();
    const yearsRange = useMemo(
        () =>
            getYearsRange({
                minDate,
                maxDate,
                currentMonth: currentMonth.getMonth(),
            }),
        [minDate, maxDate, currentMonth],
    );
    const formattedMonth = useMemo(() => getFormattedMonth(currentMonth, currentLocale), [
        currentLocale,
        currentMonth,
    ]);

    useEffect(() => {
        setCurrentMonth(getFirstDayMonth(normalizeDate(selectedDate)));
    }, [selectedDate]);

    const lastYearItem = yearsRange[yearsRange.length - 1];
    const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    const disableNextMonth = addMonths(currentMonth, 1) > maxSelectableDate;
    const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    const prevDate = useMemo(() => getLastDayMonth(addMonths(currentMonth, -1)), [currentMonth]);
    const disablePreviousMonth = prevDate < minSelectableDate;

    const selectPreviousMonth = () => {
        const newMonth = addMonths(currentMonth, -1);
        setCurrentMonth(newMonth);
        return onMonthChanged(newMonth);
    };

    const selectNextMonth = () => {
        const newMonth = addMonths(currentMonth, 1);
        setCurrentMonth(newMonth);
        return onMonthChanged(newMonth);
    };

    const handleYearChange = event => {
        const year = +event.target.value;
        const newMonth = new Date(currentMonth);
        newMonth.setFullYear(year);
        setCurrentMonth(newMonth);
        return onMonthChanged(newMonth);
    };

    return (
        <section id={id} className={className} style={style}>
            <StyledControlsContainer>
                <StyledMonthContainer>
                    <StyledArrowButton
                        onClick={selectPreviousMonth}
                        icon={<LeftIcon />}
                        shaded
                        disabled={disablePreviousMonth}
                        variant="border-filled"
                        assistiveText="Previous Month"
                    />
                    <StyledMonth id={monthLabelId} data-id="month">
                        {formattedMonth}
                    </StyledMonth>
                    <StyledArrowButton
                        onClick={selectNextMonth}
                        icon={<RightIcon />}
                        shaded
                        disabled={disableNextMonth}
                        variant="border-filled"
                        assistiveText="Next Month"
                    />
                </StyledMonthContainer>
                <Select
                    hideLabel
                    value={currentYear}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </StyledControlsContainer>
            <StyledTable role="grid" aria-labelledby={monthLabelId}>
                <DaysOfWeek locale={locale} />
                <Provider value={{ dateComponent }}>
                    <Month
                        selectedDate={selectedDate}
                        firstDayMonth={currentMonth}
                        minDate={minDate}
                        maxDate={maxDate}
                        onSelectDate={onSelectDate}
                    />
                </Provider>
            </StyledTable>
        </section>
    );
}

MonthCalendar.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The MonthCalendar locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** Sets the date for the MonthCalendar programmatically. */
    selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** Function triggered when a day is clicked */
    onSelectDate: PropTypes.func,
    /** Function triggered when month is changed */
    onMonthChanged: PropTypes.func,
    /** A render function that takes a date and returns a
     * react component that renders the content of the cell
     */
    dateComponent: PropTypes.func,
};

MonthCalendar.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    locale: undefined,
    selectedDate: undefined,
    minDate: undefined,
    maxDate: undefined,
    dateComponent: undefined,
    onSelectDate: () => {},
    onMonthChanged: () => {},
};
