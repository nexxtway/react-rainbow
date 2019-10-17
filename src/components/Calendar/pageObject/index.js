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
            .$('select#select-1')
            .click();
    }

    /**
     * Clicks the specific day button element.
     * @method
     */
    clickDay(day) {
        const buttonEl = $(this.rootElement).$$('button:not(data-id=button-icon-element)')[day];
        buttonEl.click();
    }

    /**
     * Set focus on the select year element.
     * @method
     */
    focusSelectYear() {
        this.clickSelectYear();
        this.clickSelectYear();
    }

    /**
     * Returns true when the prev month button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusPrevMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[1]
            .isFocused();
    }

    /**
     * Returns true when the next month button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusNextMonthButton() {
        $(this.rootElement)
            .$$('button[data-id=button-icon-element]')[1]
            .isFocused();
    }

    /**
     * Returns true when the select year element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusSelectYear() {
        $(this.rootElement)
            .$('select#select-1')
            .isFocused();
    }

    /**
     * Returns the text of the current selected month element.
     * @method
     * @returns {string}
     */
    getSelectedMonth() {
        return $(this.rootElement)
            .$('h3#month')
            .getText();
    }

    /**
     * Returns the value of the select year element.
     * @method
     * @returns {string}
     */
    getSelectedYear() {
        return $(this.rootElement)
            .$('select#select-1')
            .getValue();
    }

    /**
     * Returns the text of the current selected day element.
     * @method
     * @returns {string}
     */
    getSelectedDay() {
        return $(this.rootElement)
            .$('button:not(data-id=button-icon-element)')
            .getText();
    }
}

module.exports = PageCalendar;
