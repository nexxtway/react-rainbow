import { useMemo, useCallback } from 'react';
import {
    UP_KEY,
    DOWN_KEY,
    RIGHT_KEY,
    LEFT_KEY,
    HOME_KEY,
    END_KEY,
    PAGEUP_KEY,
    PAGEDN_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../../libs/constants';
import { isSameMonth, addMonths } from '../../helpers';
import useMoveFocusedDay from './useMoveFocusedDay';
import useMoveFocusedMonth from './useMoveFocusedMonth';

export default function useHandleKeyDown(
    focusedDate,
    currentMonth,
    rightCalendarMonth,
    minDate,
    maxDate,
    onChange,
    enableNavKeys,
    setFocusedDate,
    setCurrentMonth,
) {
    const moveFocusedDay = useMoveFocusedDay(focusedDate, currentMonth, minDate, maxDate);
    const moveFocusedMonth = useMoveFocusedMonth(focusedDate, minDate, maxDate);

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: () => {
                const result = moveFocusedDay(-7);
                setFocusedDate(result.day);
            },
            [DOWN_KEY]: () => {
                const result = moveFocusedDay(7);
                setFocusedDate(result.day);
            },
            [LEFT_KEY]: () => {
                const result = moveFocusedDay(-1);
                setFocusedDate(result.day);
            },
            [RIGHT_KEY]: () => {
                const result = moveFocusedDay(1);
                setFocusedDate(result.day);
            },
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-1);
                setFocusedDate(result.day);
                if (
                    !isSameMonth(result.month, rightCalendarMonth) &&
                    !isSameMonth(result.month, currentMonth)
                ) {
                    setCurrentMonth(result.month);
                }
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(1);
                setFocusedDate(result.day);
                if (
                    !isSameMonth(result.month, rightCalendarMonth) &&
                    !isSameMonth(result.month, currentMonth)
                ) {
                    setCurrentMonth(rightCalendarMonth);
                }
            },
            [SPACE_KEY]: () => onChange(new Date(focusedDate)),
            [ENTER_KEY]: () => onChange(new Date(focusedDate)),
        }),
        [
            currentMonth,
            focusedDate,
            moveFocusedDay,
            moveFocusedMonth,
            onChange,
            rightCalendarMonth,
            setCurrentMonth,
            setFocusedDate,
        ],
    );

    const keyHandlerMapAlt = useMemo(
        () => ({
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-12);
                setFocusedDate(result.day);
                if (isSameMonth(result.month, rightCalendarMonth)) {
                    setCurrentMonth(addMonths(result.month, -1));
                } else {
                    setCurrentMonth(result.month);
                }
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(12);
                setFocusedDate(result.day);
                if (isSameMonth(result.month, rightCalendarMonth)) {
                    setCurrentMonth(addMonths(result.month, -1));
                } else {
                    setCurrentMonth(result.month);
                }
            },
        }),
        [
            focusedDate,
            moveFocusedDay,
            moveFocusedMonth,
            rightCalendarMonth,
            setCurrentMonth,
            setFocusedDate,
        ],
    );

    return useCallback(
        event => {
            if (enableNavKeys) {
                const { keyCode, altKey } = event;
                const keyHandler = altKey ? keyHandlerMapAlt : keyHandlerMap;
                if (keyHandler[keyCode]) {
                    event.preventDefault();
                    event.stopPropagation();
                    keyHandler[keyCode]();
                }
            }
        },
        [enableNavKeys, keyHandlerMap, keyHandlerMapAlt],
    );
}
