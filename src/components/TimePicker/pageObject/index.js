const PageModal = require('../../Modal/pageObject');

/**
 * TimePicker page object class.
 * @class
 * @tutorial picklist
 */
class PageTimePicker {
    /**
     * Create a new TimePicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the TimePicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.timePickerModal = '#time-picker_modal';
    }

    /**
     * Clicks the input element.
     * @method
     */
    click() {
        $(this.rootElement)
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
        $(this.timePickerModal)
            .$('button[id="time-picker_up-button"]')
            .click();
    }

    /**
     * Clicks the down button element.
     * @method
     */
    clickDownButton() {
        $(this.timePickerModal)
            .$('button[id="time-picker_down-button"]')
            .click();
    }

    /**
     * Clicks the cancel button element.
     * @method
     */
    clickCancelButton() {
        $(this.timePickerModal)
            .$('button[id="time-picker_cancel-button"]')
            .click();
    }

    /**
     * Clicks the OK button element.
     * @method
     */
    clickOkButton() {
        $(this.timePickerModal)
            .$('button[id="time-picker_ok-button"]')
            .click();
    }

    /**
     * Returns true when the TimePicker is open.
     * @method
     * @returns {bool}
     */
    isTimePickerOpen() {
        return new PageModal(this.timePickerModal).isOpen();
    }

    /**
     * Get the TimePicker value.
     * @method
     * @returns {string}
     */
    getTimePickerValue() {
        return $(this.rootElement)
            .$('input')
            .getValue();
    }

    /**
     * Returns true when the TimePicker has focus.
     * @method
     * @returns {bool}
     */
    hasFocusTimePicker() {
        return $(this.rootElement)
            .$('input')
            .isFocused();
    }

    /**
     * Returns true when the hour input has focus.
     * @method
     * @returns {bool}
     */
    hasFocusHourInput() {
        return $(this.timePickerModal)
            .$('input[data-id="hour"]')
            .isFocused();
    }

    /**
     * Get the hour input value.
     * @method
     * @returns {string}
     */
    getHourValue() {
        return $(this.timePickerModal)
            .$('input[data-id="hour"]')
            .getValue();
    }

    /**
     * Returns true when the minutes input has focus.
     * @method
     * @returns {bool}
     */
    hasFocusMinutesInput() {
        return $(this.timePickerModal)
            .$('input[data-id="minutes"]')
            .isFocused();
    }

    /**
     * Get the minutes input value.
     * @method
     * @returns {string}
     */
    getMinutesValue() {
        return $(this.timePickerModal)
            .$('input[data-id="minutes"]')
            .getValue();
    }

    /**
     * Returns true when the am-pm selector has focus.
     * @method
     * @returns {bool}
     */
    hasFocusAmPmSelect() {
        return $(this.timePickerModal)
            .$('fieldset[data-id="fieldset-element"]')
            .isFocused();
    }

    /**
     * Returns true when the am input is selected.
     * @method
     * @returns {bool}
     */
    isAmInputSelected() {
        browser.waitUntil(() =>
            $(this.timePickerModal)
                .$('fieldset[data-id="fieldset-element"]')
                .isFocused(),
        );
        return $(this.timePickerModal)
            .$$('input[type="radio"]')[0]
            .isSelected();
    }

    /**
     * Returns true when the pm input is selected.
     * @method
     * @returns {bool}
     */
    isPmInputSelected() {
        browser.waitUntil(() =>
            $(this.timePickerModal)
                .$('fieldset[data-id="fieldset-element"]')
                .isFocused(),
        );
        return $(this.timePickerModal)
            .$$('input[type="radio"]')[1]
            .isSelected();
    }

    /**
     * Type in the hour input element.
     * @method
     * @param {string} value - The value to type in the hour input element.
     */
    setHourValue(value) {
        $(this.timePickerModal)
            .$('input[data-id="hour"]')
            .setValue(value);
    }

    /**
     * Type in the minutes input element.
     * @method
     * @param {string} value - The value to type in the minutes input element.
     */
    setMinutesValue(value) {
        $(this.timePickerModal)
            .$('input[data-id="minutes"]')
            .setValue(value);
    }

    /**
     * Wait until the TimePicker is open.
     * @method
     */
    waitUntilOpen() {
        new PageModal(this.timePickerModal).waitUntilOpen();
        browser.waitUntil(() => this.isTimePickerOpen());
    }

    /**
     * Wait until the TimePicker is close.
     * @method
     */
    waitUntilClose() {
        return new PageModal(this.timePickerModal).waitUntilClose();
    }
}

module.exports = PageTimePicker;
