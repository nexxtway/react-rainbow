import normalizeDate from './normalizeDate';

export default function normalizeDates(dates) {
    return dates
        .filter(date => date && (typeof date === 'string' || date instanceof Date))
        .map(date => normalizeDate(date));
}
