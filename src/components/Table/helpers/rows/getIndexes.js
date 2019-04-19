export default function getIndexes(rows = []) {
    const indexes = {};
    if (Array.isArray(rows)) {
        rows.forEach((row, rowIndex) => {
            indexes[row.key] = { rowIndex };
        });
    }
    return indexes;
}
