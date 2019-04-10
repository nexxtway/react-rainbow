export default function getResizedColumns({ columns, colIndex, widthDelta }) {
    return columns.map((column, index) => {
        if (index === colIndex) {
            return {
                ...column,
                computedWidth: column.computedWidth + widthDelta,
                isResized: true,
            };
        }
        return column;
    });
}
