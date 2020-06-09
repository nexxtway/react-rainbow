import { useCallback } from 'react';

export default function useHandleFocus(focusIndex, onFocus, setFocusIndex) {
    return useCallback(
        (event, index) => {
            if ((index === 0 && focusIndex === 1) || index === focusIndex) {
                return;
            }
            if (focusIndex === -1) {
                onFocus(event);
            }
            setFocusIndex(index);
        },
        [focusIndex, onFocus, setFocusIndex],
    );
}
