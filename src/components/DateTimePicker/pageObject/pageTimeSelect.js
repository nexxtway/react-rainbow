/**
 * TimeSelect page object class.
 * @class
 * @tutorial datetimepicker
 */
class PageTimeSelect {
    /**
     * Create a new PageTimeSelect page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageTimeSelect root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the OK button element
     * @method
     */
    clickOKButton() {
        $(this.rootElement)
            .$('button[id=time-picker_cancel-button]')
            .click();
    }

    /**
     * Clicks the Cancel button element
     * @method
     */
    clickCancelButton() {
        $(this.rootElement)
            .$('button[id=time-picker_ok-button]')
            .click();
    }

    /**
     * Returns the text representing the current selected time.
     * @method
     * @returns {string}
     */
    getValue() {
        const hour = $(this.rootElement)
            .$('input[data-id=hour]')
            .getValue();
        const minutes = $(this.rootElement)
            .$('input[data-id=minutes]')
            .getValue();
        const meridian = $(this.rootElement)
            .$('input[data-id=input-element]')
            .getValue();

        return hour && minutes && meridian ? `${hour}:${minutes} ${meridian}` : '';
    }
}

module.exports = PageTimeSelect;
