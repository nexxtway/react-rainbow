export default function getRowSelectionInputType(maxRowSelection, rowsLength) {
    if (maxRowSelection === 1 && rowsLength !== 1) {
        return 'radio';
    }
    return 'checkbox';
}
