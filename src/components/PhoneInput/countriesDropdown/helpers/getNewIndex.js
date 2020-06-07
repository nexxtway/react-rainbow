export default function getNewIndex(newIndex, lenght) {
    if (newIndex < 0) {
        return 0;
    }
    if (newIndex >= lenght) {
        return lenght - 1;
    }
    return newIndex;
}
