import { useState, useEffect } from 'react';
import { useOutsideClick } from '../../../libs/hooks';

export default function useFocusIndex(containerRef, triggerRef, searchRef, inputRef) {
    const [focusIndex, setFocusIndex] = useState(-1);

    const [startListener, stopListener] = useOutsideClick(containerRef, () => {
        setFocusIndex(-1);
    });
    useEffect(() => {
        startListener();
        return () => {
            stopListener();
        };
    }, [startListener, stopListener]);

    useEffect(() => {
        if (focusIndex > -1) {
            const refsMap = [triggerRef, searchRef, inputRef];
            refsMap[focusIndex].current.focus();
        }
    }, [focusIndex, inputRef, searchRef, triggerRef]);

    return [focusIndex, setFocusIndex];
}
