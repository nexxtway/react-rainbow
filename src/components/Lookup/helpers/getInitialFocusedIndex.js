export default function getInitialFocusedIndex(options = [], preferredSelectedOption = 0) {
    const index =
        preferredSelectedOption >= 0 && preferredSelectedOption < options.length
            ? preferredSelectedOption
            : 0;
    const firstOption = options[index];
    if (firstOption && firstOption.type === 'header') {
        return index + 1 < options.length ? index + 1 : 0;
    }
    return index;
}
