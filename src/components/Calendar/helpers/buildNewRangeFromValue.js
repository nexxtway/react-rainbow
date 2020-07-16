export default function buildNewRangeFromValue(value, currentRange) {
    if (currentRange && currentRange.length > 0) {
        const [rangeStart, rangeEnd] = currentRange;
        const newRangeStart = new Date(rangeStart);
        newRangeStart.setHours(0, 0, 0, 0);

        if (!rangeEnd) {
            value.setHours(23, 59, 59, 999);
            return {
                range: [newRangeStart, value],
            };
        }
    }

    value.setHours(0, 0, 0, 0);
    return {
        range: [value],
    };
}
