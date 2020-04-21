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
    clickPrevMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[0]
            .click();
    }

    /**
     * Clicks the next month button element.
     * @method
     */
    clickNextMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[1]
            .click();
    }

    /**
     * Clicks the select year element.
     * @method
     */
    clickSelectYear() {
        $(this.rootElement)
            .$('select')
            .click();
    }

    /**
     * Returns the text of the current selected month element.
     * @method
     * @returns {string}
     */
    getSelectedMonth() {
        return $(this.rootElement)
            .$('h3[data-id=month]')
            .getText();
    }

    /**
     * Returns the value of the select year element.
     * @method
     * @returns {string}
     */
    getSelectedYear() {
        return $(this.rootElement)
            .$('select')
            .getValue();
    }

    /**
     * Set the value of the year select element
     * @method
     * @param {string}
     */
    setYear(value) {
        $(this.rootElement)
            .$('select')
            .selectByVisibleText(value);
    }

    /**
     * Returns true when the previous month button element is disabled.
     * @method
     * @returns {bool}
     */
    isPrevMonthButtonDisabled() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[0];
        return !buttonEl.isEnabled();
    }

    /**
     * Returns true when the next month button element is disabled.
     * @method
     * @returns {bool}
     */
    isNextMonthButtonDisabled() {
        const buttonEl = $(this.rootElement).$$('button[data-id=button-icon-element]')[1];
        return !buttonEl.isEnabled();
    }
}

module.exports = PageMonthlyCalendar;
