export default function isEmptyRange(range) {
    if ([null, undefined, [], {}].includes(range)) return true;
    if (!Array.isArray(range) || range.length === 0) return true;
    const nullFilteredRange = range.filter(item => !!item);
    return nullFilteredRange.length === 0;
}
