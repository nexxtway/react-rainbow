export default function getTableWidth(columns = []) {
    return columns.reduce((seed, acc) => seed + acc.computedWidth, 0);
}
