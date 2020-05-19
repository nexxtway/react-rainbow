import { useMemo } from 'react';

export default function useRangeFromValue(value, selectionType) {
    return useMemo(() => {
        if (selectionType === 'single') return undefined;
        if (!!value && !Array.isArray(value)) return [value];
        return value;
    }, [value, selectionType]);
}
