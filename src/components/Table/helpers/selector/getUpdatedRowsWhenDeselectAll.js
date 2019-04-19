export default function getUpdatedRowsWhenDeselectAll(rows = []) {
    return rows.map(row => ({
        ...row,
        isSelected: false,
        isDisabled: false,
    }));
}
