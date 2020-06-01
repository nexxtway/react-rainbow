const enumerableColumnOffset = 40;
const singleNumberWidth = 8;

export default function getEnumerableWidth(numberValue) {
    if (numberValue) {
        const valuePlusOne = Number(numberValue) + 1;
        const enumerableStringWidth = singleNumberWidth * valuePlusOne.toString().length;
        return enumerableStringWidth + enumerableColumnOffset;
    }
    return 48;
}
