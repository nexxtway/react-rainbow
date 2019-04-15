import getRowIndexByKey from '../rows/getRowIndexByKey';

export default function getRowIntervalIndexes({ indexes, startRowKey, endRowKey }) {
    const start = startRowKey === 'HEADER' ? 0 : getRowIndexByKey(indexes, startRowKey);
    const end = getRowIndexByKey(indexes, endRowKey);
    return {
        start: Math.min(start, end),
        end: Math.max(start, end),
    };
}
