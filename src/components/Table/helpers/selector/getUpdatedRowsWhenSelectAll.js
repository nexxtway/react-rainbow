export default function getUpdatedRowsWhenSelectAll(params = {}) {
    const { rows = [], maxRowSelection, selectedRowsKeys = {} } = params;
    return rows.map((row, index) => {
        if (index < maxRowSelection) {
            selectedRowsKeys[row.key] = true;
            return {
                ...row,
                isSelected: true,
            };
        }
        return {
            ...row,
            isSelected: false,
            isDisabled: true,
        };
    });
}
