import { useMemo } from 'react';
import { normalizeDate, normalizeRange, isEmptyRange } from '../helpers';

export default function useRangeFromValue(value, selectionType) {
    return useMemo(() => {
        if (selectionType === 'single') return undefined;
        if (!!value && !Array.isArray(value)) return [normalizeDate(value)];
        if (isEmptyRange(value)) return [];
        return normalizeRange(value);
    }, [value, selectionType]);
}
