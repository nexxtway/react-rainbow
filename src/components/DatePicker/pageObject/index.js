/* eslint-disable no-return-await */
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
        this.calendarRootEl = `${rootElement}_modal_calendar`;
    }

    /**
     * Returns the value of the input element.
     * @method
     * @returns {string}
     */
    async getValue() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .getValue();
    }

    /**
     * Clicks the input element.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Clicks the input label element.
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the calendar specific day button element.
     * @method
     */
    async clickDay(day) {
        const calendar = await PageCalendar(this.calendarRootEl);
        await calendar.clickDay(day);
    }

    /**
     * Returns true when the DatePicker modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isOpen() {
        return (
            (await $(this.modalRootEl).isDisplayed()) &&
            (await $(this.modalRootEl)
                .$('h1')
                .isDisplayed()) &&
            (await $(this.modalRootEl)
                .$('select')
                .isDisplayed())
        );
    }

    /**
     * Returns true when the DatePicker has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusInput() {
        return (await $(this.rootElement).$('input[type="text"]')).isFocused();
    }

    /**
     * Returns the date displayed on top of the DatePicker.
     * @method
     * @returns {string}
     */
    async getDate() {
        return $(this.modalRootEl)
            .$('h1')
            .getText();
    }

    /**
     * Wait until the DatePicker modal is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => await this.isOpen());
    }

    /**
     * Wait until the DatePicker modal is closed.
     * @method
     */
    async waitUntilClose() {
        await browser.waitUntil(async () => !(await this.isOpen()));
    }
}

module.exports = PageDatePicker;
