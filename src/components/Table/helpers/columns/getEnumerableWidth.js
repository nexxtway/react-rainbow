const singleNumberWidth = 8;

export default function getEnumerableWidth(numberValue, variant) {
    const enumerableColumnOffset = variant === 'listview' ? 10 : 40;
    if (numberValue) {
        const valuePlusOne = Number(numberValue) + 1;
        const enumerableStringWidth = singleNumberWidth * valuePlusOne.toString().length;
        return enumerableStringWidth + enumerableColumnOffset;
    }
    return enumerableColumnOffset + singleNumberWidth;
}
