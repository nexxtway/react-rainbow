export default function areDifferentColumns(columns, newColumns) {
    return newColumns.some((column, index) => columns[index] !== column);
}
