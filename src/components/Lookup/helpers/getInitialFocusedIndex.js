export default function getInitialFocusedIndex(options = []) {
    const firstOption = options[0];
    if (firstOption && firstOption.type === 'header') {
        return 1;
    }
    return 0;
}
