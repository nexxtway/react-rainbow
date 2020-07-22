import { useState, useMemo, useEffect, useCallback } from 'react';
import { RIGHT_KEY, LEFT_KEY } from '../../../libs/constants';

export default function useHeaderArrowNav({
    disableNextMonth,
    disablePreviousMonth,
    refs,
    firstIndex,
    lastIndex,
    delta,
}) {
    const [enableNavKeys, setEnableNavKeys] = useState(false);
    const [focusedItemIndex, setFocusedItemIndex] = useState(-1);

    const updateFocusedItem = useCallback(index => {
        setFocusedItemIndex(index);
        setEnableNavKeys(true);
    }, []);

    const clearFocusedItems = useCallback(() => {
        setEnableNavKeys(false);
    }, []);

    const keyHandlerMap = useMemo(
        () => ({
            [LEFT_KEY]: () => {
                setFocusedItemIndex(Math.max(focusedItemIndex - delta, firstIndex));
            },
            [RIGHT_KEY]: () => {
                setFocusedItemIndex(Math.min(focusedItemIndex + delta, lastIndex));
            },
        }),
        [focusedItemIndex, lastIndex, firstIndex, delta],
    );

    const handleKeyDown = useCallback(
        event => {
            if (disableNextMonth && disablePreviousMonth) return;
            if (enableNavKeys) {
                const { keyCode } = event;
                if (keyHandlerMap[keyCode]) {
                    event.preventDefault();
                    keyHandlerMap[keyCode]();
                }
            }
        },
        [enableNavKeys, keyHandlerMap, disableNextMonth, disablePreviousMonth],
    );

    useEffect(() => {
        if (enableNavKeys && refs[focusedItemIndex].current) {
            refs[focusedItemIndex].current.focus();
        }
    }, [enableNavKeys, focusedItemIndex, refs]);

    return {
        updateFocusedItem,
        clearFocusedItems,
        handleKeyDown,
    };
}
