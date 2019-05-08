import isSelectedRow from './isSelectedRow';
import getCurrentSelectionLength from './getCurrentSelectionLength';

export default function isDisabledRow(params = {}) {
    const { rowKeyValue, maxRowSelection, selectedRowsKeys = {} } = params;
    if (!isSelectedRow(rowKeyValue, selectedRowsKeys)) {
        return (
            maxRowSelection !== 1 && getCurrentSelectionLength(selectedRowsKeys) === maxRowSelection
        );
    }
    return false;
}
