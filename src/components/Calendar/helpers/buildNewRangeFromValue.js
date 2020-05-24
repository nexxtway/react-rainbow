import isDateWithinRange from './isDateWithinRange';
import compareDates from './compareDates';

export default function buildNewRangeFromValue(value, currentRange, currentUpdatePosition = 0) {
    if (currentRange && currentRange.length > 0) {
        const [rangeStart, rangeEnd] = currentRange;
        rangeStart.setHours(0, 0, 0, 0);

        if (rangeEnd && isDateWithinRange(value, currentRange)) {
            if (currentUpdatePosition === 0) {
                value.setHours(0, 0, 0, 0);
                rangeEnd.setHours(23, 59, 59, 999);
                return {
                    range: [value, rangeEnd],
                    nextUpdatePosition: 1,
                };
            }

            value.setHours(23, 59, 59, 999);
            return {
                range: [rangeStart, value],
                nextUpdatePosition: 0,
            };
        } else if (!rangeEnd && compareDates(value, rangeStart) >= 0) {
            value.setHours(23, 59, 59, 999);
            return {
                range: [rangeStart, value],
            };
        }
    }

    value.setHours(0, 0, 0, 0);
    return {
        range: [value],
    };
}
