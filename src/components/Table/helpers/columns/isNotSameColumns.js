export default function isNotSameColumns(prevColumns, currentColumns) {
    if (prevColumns.length !== currentColumns.length) {
        return true;
    }
    return prevColumns.some((column, index) => column.field !== currentColumns[index].field);
}
