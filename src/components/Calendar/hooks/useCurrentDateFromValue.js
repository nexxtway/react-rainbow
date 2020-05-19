import { useMemo } from 'react';

export default function useCurrentDateFromValue(value) {
    return useMemo(() => {
        if (!Array.isArray(value)) return value;
        const [rangeStart, rangeEnd] = value;
        return rangeEnd || rangeStart;
    }, [value]);
}
