export default function getExpectedFlexibleColumnWidth(widthsMeta, totalTableWidth) {
    const {
        totalFixedWidth,
        totalResizedWidth,
        totalFlexibleColumns,
        minColumnWidth,
        maxColumnWidth,
    } = widthsMeta;
    const totalFlexibleWidth = totalTableWidth - totalFixedWidth - totalResizedWidth;
    const avgFlexibleColumnWidth = Math.floor(totalFlexibleWidth / totalFlexibleColumns);
    const allowedSpace = Math.max(avgFlexibleColumnWidth, minColumnWidth);
    return Math.min(maxColumnWidth, allowedSpace);
}
