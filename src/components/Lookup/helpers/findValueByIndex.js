export default function findValueByIndex(options = [], focusedItemIndex) {
    let optionIndex = 0;
    return options.find(option => {
        if (option.type !== 'header') {
            const condition = optionIndex === focusedItemIndex;
            optionIndex += 1;
            return condition;
        }
        return false;
    });
}
