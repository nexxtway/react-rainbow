/* eslint-disable no-param-reassign */
export default function getTotalWidthsMetadata(params) {
    const { columns, minColumnWidth, maxColumnWidth } = params;
    const initial = {
        totalFixedWidth: 0,
        totalFixedColumns: 0,
        totalResizedWidth: 0,
        totalResizedColumns: 0,
        totalFlexibleColumns: 0,
        minColumnWidth,
        maxColumnWidth,
    };

    return columns.reduce((prev, col, index) => {
        const currentColumn = columns[index];
        if (col.width) {
            prev.totalFixedWidth += col.width;
            prev.totalFixedColumns += 1;
        } else if (currentColumn.isResized) {
            prev.totalResizedWidth += currentColumn.computedWidth;
            prev.totalResizedColumns += 1;
        } else if (col.defaultWidth) {
            prev.totalResizedWidth += col.defaultWidth;
            prev.totalResizedColumns += 1;
        } else {
            prev.totalFlexibleColumns += 1;
        }
        return prev;
    }, initial);
}
