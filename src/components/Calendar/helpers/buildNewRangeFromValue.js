import isDateWithinRange from './isDateWithinRange';
import compareDates from './compareDates';

export default function buildNewRangeFromValue(value, currentRange, currentUpdatePosition = 0) {
    if (!currentRange || currentRange.length === 0)
        return {
            range: [value],
        };

    const [rangeStart, rangeEnd] = currentRange;

    if (!rangeEnd) {
        if (compareDates(value, rangeStart) >= 0) {
            return {
                range: [rangeStart, value],
            };
        }
        return {
            range: [value],
        };
    }

    if (isDateWithinRange(value, currentRange)) {
        if (currentUpdatePosition === 0) {
            return {
                range: [value, rangeEnd],
                nextUpdatePosition: 1,
            };
        }
        return {
            range: [rangeStart, value],
            nextUpdatePosition: 0,
        };
    }

    return {
        range: [value],
    };
}
