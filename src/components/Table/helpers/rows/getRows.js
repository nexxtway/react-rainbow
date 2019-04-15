import computeUniqueRowKey from './computeUniqueRowKey';
import isSelectedRow from '../selector/isSelectedRow';
import isDisabledRow from '../selector/isDisabledRow';

function getRowSelectionInputType(maxRowSelection) {
    if (maxRowSelection === 1) {
        return 'radio';
    }
    return 'checkbox';
}

export default function getRows(params) {
    const {
        rows,
        maxRowSelection,
        keyField,
        selectedRowsKeys,
    } = params;
    const inputType = getRowSelectionInputType(maxRowSelection);
    return rows.map((row) => {
        const key = computeUniqueRowKey(row, keyField);
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
