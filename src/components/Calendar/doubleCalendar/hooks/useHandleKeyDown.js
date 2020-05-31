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

    const shouldUpdateCurrentMonth = useCallback(
        value => {
            if (isSameMonth(value, rightCalendarMonth) || isSameMonth(value, currentMonth))
                return false;
            return true;
        },
        [currentMonth, rightCalendarMonth],
    );

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: () => {
                const result = moveFocusedDay(-7);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [DOWN_KEY]: () => {
                const result = moveFocusedDay(7);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [LEFT_KEY]: () => {
                const result = moveFocusedDay(-1);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [RIGHT_KEY]: () => {
                const result = moveFocusedDay(1);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-1);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.month)) {
                    setCurrentMonth(result.month);
                }
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(1);
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.month)) {
                    setCurrentMonth(rightCalendarMonth);
                }
            },
            [SPACE_KEY]: () => onChange(new Date(focusedDate)),
            [ENTER_KEY]: () => onChange(new Date(focusedDate)),
        }),
        [
            focusedDate,
            moveFocusedDay,
            moveFocusedMonth,
            onChange,
            rightCalendarMonth,
            setCurrentMonth,
            setFocusedDate,
            shouldUpdateCurrentMonth,
        ],
    );

    const keyHandlerMapAlt = useMemo(
        () => ({
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                setFocusedDate(result.day);
                if (shouldUpdateCurrentMonth(result.day)) {
                    setCurrentMonth(result.month);
                }
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
            shouldUpdateCurrentMonth,
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
