export default function getFirstDayMonth(date) {
    const clone = new Date(date);
    const isValidDate = !isNaN(clone.getTime());
    if (isValidDate) {
        clone.setDate(1);
        clone.setHours(0, 0, 0, 0);
        return clone;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    today.setDate(1);
    return today;
}
