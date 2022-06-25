/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
const timePickerModalId = '#time-picker_modal';
const timeInputId = '#time-picker_time-input';

/**
 * TimePicker page object class.
 * @class
 * @tutorial timePicker
 */
class PageTimePicker {
    /**
     * Create a new TimePicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the TimePicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the input element.
     * @method
     */
    async clickTimeInput() {
        await $(this.rootElement)
            .$(timeInputId)
            .$('input')
            .click();
    }

    /**
     * Clicks the label element.
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the up button element.
     * @method
     */
    async clickUpButton() {
        await $(timePickerModalId)
            .$('button[id="time-picker_up-button"]')
            .click();
    }

    /**
     * Clicks the down button element.
     * @method
     */
    async clickDownButton() {
        await $(timePickerModalId)
            .$('button[id="time-picker_down-button"]')
            .click();
    }

    /**
     * Clicks the cancel button element.
     * @method
     */
    async clickCancelButton() {
        await $(timePickerModalId)
            .$('button[id="time-picker_cancel-button"]')
            .click();
    }

    /**
     * Clicks the OK button element.
     * @method
     */
    async clickOkButton() {
        await $(timePickerModalId)
            .$('button[id="time-picker_ok-button"]')
            .click();
    }

    /**
     * Returns true when the TimePicker is open.
     * @method
     * @returns {bool}
     */
    async isOpen() {
        return (
            (await $(timePickerModalId).isDisplayed()) &&
            (await (await $(timePickerModalId).$(
                'button[id="time-picker_cancel-button"]',
            )).isDisplayed()) &&
            (await (await $(timePickerModalId).$(
                'button[id="time-picker_ok-button"]',
            )).isDisplayed()) &&
            (await (await $(timePickerModalId).$(
                'button[id="time-picker_up-button"]',
            )).isDisplayed()) &&
            (await (await $(timePickerModalId).$(
                'button[id="time-picker_down-button"]',
            )).isDisplayed()) &&
            (await (await $(timePickerModalId).$('input[data-id="minutes"]')).isDisplayed()) &&
            (await (await $(timePickerModalId).$('input[data-id="hour"]')).isDisplayed()) &&
            (await (await $(timePickerModalId).$(
                'input[aria-label="am-pm selector"]',
            )).isDisplayed())
        );
    }

    /**
     * Get the TimePicker value.
     * @method
     * @returns {string}
     */
    async getTimeValue() {
        return $(this.rootElement)
            .$(timeInputId)
            .$('input')
            .getValue();
    }

    /**
     * Returns true when the TimePicker has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusTimeInput() {
        return $(this.rootElement)
            .$(timeInputId)
            .$('input')
            .isFocused();
    }

    /**
     * Returns true when the hour input has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusHourInput() {
        return $(timePickerModalId)
            .$('input[data-id="hour"]')
            .isFocused();
    }

    /**
     * Get the hour input value.
     * @method
     * @returns {string}
     */
    async getHourValue() {
        return $(timePickerModalId)
            .$('input[data-id="hour"]')
            .getValue();
    }

    /**
     * Returns true when the minutes input has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusMinutesInput() {
        return $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .isFocused();
    }

    /**
     * Get the minutes input value.
     * @method
     * @returns {string}
     */
    async getMinutesValue() {
        return $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .getValue();
    }

    /**
     * Returns true when the am-pm selector has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusAmPmSelect() {
        return $(timePickerModalId)
            .$('fieldset[role="presentation"]')
            .isFocused();
    }

    /**
     * Returns true when the am input is selected.
     * @method
     * @returns {bool}
     */
    async isAmSelected() {
        await browser.waitUntil(async () =>
            $(timePickerModalId)
                .$('fieldset[role="presentation"]')
                .isFocused(),
        );
        return $(timePickerModalId)
            .$('input[value="AM"]')
            .isSelected();
    }

    /**
     * Returns true when the pm input is selected.
     * @method
     * @returns {bool}
     */
    async isPmSelected() {
        await browser.waitUntil(async () =>
            $(timePickerModalId)
                .$('fieldset[role="presentation"]')
                .isFocused(),
        );
        return $(timePickerModalId)
            .$('input[value="PM"]')
            .isSelected();
    }

    /**
     * Type in the hour input element.
     * @method
     * @param {string} value - The value to type in the hour input element.
     */
    async setHourValue(value) {
        await $(timePickerModalId)
            .$('input[data-id="hour"]')
            .setValue(value);
    }

    /**
     * Type in the minutes input element.
     * @method
     * @param {string} value - The value to type in the minutes input element.
     */
    async setMinutesValue(value) {
        await $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .setValue(value);
    }

    /**
     * Wait until the TimePicker is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => this.isOpen());
    }

    /**
     * Wait until the TimePicker is close.
     * @method
     */
    async waitUntilClose() {
        await browser.waitUntil(async () => !(await this.isOpen()));
    }
}

module.exports = PageTimePicker;
