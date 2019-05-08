import getStartRowKey from './getStartRowKey';
import getCurrentSelectionLength from './getCurrentSelectionLength';
import getRowIntervalIndexes from './getRowIntervalIndexes';
import isSelectedRow from './isSelectedRow';

export default function getUpdatedRowsWhenSelect(params = {}) {
    const {
        maxRowSelection,
        rows = [],
        indexes = {},
        isMultiple,
        rowKeyValue,
        lastSelectedRowKey,
        selectedRowsKeys = {},
    } = params;

    if (maxRowSelection > 1) {
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
            const maxSelectionReached = currentSelectionLength >= maxRowSelection;
            if (index >= start && index <= end && !maxSelectionReached) {
                selectedRowsKeys[row.key] = true;
                return {
                    ...row,
                    isSelected: true,
                };
            }
            return row;
        });

        return rowsWithSelection.map(row => {
            const maxSelectionReached =
                getCurrentSelectionLength(selectedRowsKeys) === maxRowSelection;

            if (maxSelectionReached && !isSelectedRow(selectedRowsKeys, row.key)) {
                return {
                    ...row,
                    isDisabled: true,
                };
            }
            return row;
        });
    }

    return rows.map(row => {
        if (selectedRowsKeys[row.key]) {
            return {
                ...row,
                isSelected: true,
            };
        }
        return {
            ...row,
            isSelected: false,
        };
    });
}
