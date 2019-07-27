export default function getFirstDayMonth(date) {
    const clone = new Date(date);
    const isValidDate = !isNaN(clone.getTime());
    if (isValidDate) {
        clone.setDate(1);
        return clone;
    }
    const today = new Date();
    today.setDate(1);
    return today;
}
