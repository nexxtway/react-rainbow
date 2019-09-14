export default function getInitialFocusedIndex(options = [], preferredSelectedOptionIndex = 0) {
    const nonHeaderItems = options.filter(option => option.type !== 'header');
    let index = preferredSelectedOptionIndex;

    if (nonHeaderItems.length === 0) return 0;

    if (index < 0 || index >= nonHeaderItems.length) {
        index = 0;
    }

    const preferredSelectedOption = nonHeaderItems[index];
    return options.indexOf(preferredSelectedOption);
}
