export default function addDays(date, days) {
    const clone = new Date(date);
    clone.setDate(clone.getDate() + days);
    return clone;
}
