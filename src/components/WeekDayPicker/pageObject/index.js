const weekDays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

/**
 * PageWeekDayPicker page object class.
 * @class
 */
class PageWeekDayPicker {
    /**
     * Create a new PageWeekDayPicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageWeekDayPicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    clickOn(weekDay) {
        const inputRef = this.getInputRef(weekDay);
        inputRef.click();
    }

    isInputChecked(weekDay) {
        return this.getInput(weekDay).getAttribute('checked') === 'true';
    }

    isInputFocused(weekDay) {
        return this.getInput(weekDay).isFocused();
    }

    getInputLabel(weekDay) {
        return this.getInputRef(weekDay).getText();
    }

    getInput(weekDay) {
        const index = weekDays.findIndex(value => value === weekDay);
        const elem = $(this.rootElement).$$('input');
        return elem[index];
    }

    getInputRef(weekDay) {
        const index = weekDays.findIndex(value => value === weekDay);
        const elem = $(this.rootElement).$$('span');
        return elem[index].$('label');
    }
}

module.exports = PageWeekDayPicker;
