import isDateWithinRange from './isDateWithinRange';
import compareDates from './compareDates';

export default function buildNewRangeFromValue(value, currentRange, currentUpdatePosition = 0) {
    if (currentRange && currentRange.length > 0) {
        const [rangeStart, rangeEnd] = currentRange;
        const newRangeStart = new Date(rangeStart);
        newRangeStart.setHours(0, 0, 0, 0);

        if (rangeEnd && isDateWithinRange(value, currentRange)) {
            if (currentUpdatePosition === 0) {
                value.setHours(0, 0, 0, 0);
                const newRangeEnd = new Date(rangeEnd);
                newRangeEnd.setHours(23, 59, 59, 999);
                return {
                    range: [value, newRangeEnd],
                    nextUpdatePosition: 1,
                };
            }

            value.setHours(23, 59, 59, 999);
            return {
                range: [newRangeStart, value],
                nextUpdatePosition: 0,
            };
        } else if (!rangeEnd && compareDates(value, newRangeStart) >= 0) {
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
