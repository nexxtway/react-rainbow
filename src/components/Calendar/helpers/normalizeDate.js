export default function normalizeDate(date) {
    if (typeof date === 'string') {
        return new Date(date);
    }
    return date || new Date();
}
