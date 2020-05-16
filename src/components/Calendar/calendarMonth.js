/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DaysOfWeek from './daysOfWeek';
import Month from './month';
import StyledTable from './styled/table';

function CalendarMonth(props) {
    const { locale, value, month, minDate, maxDate, onChange, monthLabelId } = props;

    return (
        <div>
            <StyledTable role="grid" aria-labelledby={monthLabelId}>
                <DaysOfWeek locale={locale} />
                <Month
                    value={value}
                    firstDayMonth={month}
                    minDate={minDate}
                    maxDate={maxDate}
                    onChange={onChange}
                />
            </StyledTable>
        </div>
    );
}

export default CalendarMonth;

CalendarMonth.propTypes = {
    value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
    month: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    locale: PropTypes.string,
    monthLabelId: PropTypes.string,
};

CalendarMonth.defaultProps = {
    value: undefined,
    month: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    locale: undefined,
    monthLabelId: undefined,
};
