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
            .$('input[aria-label="am-pm selector"]')
            .getValue();

        return hour && minutes && meridian ? `${hour}:${minutes} ${meridian}` : '';
    }
}

module.exports = PageTimeSelect;
