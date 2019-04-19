export default function isSelectedRow(selectedRowsKeys = {}, rowKeyValue) {
    return !!selectedRowsKeys[rowKeyValue];
}
