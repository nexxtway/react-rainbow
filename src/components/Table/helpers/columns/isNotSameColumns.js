export default function isNotSameColumns(prevColumns, currentColumns) {
    if (prevColumns.length !== currentColumns.length) {
        return true;
    }
    return prevColumns.some(
        (column, index) =>
            column.field !== currentColumns[index].field ||
            column.type !== currentColumns[index].type ||
            column.component !== currentColumns[index].component ||
            column.defaultWidth !== currentColumns[index].defaultWidth ||
            column.component !== currentColumns[index].component ||
            column.width !== currentColumns[index].width,
    );
}
