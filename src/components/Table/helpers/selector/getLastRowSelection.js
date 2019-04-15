import getRowIndexByKey from '../rows/getRowIndexByKey';

export default function getLastRowSelection(indexes, lastSelectedRowKey) {
    const keyIsValid =
        lastSelectedRowKey !== undefined &&
        getRowIndexByKey(indexes, lastSelectedRowKey) !== undefined;

    return keyIsValid ? lastSelectedRowKey : undefined;
}
