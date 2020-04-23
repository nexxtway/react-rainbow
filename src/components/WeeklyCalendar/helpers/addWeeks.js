export default function addWeeks(date, weeks) {
    const clone = new Date(date);
    clone.setDate(date.getDate() + weeks * 7);
    return clone;
}
