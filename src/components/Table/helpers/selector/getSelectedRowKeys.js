/* eslint-disable no-param-reassign */
import getFieldValue from '../rows/getFieldValue';

export default function getSelectedRowKeys(selectedRows, keyField) {
    return selectedRows.reduce((selectedRowsKeys, row) => {
        const key = getFieldValue(row, keyField);
        selectedRowsKeys[key] = true;
        return selectedRowsKeys;
    }, {});
}
