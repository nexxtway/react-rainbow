import getFieldValue from './getFieldValue';

let rowIndex = 0;

export default function computeUniqueRowKey(rowData, keyField) {
    const value = getFieldValue(rowData, keyField);
    if (value && typeof value === 'string') {
        return value;
    }
    rowIndex += 1;
    return `row-${rowIndex}`;
}
