export default function containsFiles(event) {
    if (event.dataTransfer.types) {
        return !event.dataTransfer.types.some(type => type !== 'Files');
    }
    return true;
}
