import { useCallback } from 'react';

export default function useHandleFocus({ focusIndex, onFocus, setFocusIndex, value }) {
    return useCallback(
        (event, index) => {
            if ((index === 0 && focusIndex === 1) || index === focusIndex) {
                return;
            }
            if (focusIndex === -1) {
                onFocus(value);
            }
            setFocusIndex(index);
        },
        [focusIndex, onFocus, setFocusIndex, value],
    );
}
