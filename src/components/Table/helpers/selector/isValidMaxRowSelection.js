export default function isValidMaxRowSelection(maxRowSelection, rowsLength) {
    const maxRowSelectionNumber = Number(maxRowSelection);
    return (
        maxRowSelectionNumber <= rowsLength &&
        !isNaN(maxRowSelectionNumber) &&
        maxRowSelection !== null &&
        !Array.isArray(maxRowSelection)
    );
}
