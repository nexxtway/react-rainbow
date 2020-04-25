export default function getFirstDayOfWeek(date) {
    if (date === Infinity || date === -Infinity) {
        return date;
    }
    const clone = new Date(date);
    const isValidDate = !isNaN(clone.getTime());
    if (isValidDate) {
        clone.setDate(clone.getDate() - clone.getDay());
        clone.setHours(0, 0, 0, 0);
        return clone;
    }
    const today = new Date();
    today.setDate(today.getDate() - today.getDay());
    today.setHours(0, 0, 0, 0);
    return today;
}
