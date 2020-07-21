import React, { useRef, useState, useMemo, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { RIGHT_KEY, LEFT_KEY } from '../../../../libs/constants';
import Select from '../../Select';
import RightIcon from '../icons/rightArrow';
import LeftIcon from '../icons/leftArrow';
import StyledControlsContainer from '../styled/controlsContainer';
import StyledMonthContainer from '../styled/monthContainer';
import StyledMonth from '../styled/month';
import StyledArrowButton from '../styled/arrowButton';

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

    const [enableNavKeys, setEnableNavKeys] = useState(false);
    const refs = [useRef(), useRef(), useRef()];
    const [focusedItemIndex, setFocusedItemIndex] = useState(-1);

    const handlePrevMonthClick = useCallback(() => {
        onPrevMonthClick();
        setFocusedItemIndex(0);
    }, [onPrevMonthClick]);

    const handleNextMonthClick = useCallback(() => {
        onNextMonthClick();
        setFocusedItemIndex(1);
    }, [onNextMonthClick]);

    const handleYearSelectClick = useCallback(() => {
        setFocusedItemIndex(2);
    }, []);

    const keyHandlerMap = useMemo(
        () => ({
            [LEFT_KEY]: () => {
                const delta = disableNextMonth ? 2 : 1;
                const firstIndx = disablePreviousMonth ? 1 : 0;
                setFocusedItemIndex(Math.max(focusedItemIndex - delta, firstIndx));
            },
            [RIGHT_KEY]: () => {
                const delta = disableNextMonth ? 2 : 1;
                setFocusedItemIndex(Math.min(focusedItemIndex + delta, refs.length - 1));
            },
        }),
        [disableNextMonth, disablePreviousMonth, focusedItemIndex, refs.length],
    );

    const handleKeyDown = useCallback(
        event => {
            if (disableNextMonth && disablePreviousMonth) return;
            if (enableNavKeys) {
                const { keyCode } = event;
                if (keyHandlerMap[keyCode]) {
                    event.preventDefault();
                    event.stopPropagation();
                    keyHandlerMap[keyCode]();
                }
            }
        },
        [enableNavKeys, keyHandlerMap, disableNextMonth, disablePreviousMonth],
    );

    const handleOnFocus = useCallback(index => {
        setFocusedItemIndex(index);
        setEnableNavKeys(true);
    }, []);

    const handleOnBlur = useCallback(() => {
        setEnableNavKeys(false);
    }, []);

    useEffect(() => {
        if (enableNavKeys && refs[focusedItemIndex].current) {
            refs[focusedItemIndex].current.focus();
        }
    }, [enableNavKeys, focusedItemIndex, refs]);

    return (
        <StyledControlsContainer>
            <StyledMonthContainer>
                <StyledArrowButton
                    ref={refs[0]}
                    onClick={handlePrevMonthClick}
                    size="medium"
                    disabled={disablePreviousMonth}
                    icon={<LeftIcon />}
                    assistiveText="Previous Month"
                    onKeyDown={handleKeyDown}
                    onFocus={() => handleOnFocus(0)}
                    onBlur={handleOnBlur}
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
                    onKeyDown={handleKeyDown}
                    onFocus={() => handleOnFocus(1)}
                    onBlur={handleOnBlur}
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
                onKeyDown={handleKeyDown}
                onFocus={() => handleOnFocus(2)}
                onBlur={handleOnBlur}
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
