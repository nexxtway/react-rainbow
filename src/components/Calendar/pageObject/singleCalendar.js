/**
 * Calendar page object class.
 * @class
 * @tutorial calendar
 */
class PageSingleCalendar {
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
     * Clicks the select year element.
     * @method
     */
    async clickSelectYear() {
        await $(this.rootElement)
            .$('select')
            .click();
    }

    /**
     * Clicks the specific enabled day button element.
     * @method
     */
    async clickDay(day) {
        const buttonEl = await $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        if (await buttonEl.isExisting()) await buttonEl.click();
    }

    /**
     * Returns the text of the current selected month element.
     * @method
     * @returns {string}
     */
    async getSelectedMonth() {
        return $(this.rootElement)
            .$('h3[data-id=month]')
            .getText();
    }

    /**
     * Returns the value of the select year element.
     * @method
     * @returns {string}
     */
    async getSelectedYear() {
        return $(this.rootElement)
            .$('select')
            .getValue();
    }

    /**
     * Returns the text of the current selected day element.
     * @method
     * @returns {string}
     */
    async getSelectedDay() {
        return $(this.rootElement)
            .$('button[data-selected=true]')
            .getText();
    }

    /**
     * Returns true when the specific day element is selected.
     * @method
     * @returns {string}
     */
    async isDaySelected(day) {
        const buttonEl = await $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        return (
            (await buttonEl.isExisting()) &&
            (await buttonEl.getAttribute('data-selected')) === 'true'
        );
    }

    /**
     * Returns true when the specific day element is selected.
     * @method
     * @returns {string}
     */
    async isDayEnabled(day) {
        const spanEl = await $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        return spanEl.isExisting();
    }

    /**
     * Set the value of the year select element
     * @method
     * @param {string}
     */
    async setYear(value) {
        await $(this.rootElement)
            .$('select')
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the specific day button element has focus.
     * @method
     * @returns {bool}
     */
    async isDayFocused(day) {
        const buttonEl = await $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        // eslint-disable-next-line no-return-await
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
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
        // eslint-disable-next-line no-return-await
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the next month button element has focus.
     * @method
     * @returns {bool}
     */
    async isNextMonthButtonFocused() {
        const buttonEl = (await $(this.rootElement).$$('button[data-id=button-icon-element]'))[1];
        // eslint-disable-next-line no-return-await
        return (await buttonEl.isExisting()) && (await buttonEl.isFocused());
    }

    /**
     * Returns true when the year select element has focus.
     * @method
     * @returns {bool}
     */
    async isYearSelectFocused() {
        const selectEl = await $(this.rootElement).$('select');
        // eslint-disable-next-line no-return-await
        return (await selectEl.isExisting()) && (await selectEl.isFocused());
    }
}

module.exports = PageSingleCalendar;
