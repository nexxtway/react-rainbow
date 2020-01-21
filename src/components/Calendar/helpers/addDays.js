export default function addDays(date, days) {
    const ret = new Date(date);
    ret.setHours(0, 0, 0, 0);
    ret.setDate(ret.getDate() + days);
    return new Date(ret);
}
