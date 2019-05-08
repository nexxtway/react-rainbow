export default function getMinExpectedTableWidth(widthsMeta) {
    const { totalFixedWidth, totalResizedWidth, totalFlexibleColumns, minColumnWidth } = widthsMeta;
    const minTotalFlexibleWidth = totalFlexibleColumns * minColumnWidth;
    return minTotalFlexibleWidth + totalFixedWidth + totalResizedWidth;
}
