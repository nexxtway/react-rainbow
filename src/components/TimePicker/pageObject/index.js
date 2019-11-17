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
    clickTimeInput() {
        $(this.rootElement)
            .$(timeInputId)
            .$('input')
            .click();
    }

    /**
     * Clicks the label element.
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the up button element.
     * @method
     */
    clickUpButton() {
        $(timePickerModalId)
            .$('button[id="time-picker_up-button"]')
            .click();
    }

    /**
     * Clicks the down button element.
     * @method
     */
    clickDownButton() {
        $(timePickerModalId)
            .$('button[id="time-picker_down-button"]')
            .click();
    }

    /**
     * Clicks the cancel button element.
     * @method
     */
    clickCancelButton() {
        $(timePickerModalId)
            .$('button[id="time-picker_cancel-button"]')
            .click();
    }

    /**
     * Clicks the OK button element.
     * @method
     */
    clickOkButton() {
        $(timePickerModalId)
            .$('button[id="time-picker_ok-button"]')
            .click();
    }

    /**
     * Returns true when the TimePicker is open.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return (
            $(timePickerModalId).isDisplayed() &&
            $(timePickerModalId)
                .$('button[id="time-picker_cancel-button"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('button[id="time-picker_ok-button"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('button[id="time-picker_up-button"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('button[id="time-picker_down-button"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('input[data-id="minutes"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('input[data-id="hour"]')
                .isDisplayed() &&
            $(timePickerModalId)
                .$('input[aria-label="am-pm selector"]')
                .isDisplayed()
        );
    }

    /**
     * Get the TimePicker value.
     * @method
     * @returns {string}
     */
    getTimeValue() {
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
    hasFocusTimeInput() {
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
    hasFocusHourInput() {
        return $(timePickerModalId)
            .$('input[data-id="hour"]')
            .isFocused();
    }

    /**
     * Get the hour input value.
     * @method
     * @returns {string}
     */
    getHourValue() {
        return $(timePickerModalId)
            .$('input[data-id="hour"]')
            .getValue();
    }

    /**
     * Returns true when the minutes input has focus.
     * @method
     * @returns {bool}
     */
    hasFocusMinutesInput() {
        return $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .isFocused();
    }

    /**
     * Get the minutes input value.
     * @method
     * @returns {string}
     */
    getMinutesValue() {
        return $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .getValue();
    }

    /**
     * Returns true when the am-pm selector has focus.
     * @method
     * @returns {bool}
     */
    hasFocusAmPmSelect() {
        return $(timePickerModalId)
            .$('fieldset[role="presentation"]')
            .isFocused();
    }

    /**
     * Returns true when the am input is selected.
     * @method
     * @returns {bool}
     */
    isAmSelected() {
        browser.waitUntil(() =>
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
    isPmSelected() {
        browser.waitUntil(() =>
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
    setHourValue(value) {
        $(timePickerModalId)
            .$('input[data-id="hour"]')
            .setValue(value);
    }

    /**
     * Type in the minutes input element.
     * @method
     * @param {string} value - The value to type in the minutes input element.
     */
    setMinutesValue(value) {
        $(timePickerModalId)
            .$('input[data-id="minutes"]')
            .setValue(value);
    }

    /**
     * Wait until the TimePicker is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Wait until the TimePicker is close.
     * @method
     */
    waitUntilClose() {
        browser.waitUntil(() => !this.isOpen());
    }
}

module.exports = PageTimePicker;
