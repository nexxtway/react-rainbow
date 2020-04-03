export default function getLastDayOfWeek(date) {
    const clone = new Date(date);
    clone.setDate(date.getDate() + (6 - date.getDay()));
    clone.setHours(0, 0, 0, 0);

    return clone;
}
