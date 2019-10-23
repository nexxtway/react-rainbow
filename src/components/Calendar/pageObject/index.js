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
     * Clicks the specific day button element.
     * @method
     */
    clickDay(day) {
        const buttonEl = $(this.rootElement)
            .$('table')
            .$$('button')[day - 1];
        buttonEl.click();
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
}

module.exports = PageCalendar;
