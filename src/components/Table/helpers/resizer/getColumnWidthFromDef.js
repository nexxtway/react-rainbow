export default function getColumnWidthFromDef(column) {
    let resizedWidth;
    if (column.isResized) {
        resizedWidth = column.computedWidth;
    }
    return column.width || resizedWidth || column.defaultWidth;
}
