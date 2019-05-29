/* eslint-disable no-param-reassign */

export default function getSelectedRowKeysFromSelectedRows(selectedRows = [], indexes = {}) {
    return selectedRows.reduce((selectedRowsKeys, key) => {
        if (indexes[key]) {
            selectedRowsKeys[key] = true;
        }
        return selectedRowsKeys;
    }, {});
}
