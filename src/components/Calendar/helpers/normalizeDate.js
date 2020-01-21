export default function normalizeDate(date) {
    const ret = date || new Date();
    ret.setHours(0, 0, 0, 0);
    return ret;
}
