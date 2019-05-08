import getLastRowSelection from './getLastRowSelection';

export default function getStartRowKey(params) {
    const { isMultiple, rowKeyValue, indexes, lastSelectedRowKey } = params;
    let fromRowKey = rowKeyValue;

    if (isMultiple) {
        fromRowKey = getLastRowSelection(indexes, lastSelectedRowKey) || rowKeyValue;
    }
    return fromRowKey;
}
