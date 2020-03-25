export default function getLastDayOfWeek(date) {
    const clone = new Date(date);
    return clone.setDate(date.getDate() + (6 - date.getDay()));
}
