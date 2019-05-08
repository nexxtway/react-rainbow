function getSelectedRowsKeys(selectedRowsKeys) {
    return Object.keys(selectedRowsKeys).filter(key => selectedRowsKeys[key]);
}

export default function getCurrentSelectionLength(selectedRowsKeys) {
    return getSelectedRowsKeys(selectedRowsKeys).length;
}
