/**
 * Indicator page object class.
 * @class
 */
class PageIndicator {
    /**
     * Create a new Indicator page object.
     * @constructor
     * @param {string} rootElement - The selector of the Indicator root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the indicator item.
     * @method
     */
    click() {
        // $(this.rootElement).click();
        this.rootElement.click();
    }

    /**
     * Returns true when the indicator item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        // return $(this.rootElement).hasFocus();
        return this.rootElement.hasFocus();
    }

    /**
     * Returns true when the indicator is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        // return $(this.rootElement).getAttribute('class') === 'rainbow-carousel_indicator rainbow-carousel_indicator--active';
        return this.rootElement.getAttribute('class') === 'rainbow-carousel_indicator rainbow-carousel_indicator--active';
    }
}

module.exports = PageIndicator;
