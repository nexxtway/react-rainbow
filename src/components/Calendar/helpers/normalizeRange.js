import normalizeDate from './normalizeDate';

export default function normalizeRange(range) {
    if (!range) return [];
    if (!Array.isArray(range)) return [normalizeDate(range)];
    return range.map(date => normalizeDate(date));
}
