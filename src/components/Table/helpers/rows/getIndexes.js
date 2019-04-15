export default function getIndexes(rows) {
    const indexes = {};
    rows.forEach((row, rowIndex) => {
        indexes[row.key] = { rowIndex };
    });
    return indexes;
}
