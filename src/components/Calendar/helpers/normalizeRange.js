import normalizeDate from './normalizeDate';

export default function normalizeRange(range) {
    if (Array.isArray(range))
        return range.map((date, index) => {
            if (index >= 1) {
                date.setHours(23, 59, 59, 999);
            }
            return normalizeDate(date);
        });
    if (range) return [normalizeDate(range)];
    return [];
}
