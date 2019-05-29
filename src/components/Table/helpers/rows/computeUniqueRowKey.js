/* eslint-disable no-console */
import getFieldValue from './getFieldValue';

let rowIndex = 0;

export default function computeUniqueRowKey(rowData, keyField) {
    const value = getFieldValue(rowData, keyField);
    if (value && typeof value === 'string') {
        return value;
    }
    if (rowIndex === 0) {
        console.error('The "keyField" passed is not valid.');
    }
    rowIndex += 1;
    return `row-${rowIndex}`;
}
