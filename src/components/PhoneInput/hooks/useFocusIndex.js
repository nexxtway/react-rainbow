import { useState, useEffect } from 'react';
import { useOutsideClick } from '../../../libs/hooks';

export default function useFocusIndex(containerRef, triggerRef, searchRef, inputRef) {
    const [focusIndex, setFocusIndex] = useState(-1);

    const [startListener, stopListener] = useOutsideClick(containerRef, () => {
        setFocusIndex(-1);
    });

    useEffect(() => {
        if (focusIndex > -1) {
            const refsMap = [triggerRef, searchRef, inputRef];
            refsMap[focusIndex].current.focus();
            startListener();
        }
        return () => {
            stopListener();
        };
    }, [focusIndex, inputRef, searchRef, startListener, stopListener, triggerRef]);

    return [focusIndex, setFocusIndex];
}
