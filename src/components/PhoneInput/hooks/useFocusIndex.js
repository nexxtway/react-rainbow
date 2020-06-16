import { useState, useEffect } from 'react';
import { useOutsideClick } from '../../../libs/hooks';

export default function useFocusIndex(containerRef, triggerRef, searchRef, inputRef) {
    const [focusIndex, setFocusIndex] = useState(-1);

    useEffect(() => {
        if (focusIndex > -1) {
            const refsMap = [triggerRef, searchRef, inputRef];
            refsMap[focusIndex].current.focus();
        }
    }, [focusIndex, inputRef, searchRef, triggerRef]);
    useOutsideClick(containerRef, () => setFocusIndex(-1), focusIndex > -1);

    return [focusIndex, setFocusIndex];
}
