/**
 * Indicator page object class.
 * @class
 */
class PageCarouselCardIndicator {
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
    async click() {
        await $(this.rootElement)
            .$('button')
            .click();
    }

    /**
     * Returns true when the indicator item has focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        return $(this.rootElement)
            .$('button')
            .isFocused();
    }

    /**
     * Returns true when the indicator is selected.
     * @method
     * @returns {bool}
     */
    async isSelected() {
        return (
            (await $(this.rootElement)
                .$('button')
                .getAttribute('aria-selected')) === 'true'
        );
    }
}

module.exports = PageCarouselCardIndicator;
