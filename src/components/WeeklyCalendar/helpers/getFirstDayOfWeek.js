export default function getFirstDayOfWeek(date) {
    const clone = new Date(date);
    clone.setDate(date.getDate() - date.getDay());
    clone.setHours(0, 0, 0, 0);

    return clone;
}
