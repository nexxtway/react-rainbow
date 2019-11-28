const PageCalendar = require('../../Calendar/pageObject');

/**
 * DatePicker page object class.
 * @class
 * @tutorial datepicker
 */
class PageDatePicker {
    /**
     * Create a new PageDatePicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageDatePicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.modalRootEl = `${rootElement}_modal`;
        this.calendarRootEl = `${rootElement}_calendar`;
    }

    /**
     * Returns the value of the input element.
     * @method
     * @returns {string}
     */
    getValue() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .getValue();
    }

    /**
     * Clicks the input element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Clicks the input label element.
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the calendar specific day button element.
     * @method
     */
    clickDay(day) {
        new PageCalendar(this.calendarRootEl).clickDay(day);
    }

    /**
     * Returns true when the DatePicker modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return (
            $(this.modalRootEl).isDisplayed() &&
            $(this.modalRootEl)
                .$('h1')
                .isDisplayed() &&
            $(this.modalRootEl)
                .$('select')
                .isDisplayed()
        );
    }

    /**
     * Returns true when the DatePicker has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * Returns the date displayed on top of the DatePicker.
     * @method
     * @returns {string}
     */
    getDate() {
        return $(this.modalRootEl)
            .$('h1')
            .getText();
    }

    /**
     * Wait until the DatePicker modal is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Wait until the DatePicker modal is closed.
     * @method
     */
    waitUntilClose() {
        browser.waitUntil(() => !this.isOpen());
    }
}

module.exports = PageDatePicker;
