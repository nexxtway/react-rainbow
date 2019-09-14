export default function getInitialFocusedIndex(options = [], preferredSelectedOptionIndex = 0) {
    const nonHeaderItems = options.filter(option => option.type !== 'header');
    if (preferredSelectedOptionIndex < 0 || preferredSelectedOptionIndex >= nonHeaderItems.length) {
        return 0;
    }
    const preferredSelectedOption = nonHeaderItems[preferredSelectedOptionIndex];
    return options.indexOf(preferredSelectedOption);
}
