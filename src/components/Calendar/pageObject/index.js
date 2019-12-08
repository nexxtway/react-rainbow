/**
 * Calendar page object class.
 * @class
 * @tutorial calendar
 */
class PageCalendar {
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
     * Clicks the specific enabled day button element.
     * @method
     */
    clickDay(day) {
        const buttonEl = $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        if (buttonEl.isExisting()) buttonEl.click();
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
     * Returns the text of the current selected day element.
     * @method
     * @returns {string}
     */
    getSelectedDay() {
        return $(this.rootElement)
            .$('button[data-selected=true]')
            .getText();
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
     * Returns true when the specific day button element has focus.
     * @method
     * @returns {bool}
     */
    isDayFocused(day) {
        const buttonEl = $(this.rootElement)
            .$('table')
            .$(`button=${day}`);
        if (!buttonEl.isExisting()) return false;
        return buttonEl.isFocused();
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

module.exports = PageCalendar;
