export default function getRowSelectionInputType(maxRowSelection) {
    if (maxRowSelection === 1) {
        return 'radio';
    }
    return 'checkbox';
}
