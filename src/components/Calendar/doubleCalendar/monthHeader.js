import React from 'react';
import PropTypes from 'prop-types';
import { useFormattedMonth } from './hooks';
import StyledHeaderContainer from './styled/headerContainer';
import StyledMonth from './styled/month';
import YearSelect from './yearSelect';

export default function MonthHeader(props) {
    const { id, month, locale, currentYear, yearsRange, onYearChange } = props;
    const formattedLabel = useFormattedMonth(month, locale);

    return (
        <StyledHeaderContainer>
            <StyledMonth id={id} data-id="month">
                {formattedLabel}
            </StyledMonth>
            <YearSelect
                currentYear={currentYear}
                yearsRange={yearsRange}
                onYearChange={onYearChange}
            />
        </StyledHeaderContainer>
    );
}

MonthHeader.propTypes = {
    id: PropTypes.string,
    month: PropTypes.instanceOf(Date),
    currentYear: PropTypes.number,
    yearsRange: PropTypes.arrayOf(PropTypes.object),
    onYearChange: PropTypes.func,
    locale: PropTypes.string,
};

MonthHeader.defaultProps = {
    id: undefined,
    month: undefined,
    currentYear: undefined,
    yearsRange: undefined,
    onYearChange: () => {},
    locale: undefined,
};
