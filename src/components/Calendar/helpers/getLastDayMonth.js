export default function getLastDayMonth(value) {
    const date = new Date(value);
    date.setMonth(date.getMonth() + 1);
    date.setDate(1);
    date.setDate(date.getDate() - 1);
    return date;
}
