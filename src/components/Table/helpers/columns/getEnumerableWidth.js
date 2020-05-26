export default function getEnumerableWidth(numberValue) {
    if (numberValue) {
        const enumerableColumnOffset = 40;
        const singleNumberWidth = 8;
        const enumerableStringWidth = singleNumberWidth * numberValue.toString().length;
        return enumerableStringWidth + enumerableColumnOffset;
    }
    return 48;
}
