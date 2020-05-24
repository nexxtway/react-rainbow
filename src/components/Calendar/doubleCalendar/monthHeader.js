import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeaderContainer, StyledMonth } from './styled';
import YearSelect from './yearSelect';

export default function MonthHeader(props) {
    const { id, label, currentYear, yearsRange, onYearChange } = props;

    return (
        <StyledHeaderContainer>
            <StyledMonth id={id} data-id="month">
                {label}
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
    label: PropTypes.string,
    currentYear: PropTypes.number,
    yearsRange: PropTypes.arrayOf(PropTypes.object),
    onYearChange: PropTypes.func,
};

MonthHeader.defaultProps = {
    id: undefined,
    label: undefined,
    currentYear: undefined,
    yearsRange: undefined,
    onYearChange: () => {},
};
