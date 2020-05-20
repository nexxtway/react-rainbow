import { useMemo } from 'react';

export default function useFocusedIndexState(value, length, disabled, readOnly) {
    return useMemo(() => {
        const canBeFocused = !disabled && !readOnly;
        if (canBeFocused) {
            const currentLength = value.join('').trim('').length;
            const newFocusedIndex = currentLength < length ? currentLength : length - 1;
            return newFocusedIndex;
        }

        return undefined;
    }, [value, length, disabled, readOnly]);
}
