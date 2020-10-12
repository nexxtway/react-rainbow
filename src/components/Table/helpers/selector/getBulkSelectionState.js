import getCurrentSelectionLength from './getCurrentSelectionLength';

export default function getBulkSelectionState(params = {}) {
    const { maxRowSelection, selectedRowsKeys = {} } = params;
    const selected = getCurrentSelectionLength(selectedRowsKeys);

    if (selected === 0) {
        return 'none';
    }
    if (selected === maxRowSelection) {
        return 'all';
    }
    return 'some';
}
