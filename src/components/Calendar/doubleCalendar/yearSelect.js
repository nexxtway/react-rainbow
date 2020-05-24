import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledSelect } from './styled';

export default function YearSelect(props) {
    const { currentYear, yearsRange, onYearChange } = props;
    const selectRef = useRef(null);

    const handleYearChange = useCallback(
        value => {
            selectRef.current.blur();
            onYearChange(value);
        },
        [onYearChange],
    );

    return (
        <StyledSelect
            ref={selectRef}
            label="select year"
            hideLabel
            value={currentYear}
            options={yearsRange}
            onChange={handleYearChange}
        />
    );
}

YearSelect.propTypes = {
    currentYear: PropTypes.number,
    yearsRange: PropTypes.arrayOf(PropTypes.object),
    onYearChange: PropTypes.func,
};

YearSelect.defaultProps = {
    currentYear: undefined,
    yearsRange: undefined,
    onYearChange: () => {},
};
