/**
 * VerticalSectionOverflow page object class.
 * @class
 */
class PageVerticalSectionOverflow {
    /**
     * Create a new VerticalSectionOverflow page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalSectionOverflow root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the vertical section overflow button.
     * @method
     */
    click() {
        $(this.rootElement).$('.rainbow-vertical-section-overflow_button').click();
    }

    /**
     * Returns true when the overflow section is visible, false otherwise.
     * @method
     * @returns {bool}
     */
    isVerticalOverflowVisible() {
        return $(this.rootElement).$('[data-id="vertical-overflow"]').isVisible();
    }

    /**
     * Returns true when the vertical section overflow button has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButton() {
        return $(this.rootElement).$('.rainbow-vertical-section-overflow_button').hasFocus();
    }
}

module.exports = PageVerticalSectionOverflow;
