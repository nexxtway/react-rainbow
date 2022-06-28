/* eslint-disable no-return-await */
const PageCalendar = require('../../Calendar/pageObject');
const PageTimeSelect = require('./pageTimeSelect');

/**
 * DateTimePicker page object class.
 * @class
 * @tutorial datetimepicker
 */
class PageDateTimePicker {
    /**
     * Create a new PageDateTimePicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageDateTimePicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.modalRootEl = `${rootElement}_modal`;
    }

    /**
     * Returns the selected time value.
     * @method
     * @returns {string}
     */
    async getTimeValue() {
        return new PageTimeSelect(this.modalRootEl).getValue();
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
        const calendar = await PageCalendar(this.modalRootEl);
        await calendar.clickDay(day);
    }

    /**
     * Clicks the OK button element
     * @method
     */
    async clickOKButton() {
        await $(this.modalRootEl)
            .$('button[id="time-picker_ok-button"]')
            .click();
    }

    /**
     * Clicks the Cancel button element
     * @method
     */
    async clickCancelButton() {
        await $(this.modalRootEl)
            .$('button[id="time-picker_cancel-button"]')
            .click();
    }

    /**
     * Returns true when the picker modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isOpen() {
        return (
            (await $(this.modalRootEl).isDisplayed()) &&
            (await $(this.modalRootEl)
                .$('button[id="time-picker_ok-button"]')
                .isDisplayed()) &&
            (await $(this.modalRootEl)
                .$('button[id="time-picker_cancel-button"]')
                .isDisplayed())
        );
    }

    /**
     * Wait until the modal is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => await this.isOpen());
    }

    /**
     * Wait until the modal is closed.
     * @method
     */
    async waitUntilClose() {
        await browser.waitUntil(async () => !(await this.isOpen()));
    }
}

module.exports = PageDateTimePicker;
