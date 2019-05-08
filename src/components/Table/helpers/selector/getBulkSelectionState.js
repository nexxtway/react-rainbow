import getCurrentSelectionLength from './getCurrentSelectionLength';

export default function getBulkSelectionState(params = {}) {
    const { maxRowSelection, selectedRowsKeys = {} } = params;
    const selected = getCurrentSelectionLength(selectedRowsKeys);

    if (selected === 0) {
        return 'none';
    } else if (selected === maxRowSelection) {
        return 'all';
    }
    return 'some';
}
