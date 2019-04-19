export default function getRowIndexByKey(indexes = {}, key = '') {
    if (!indexes[key]) {
        return undefined;
    }
    return indexes[key].rowIndex;
}
