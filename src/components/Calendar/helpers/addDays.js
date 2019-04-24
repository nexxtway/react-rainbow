export default function addDays(date, days) {
    const ret = new Date(date);
    ret.setDate(ret.getDate() + days);
    return new Date(ret);
}
