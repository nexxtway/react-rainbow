import { useState, useEffect } from 'react';

export default function useFocusIndex(containerRef, triggerRef, searchRef, inputRef) {
    const [focusIndex, setFocusIndex] = useState(-1);

    useEffect(() => {
        if (focusIndex > -1) {
            const refsMap = [triggerRef, searchRef, inputRef];
            refsMap[focusIndex].current.focus();
        }
    }, [focusIndex, inputRef, searchRef, triggerRef]);

    return [focusIndex, setFocusIndex];
}
