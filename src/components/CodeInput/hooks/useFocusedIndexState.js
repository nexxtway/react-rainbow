import { useMemo } from 'react';

export default function useFocusedIndexState(value, length) {
    return useMemo(() => {
        const currentLength = value.join('').trim('').length;
        const newFocusedIndex = currentLength < length ? currentLength : length - 1;
        return newFocusedIndex;
    }, [value, length]);
}
