const getWeekDays = require('../helpers/getWeekDays');

const weekDays = getWeekDays();

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

    /**
     * Triggers a click over the checkbox/radio input by clicking his label reference.
     * @method
     * @param {string} weekDay - The value of the day we want the make click.
     */
    clickOn(weekDay) {
        const inputRef = this.getInputRef(weekDay);
        inputRef.click();
    }

    /**
     * Returns a boolean specifying is the input is checked.
     * @method
     * @param {string} weekDay - The value to checkbox/radio input we want to verify.
     */
    isInputChecked(weekDay) {
        return this.getInput(weekDay).getAttribute('checked') === 'true';
    }

    /**
     * Returns a boolean specifying is the input is focused.
     * @method
     * @param {string} weekDay - The value of the checkbox/radio input we want to verify.
     */
    isInputFocused(weekDay) {
        return this.getInput(weekDay).isFocused();
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
