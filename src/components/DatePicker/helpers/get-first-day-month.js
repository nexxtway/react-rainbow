export default function getFirstDayMonth(date) {
    const clone = new Date(date);
    clone.setDate(1);
    return clone;
}
