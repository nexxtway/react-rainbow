export default function isEmptyRange(range) {
    if (Array.isArray(range) && range.length > 0) {
        return range.filter(item => !!item).length === 0;
    }
    return true;
}
