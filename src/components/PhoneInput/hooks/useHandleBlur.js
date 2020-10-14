import { useCallback } from 'react';

export default function useHandleBlur(focusIndex, onBlur, value) {
    return useCallback(() => {
        if (focusIndex === -1) {
            onBlur(value);
        }
    }, [focusIndex, onBlur, value]);
}
