import getRowSelectionInputType from './getRowSelectionInputType';
import computeUniqueRowKey from './computeUniqueRowKey';
import isSelectedRow from '../selector/isSelectedRow';
import isDisabledRow from '../selector/isDisabledRow';

function getKey(row, keyField) {
    if (row.key) {
        return row.key;
    }
    return computeUniqueRowKey(row, keyField);
}

export default function getRows(params = {}) {
    const { rows = [], maxRowSelection, keyField, selectedRowsKeys } = params;
    const inputType = getRowSelectionInputType(maxRowSelection, rows.length);
    return rows.map(row => {
        const key = getKey(row, keyField);
        return {
            key,
            inputType,
            isSelected: isSelectedRow(selectedRowsKeys, key),
            isDisabled: isDisabledRow({
                rowKeyValue: key,
                maxRowSelection,
                selectedRowsKeys,
            }),
        };
    });
}
