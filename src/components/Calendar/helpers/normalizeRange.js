import normalizeDate from './normalizeDate';

export default function normalizeRange(range) {
    if (Array.isArray(range)) return range.map(date => normalizeDate(date));
    if (range) return [normalizeDate(range)];
    return [];
}
