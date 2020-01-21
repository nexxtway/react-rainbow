export default function normalizeDate(date) {
    return date || new Date().setHours(0, 0, 0, 0);
}
