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
     * Returns an array with the selected days
     * @method
     */
    getSelectedDays() {
        const selected = weekDays.filter((weekDay, index) => {
            const elem = $(this.rootElement).$$('input');
            const input = elem[index];
            return input.getAttribute('checked') === 'true';
        });

        return selected;
    }

    /**
     * Returns the day that has the current focus or empty
     * @method
     */
    getFocusedDay() {
        const focusedDay = weekDays.filter(weekDay => this.getInput(weekDay).isFocused());
        return focusedDay.length ? focusedDay[0] : undefined;
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
