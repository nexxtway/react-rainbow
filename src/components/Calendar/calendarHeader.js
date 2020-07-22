import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Select from '../Select';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import StyledControlsContainer from './styled/controlsContainer';
import StyledMonthContainer from './styled/monthContainer';
import StyledMonth from './styled/month';
import StyledArrowButton from './styled/arrowButton';
import useHeaderArrowNav from './hooks/useHeaderArrowNav';

export default function SingleCalendarHeader(props) {
    const {
        monthLabelId,
        currentYear,
        yearsRange,
        formattedMonth,
        disablePreviousMonth,
        disableNextMonth,
        onPrevMonthClick,
        onNextMonthClick,
        onYearChange,
    } = props;

    const refs = [useRef(), useRef(), useRef()];
    const { updateFocusedItem, clearFocusedItems, handleKeyDown } = useHeaderArrowNav({
        disableNextMonth,
        disablePreviousMonth,
        refs,
        delta: disableNextMonth ? 2 : 1,
        firstIndex: disablePreviousMonth ? 1 : 0,
        lastIndex: 2,
    });

    const handlePrevMonthClick = useCallback(() => {
        onPrevMonthClick();
        updateFocusedItem(0);
    }, [onPrevMonthClick, updateFocusedItem]);

    const handleNextMonthClick = useCallback(() => {
        onNextMonthClick();
        updateFocusedItem(1);
    }, [onNextMonthClick, updateFocusedItem]);

    const handleYearSelectClick = useCallback(() => {
        updateFocusedItem(2);
    }, [updateFocusedItem]);

    return (
        <StyledControlsContainer onKeyDown={handleKeyDown}>
            <StyledMonthContainer>
                <StyledArrowButton
                    ref={refs[0]}
                    onClick={handlePrevMonthClick}
                    size="medium"
                    disabled={disablePreviousMonth}
                    icon={<LeftIcon />}
                    assistiveText="Previous Month"
                    onFocus={() => updateFocusedItem(0)}
                    onBlur={clearFocusedItems}
                />

                <StyledMonth id={monthLabelId} data-id="month">
                    {formattedMonth}
                </StyledMonth>

                <StyledArrowButton
                    ref={refs[1]}
                    onClick={handleNextMonthClick}
                    size="medium"
                    tabIndex={disablePreviousMonth ? undefined : -1}
                    disabled={disableNextMonth}
                    icon={<RightIcon />}
                    assistiveText="Next Month"
                    onFocus={() => updateFocusedItem(1)}
                    onBlur={clearFocusedItems}
                />
            </StyledMonthContainer>
            <Select
                ref={refs[2]}
                label="select year"
                hideLabel
                tabIndex={disablePreviousMonth && disableNextMonth ? undefined : -1}
                value={currentYear}
                options={yearsRange}
                onChange={onYearChange}
                onClick={handleYearSelectClick}
                onFocus={() => updateFocusedItem(2)}
                onBlur={clearFocusedItems}
            />
        </StyledControlsContainer>
    );
}

SingleCalendarHeader.propTypes = {
    monthLabelId: PropTypes.string,
    formattedMonth: PropTypes.string,
    currentYear: PropTypes.number,
    yearsRange: PropTypes.array,
    disablePreviousMonth: PropTypes.bool,
    disableNextMonth: PropTypes.bool,
    onPrevMonthClick: PropTypes.func,
    onNextMonthClick: PropTypes.func,
    onYearChange: PropTypes.func,
};

SingleCalendarHeader.defaultProps = {
    monthLabelId: undefined,
    formattedMonth: undefined,
    currentYear: undefined,
    yearsRange: [],
    disablePreviousMonth: false,
    disableNextMonth: false,
    onPrevMonthClick: () => {},
    onNextMonthClick: () => {},
    onYearChange: () => {},
};
