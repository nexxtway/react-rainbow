let rowIndex = 0;

export default function computeUniqueRowKey(row, keyField) {
    if (row[keyField]) {
        return row[keyField];
    }
    rowIndex += 1;
    return `row-${rowIndex}`;
}
