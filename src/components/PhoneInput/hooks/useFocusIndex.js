import { useState, useEffect } from 'react';

export default function useFocusIndex(...refsMap) {
    const [focusIndex, setFocusIndex] = useState(-1);

    useEffect(() => {
        if (focusIndex > -1) {
            // const refsMap = [triggerRef, searchRef, inputRef];
            refsMap[focusIndex].current.focus();
        }
    }, [focusIndex, refsMap]);

    return [focusIndex, setFocusIndex];
}
