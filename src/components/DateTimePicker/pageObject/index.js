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
    getTimeValue() {
        return new PageTimeSelect(this.modalRootEl).getValue();
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
        new PageCalendar(this.modalRootEl).clickDay(day);
    }

    /**
     * Clicks the OK button element
     * @method
     */
    clickOKButton() {
        $(this.modalRootEl)
            .$('button[id="time-picker_ok-button"]')
            .click();
    }

    /**
     * Clicks the Cancel button element
     * @method
     */
    clickCancelButton() {
        $(this.modalRootEl)
            .$('button[id="time-picker_cancel-button"]')
            .click();
    }

    /**
     * Returns true when the picker modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return (
            $(this.modalRootEl).isDisplayed() &&
            $(this.modalRootEl)
                .$('button[id="time-picker_ok-button"]')
                .isDisplayed() &&
            $(this.modalRootEl)
                .$('button[id="time-picker_cancel-button"]')
                .isDisplayed()
        );
    }

    /**
     * Wait until the modal is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Wait until the modal is closed.
     * @method
     */
    waitUntilClose() {
        browser.waitUntil(() => !this.isOpen());
    }
}

module.exports = PageDateTimePicker;
