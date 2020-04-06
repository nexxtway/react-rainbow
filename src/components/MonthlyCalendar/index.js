import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useUniqueIdentifier, useLocale } from '../../libs/hooks';
import { getLastDayMonth, addMonths } from '../Calendar/helpers';
import { useYearsRange, useCurrentMonth, useFormattedMonth } from './hooks';
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

export default function MonthlyCalendar(props) {
    const {
        id,
        className,
        style,
        minDate,
        maxDate,
        currentMonth,
        selectedDate,
        locale,
        onSelectDate,
        onMonthChange,
        dateComponent,
    } = props;
    const monthLabelId = useUniqueIdentifier('month');
    const currentLocale = useLocale(locale);
    const month = useCurrentMonth(currentMonth, minDate, maxDate);
    const yearsRange = useYearsRange(minDate, maxDate, month);
    const formattedMonth = useFormattedMonth(month, currentLocale);

    const currentYear = month.getFullYear();
    const lastYearItem = yearsRange[yearsRange.length - 1];
    const maxSelectableDate = maxDate || new Date(lastYearItem.value, 11, 31);
    const disableNextMonth = addMonths(month, 1) > maxSelectableDate;
    const minSelectableDate = minDate || new Date(yearsRange[0].value, 0, 1);
    const prevDate = useMemo(() => getLastDayMonth(addMonths(month, -1)), [month]);
    const disablePreviousMonth = prevDate < minSelectableDate;

    const selectPreviousMonth = () => {
        const newMonth = addMonths(month, -1);
        newMonth.setHours(0, 0, 0, 0);
        return onMonthChange({ month: newMonth });
    };

    const selectNextMonth = () => {
        const newMonth = addMonths(month, 1);
        newMonth.setHours(0, 0, 0, 0);
        return onMonthChange({ month: newMonth });
    };

    const handleYearChange = event => {
        const year = +event.target.value;
        const newMonth = new Date(month);
        newMonth.setHours(0, 0, 0, 0);
        newMonth.setFullYear(year);
        return onMonthChange({ month: newMonth });
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
                    label="select year"
                    hideLabel
                    value={currentYear}
                    options={yearsRange}
                    onChange={handleYearChange}
                />
            </StyledControlsContainer>
            <StyledTable role="grid" aria-labelledby={monthLabelId}>
                <DaysOfWeek locale={currentLocale} />
                <Provider value={{ dateComponent }}>
                    <Month
                        selectedDate={selectedDate}
                        firstDayMonth={month}
                        minDate={minDate}
                        maxDate={maxDate}
                        onSelectDate={onSelectDate}
                    />
                </Provider>
            </StyledTable>
        </section>
    );
}

MonthlyCalendar.propTypes = {
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The MonthlyCalendar locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** Sets the current month for the MonthlyCalendar programmatically. */
    currentMonth: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    /** Sets the selected date for the MonthlyCalendar programmatically. */
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
    onMonthChange: PropTypes.func,
    /** A render function that takes a date and returns a
     * react component that renders the content of the cell
     */
    dateComponent: PropTypes.func,
};

MonthlyCalendar.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    locale: undefined,
    currentMonth: undefined,
    selectedDate: undefined,
    minDate: undefined,
    maxDate: undefined,
    dateComponent: undefined,
    onSelectDate: () => {},
    onMonthChange: () => {},
};
