export default function containsFiles(event) {
    if (!Array.isArray(event.dataTransfer.types) || event.dataTransfer.types.length === 0) {
        return false;
    }
    if (event.dataTransfer.types) {
        return !event.dataTransfer.types.some(type => type !== 'Files');
    }
    return true;
}
