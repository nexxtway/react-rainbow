/**
 * MonthlyCalendar page object class.
 * @class
 * @tutorial Monthcalendar
 */
class PageMonthlyCalendar {
    /**
     * Create a new PageMonthlyCalendar page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageMonthlyCalendar root element.
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
}

module.exports = PageMonthlyCalendar;
