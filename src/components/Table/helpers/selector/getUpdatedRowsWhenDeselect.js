import getStartRowKey from './getStartRowKey';
import getCurrentSelectionLength from './getCurrentSelectionLength';
import getRowIntervalIndexes from './getRowIntervalIndexes';
import isSelectedRow from './isSelectedRow';

export default function getUpdatedRowsWhenDeselect(params = {}) {
    const {
        maxRowSelection,
        rows = [],
        indexes = {},
        isMultiple,
        rowKeyValue,
        lastSelectedRowKey,
        selectedRowsKeys = {},
    } = params;

    const startRowKey = getStartRowKey({
        isMultiple,
        rowKeyValue,
        indexes,
        lastSelectedRowKey,
    });
    const { start, end } = getRowIntervalIndexes({
        indexes,
        startRowKey,
        endRowKey: rowKeyValue,
    });

    const rowsWithSelection = rows.map((row, index) => {
        const currentSelectionLength = getCurrentSelectionLength(selectedRowsKeys);
        const maxSelectionReached = currentSelectionLength > maxRowSelection;

        if (index >= start && index <= end && !maxSelectionReached) {
            selectedRowsKeys[row.key] = false;
            return {
                ...row,
                isSelected: false,
            };
        }
        return row;
    });

    return rowsWithSelection.map(row => {
        const maxSelectionReached =
            getCurrentSelectionLength(selectedRowsKeys) <= maxRowSelection - 1;

        if (maxSelectionReached && !isSelectedRow(selectedRowsKeys, row.key)) {
            return {
                ...row,
                isDisabled: false,
            };
        }
        return row;
    });
}
