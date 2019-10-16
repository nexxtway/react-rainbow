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
            .$('.rainbow-calendar_month-container')
            .$$('button')[0]
            .click();
    }

    /**
     * Clicks the next month button element.
     * @method
     */
    clickNextMonthButton() {
        $(this.rootElement)
            .$('.rainbow-calendar_month-container')
            .$$('button')[1]
            .click();
    }

    /**
     * Clicks the select year element.
     * @method
     */
    clickSelectYear() {
        $(this.rootElement)
            .$('select.rainbow-select')
            .click();
    }

    /**
     * Clicks the specific day button element.
     * @method
     */
    clickDay(day) {
        const buttonEl = $(this.rootElement).$$('button.rainbow-calendar_day-button')[day];
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
            .$('.rainbow-calendar_month-container')
            .$$('button')[0]
            .isFocused();
    }

    /**
     * Returns true when the next month button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusNextMonthButton() {
        $(this.rootElement)
            .$('.rainbow-calendar_month-container')
            .$$('button')[1]
            .isFocused();
    }

    /**
     * Returns true when the select year element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusSelectYear() {
        $(this.rootElement)
            .$('select.rainbow-select')
            .isFocused();
    }

    /**
     * Returns the text of the current selected month element.
     * @method
     * @returns {string}
     */
    getSelectedMonth() {
        return $(this.rootElement)
            .$('h3.rainbow-calendar_month-text')
            .getText();
    }

    /**
     * Returns the value of the select year element.
     * @method
     * @returns {string}
     */
    getSelectedYear() {
        return $(this.rootElement)
            .$('select.rainbow-select')
            .getValue();
    }

    /**
     * Returns the text of the current selected day element.
     * @method
     * @returns {string}
     */
    getSelectedDay() {
        return $(this.rootElement)
            .$('button.rainbow-calendar_day-button.rainbow-calendar_day-button--selected')
            .getText();
    }
}

module.exports = PageCalendar;
