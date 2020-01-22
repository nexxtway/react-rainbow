export default function addMonths(date, months) {
    const clone = new Date(date);
    clone.setMonth(date.getMonth() + months);
    return clone;
}
