import { useCallback } from 'react';

export default function useHandleBlur(focusIndex, onBlur) {
    return useCallback(
        event => {
            if (focusIndex === -1) {
                onBlur(event);
            }
        },
        [focusIndex, onBlur],
    );
}
