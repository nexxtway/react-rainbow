export default function getColumnWidthFromDef(column) {
    const { isResized, computedWidth, width, defaultWidth } = column;
    let resizedWidth;
    if (isResized) {
        resizedWidth = computedWidth;
    }
    return width || resizedWidth || defaultWidth;
}
