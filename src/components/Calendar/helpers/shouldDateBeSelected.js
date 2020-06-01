import isSameDay from './isSameDay';

export default function shouldDateBeSelected(date, currentValue, selectionType, currentRange) {
    if (selectionType === 'single') return isSameDay(date, currentValue);
    if (Array.isArray(currentRange) && currentRange.length > 0) {
        const [rangeStart, rangeEnd] = currentRange;
        return isSameDay(date, rangeStart) || isSameDay(date, rangeEnd);
    }
    return false;
}
