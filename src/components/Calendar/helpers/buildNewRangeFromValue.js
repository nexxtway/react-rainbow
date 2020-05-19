import isDateWithinRange from './isDateWithinRange';
import compareDates from './compareDates';

let rangeIndex = 0;

export default function buildNewRangeFromValue(value, currentRange) {
    if (!currentRange || currentRange.length === 0) return [value];

    const [rangeStart, rangeEnd] = currentRange;

    if (!rangeEnd) {
        if (compareDates(value, rangeStart) >= 0) return [rangeStart, value];
        return [value, rangeStart];
    }

    if (isDateWithinRange(value, currentRange)) {
        if (rangeIndex === 0) {
            rangeIndex = 1;
            return [value, rangeEnd];
        }

        rangeIndex = 0;
        return [rangeStart, value];
    }

    return [value];
}
