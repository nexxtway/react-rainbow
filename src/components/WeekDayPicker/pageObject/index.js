/* eslint-disable no-restricted-syntax */
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
    async clickOn(weekDay) {
        const inputRef = await this.getInputRef(weekDay);
        await inputRef.click();
    }

    /**
     * Returns an array with the selected days
     * @method
     */
    async getSelectedDays() {
        const selected = (await Promise.all(
            weekDays.map(async weekDay => {
                const input = await this.getInput(weekDay);
                return (await input.isSelected()) ? weekDay : undefined;
            }),
        )).filter(value => value);

        return selected;
    }

    /**
     * Returns the day that has the current focus or empty
     * @method
     */
    async getFocusedDay() {
        const focusedDay = (await Promise.all(
            weekDays.map(async weekDay => {
                const input = await this.getInput(weekDay);
                return (await input.isFocused()) ? weekDay : undefined;
            }),
        )).filter(value => value);
        return focusedDay.length ? focusedDay[0] : undefined;
    }

    async getInput(weekDay) {
        const index = weekDays.findIndex(value => value === weekDay);
        const elem = await $(this.rootElement).$$('input');
        return elem[index];
    }

    async getInputRef(weekDay) {
        const index = weekDays.findIndex(value => value === weekDay);
        const elem = await $(this.rootElement).$$('span');
        return elem[index].$('label');
    }
}

module.exports = PageWeekDayPicker;
