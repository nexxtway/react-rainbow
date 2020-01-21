export default function addMonths(date, months) {
    const clone = new Date(date);
    clone.setHours(0, 0, 0, 0);
    clone.setMonth(date.getMonth() + months);
    return clone;
}
