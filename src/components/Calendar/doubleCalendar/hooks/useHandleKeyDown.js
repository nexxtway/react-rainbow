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
import getShouldUpdateCurrentMonth from '../helpers/shouldUpdateCurrentMonth';
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
        value => getShouldUpdateCurrentMonth(value, currentMonth, rightCalendarMonth),
        [currentMonth, rightCalendarMonth],
    );

    const keyHandlerMap = useMemo(
        () => ({
            [UP_KEY]: () => {
                const result = moveFocusedDay(-7);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [DOWN_KEY]: () => {
                const result = moveFocusedDay(7);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [LEFT_KEY]: () => {
                const result = moveFocusedDay(-1);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [RIGHT_KEY]: () => {
                const result = moveFocusedDay(1);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-1);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.month) ? result.month : undefined,
                };
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(1);
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.month) ? rightCalendarMonth : undefined,
                };
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
            shouldUpdateCurrentMonth,
        ],
    );

    const keyHandlerMapAlt = useMemo(
        () => ({
            [HOME_KEY]: () => {
                const result = moveFocusedDay(-focusedDate.getDay());
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [END_KEY]: () => {
                const result = moveFocusedDay(6 - focusedDate.getDay());
                return {
                    day: result.day,
                    month: shouldUpdateCurrentMonth(result.day) ? result.month : undefined,
                };
            },
            [PAGEUP_KEY]: () => {
                const result = moveFocusedMonth(-12);
                return {
                    day: result.day,
                    month: isSameMonth(result.month, rightCalendarMonth)
                        ? addMonths(result.month, -1)
                        : result.month,
                };
            },
            [PAGEDN_KEY]: () => {
                const result = moveFocusedMonth(12);
                return {
                    day: result.day,
                    month: isSameMonth(result.month, rightCalendarMonth)
                        ? addMonths(result.month, -1)
                        : result.month,
                };
            },
        }),
        [
            focusedDate,
            moveFocusedDay,
            moveFocusedMonth,
            rightCalendarMonth,
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
                    const result = keyHandler[keyCode]();
                    if (result && result.day) setFocusedDate(result.day);
                    if (result && result.month) setCurrentMonth(result.month);
                }
            }
        },
        [enableNavKeys, keyHandlerMap, keyHandlerMapAlt, setCurrentMonth, setFocusedDate],
    );
}
