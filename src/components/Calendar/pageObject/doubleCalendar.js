/* eslint-disable no-return-await */
/**
 * Calendar page object class.
 * @class
 * @tutorial calendar
 */
class PageDoubleCalendar {
    /**
     * Create a new PageCalendar page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageCalendar root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the previous month button element.
     * @method
     */
    async clickPrevMonthButton() {
        await $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[0]
            .click();
    }

    /**
     * Clicks the next month button element.
     * @method
     */
    async clickNextMonthButton() {
        await $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[1]
            .click();
    }

    /**
     * Returns true when the previous month button element is disabled.
     * @method
     * @returns {bool}
     */
    async isPrevMonthButtonDisabled() {
        const buttonEl = (await $(this.rootElement).$$('button[data-id=button-icon-element]'))[0];
        return !(await buttonEl.isEnabled());
    }

    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */
    async isNextMonthButtonDisabled() {
        const buttonEl = (await $(this.rootElement).$$('button[data-id=button-icon-element]'))[1];
        return !(await buttonEl.isEnabled());
    }

    /**
     * Returns true when the previous month button element has focus.
     * @method
     * @returns {bool}
     */
    async isPrevMonthButtonFocused() {
        const buttonEl = (await $(this.rootElement).$$('button[data-id=button-icon-element]'))[0];
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */
    async isNextMonthButtonFocused() {
        const buttonEl = (await $(this.rootElement).$$('button[data-id=button-icon-element]'))[1];
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Clicks the select year element on the left month.
     * @method
     */
    async clickLeftMonthSelectYear() {
        await $(this.rootElement)
            .$$('select')[0]
            .click();
    }

    /**
     * Clicks the specific enabled day button element on the left month.
     * @method
     */
    async clickLeftMonthDay(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$(`button=${day}`);
        if (await buttonEl.isExisting()) {
            await buttonEl.scrollIntoView();
            await buttonEl.click();
        }
    }

    /**
     * Returns the text of the selected left month element.
     * @method
     * @returns {string}
     */
    async getLeftSelectedMonth() {
        return $(this.rootElement)
            .$$('h3[data-id=month]')[0]
            .getText();
    }

    /**
     * Returns the value of the left select year element.
     * @method
     * @returns {string}
     */
    async getLeftMonthSelectedYear() {
        return $(this.rootElement)
            .$$('select')[0]
            .getValue();
    }

    /**
     * Returns the text of the current selected day element on the left month.
     * @method
     * @returns {string}
     */
    async getLeftMonthSelectedDay() {
        const day = await $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$('button[data-selected=true]');
        if (await day.isExisting()) return day.getText();
        return undefined;
    }

    /**
     * Set the value of the year select element
     * @method
     * @param {string}
     */
    async setLeftMonthYear(value) {
        await $(this.rootElement)
            .$$('select')[0]
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the specific day button element on the left month has focus.
     * @method
     * @returns {bool}
     */
    async isLeftMonthDayFocused(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$(`button=${day}`);
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the specific day element in left month is selected.
     * @method
     * @returns {string}
     */
    async isLeftMonthDaySelected(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$(`button=${day}`);
        return (
            (await buttonEl.isExisting()) &&
            (await buttonEl.getAttribute('data-selected')) === 'true'
        );
    }

    /**
     * Returns true when the specific day element in left month is selected.
     * @method
     * @returns {string}
     */
    async isLeftMonthDayEnabled(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[0]
            .$(`button=${day}`);
        return buttonEl.isExisting();
    }

    /**
     * Returns true when the year select element in left month has focus.
     * @method
     * @returns {bool}
     */
    async isLeftYearSelectFocused() {
        const selectEl = (await $(this.rootElement).$$('select'))[0];
        return (await selectEl.isExisting()) && (await selectEl.isFocused());
    }

    /**
     * Clicks the select year element on the right month.
     * @method
     */
    async clickRightMonthSelectYear() {
        await $(this.rootElement)
            .$$('select')[1]
            .click();
    }

    /**
     * Clicks the specific enabled day button element on the right month.
     * @method
     */
    async clickRightMonthDay(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$(`button=${day}`);
        if (await buttonEl.isExisting()) {
            await buttonEl.scrollIntoView();
            await buttonEl.click();
        }
    }

    /**
     * Returns the text of the selected left month element.
     * @method
     * @returns {string}
     */
    async getRightSelectedMonth() {
        return $(this.rootElement)
            .$$('h3[data-id=month]')[1]
            .getText();
    }

    /**
     * Returns the value of the left select year element.
     * @method
     * @returns {string}
     */
    async getRightMonthSelectedYear() {
        return $(this.rootElement)
            .$$('select')[1]
            .getValue();
    }

    /**
     * Returns the text of the current selected day element on the left month.
     * @method
     * @returns {string}
     */
    async getRightMonthSelectedDay() {
        const day = await $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$('button[data-selected=true]');
        if (await day.isExisting()) return day.getText();
        return undefined;
    }

    /**
     * Set the value of the right select year element
     * @method
     * @param {string}
     */
    async setRightMonthYear(value) {
        await $(this.rootElement)
            .$$('select')[1]
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the specific day button element on the right month has focus.
     * @method
     * @returns {bool}
     */
    async isRightMonthDayFocused(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$(`button=${day}`);
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the specific day element in right month is selected.
     * @method
     * @returns {string}
     */
    async isRightMonthDaySelected(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$(`button=${day}`);
        return (
            (await buttonEl.isExisting()) &&
            (await buttonEl.getAttribute('data-selected')) === 'true'
        );
    }

    /**
     * Returns true when the specific day element in right month is selected.
     * @method
     * @returns {string}
     */
    async isRightMonthDayEnabled(day) {
        const buttonEl = await $(this.rootElement)
            .$$('table[role=grid]')[1]
            .$(`button=${day}`);
        return buttonEl.isExisting();
    }

    /**
     * Returns true when the year select element in right month has focus.
     * @method
     * @returns {bool}
     */
    async isRightYearSelectFocused() {
        const selectEl = (await $(this.rootElement).$$('select'))[1];
        return (await selectEl.isExisting()) && (await selectEl.isFocused());
    }
}

module.exports = PageDoubleCalendar;
