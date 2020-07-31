import React, { useRef, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { HiddenElement } from '../../../Structural';
import { useUniqueIdentifier } from '../../../../libs/hooks';
import Options from './options';
import { StyledContainer, StyledSelect } from './styled';

const YearSelect = React.forwardRef((props, ref) => {
    const { currentYear, yearsRange, onYearChange, onClick, onFocus, onBlur, tabIndex } = props;
    const selectRef = ref || useRef();
    const selectId = useUniqueIdentifier('select');
    const [isEditMode, setEditMode] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleYearChange = useCallback(
        value => {
            selectRef.current.blur();
            onYearChange(value);
        },
        [onYearChange, selectRef],
    );

    const handleMouseEnter = useCallback(() => {
        if (!isFocused) setEditMode(true);
    }, [isFocused]);

    const handleMouseLeave = useCallback(() => {
        if (!isFocused) setEditMode(false);
    }, [isFocused]);

    const handleSelectFocus = useCallback(() => {
        onFocus();
        setIsFocused(true);
    }, [onFocus]);

    const handleSelectBlur = useCallback(() => {
        onBlur();
        setIsFocused(false);
    }, [onBlur]);

    useEffect(() => {
        setEditMode(isFocused);
    }, [isFocused]);

    return (
        <StyledContainer
            editMode={isEditMode}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <HiddenElement as="label" htmlFor={selectId}>
                select year
            </HiddenElement>
            <StyledSelect
                id={selectId}
                ref={selectRef}
                value={currentYear}
                editMode={isEditMode}
                onClick={onClick}
                onChange={handleYearChange}
                onFocus={handleSelectFocus}
                onBlur={handleSelectBlur}
                tabIndex={tabIndex}
            >
                <Options options={yearsRange} />
            </StyledSelect>
        </StyledContainer>
    );
});

YearSelect.propTypes = {
    currentYear: PropTypes.number,
    yearsRange: PropTypes.arrayOf(PropTypes.object),
    onYearChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

YearSelect.defaultProps = {
    currentYear: undefined,
    yearsRange: [],
    onYearChange: () => {},
    onClick: () => {},
    onFocus: () => {},
    onBlur: () => {},
    tabIndex: undefined,
};

export default YearSelect;
