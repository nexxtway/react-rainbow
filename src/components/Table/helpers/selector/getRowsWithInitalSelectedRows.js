/* eslint-disable no-console */
import isSelectedRow from './isSelectedRow';
import getCurrentSelectionLength from './getCurrentSelectionLength';

function rowKeyExists(indexes, key) {
    return !!indexes[key];
}

function filterValidKeys(indexes, keys) {
    return keys.filter(key => rowKeyExists(indexes, key));
}

export default function getRowsWithInitalSelectedRows(params = {}) {
    const { rows = [], selectedRows, maxRowSelection, indexes, selectedRowsKeys = {} } = params;

    if (Array.isArray(selectedRows) && maxRowSelection > 0) {
        const previousSelectionLength = getCurrentSelectionLength(selectedRowsKeys);
        let validSelectedRowsKeys = filterValidKeys(indexes, selectedRows);
        if (validSelectedRowsKeys.length > maxRowSelection) {
            console.warn(`The number of keys in selectedRows for Table component
            exceeds the limit defined by maxRowSelection.`);
            validSelectedRowsKeys = validSelectedRowsKeys.slice(0, maxRowSelection);
        }
        validSelectedRowsKeys.forEach(item => {
            selectedRowsKeys[item] = true;
        });

        if (validSelectedRowsKeys.length === maxRowSelection && maxRowSelection > 1) {
            return rows.map(row => {
                if (!isSelectedRow(selectedRowsKeys, row.key)) {
                    return {
                        ...row,
                        isDisabled: true,
                    };
                }
                return {
                    ...row,
                    isSelected: true,
                };
            });
        }
        if (selectedRows.length < maxRowSelection && previousSelectionLength === maxRowSelection) {
            return rows.map(row => ({
                ...row,
                isDisabled: false,
            }));
        }
        return rows.map(row => ({
            ...row,
            isSelected: isSelectedRow(selectedRowsKeys, row.key),
        }));
    }
    return rows;
}
