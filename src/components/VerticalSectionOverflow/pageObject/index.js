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
        $(this.rootElement)
            .$('[data-id="vertical-overflow-button"]')
            .click();
    }

    /**
     * Returns true when the overflow section is visible, false otherwise.
     * @method
     * @returns {bool}
     */
    isExpanded() {
        return $(this.rootElement)
            .$('[data-id="vertical-overflow"]')
            .isDisplayed();
    }

    /**
     * Wait until the expand transition has finished.
     * @method
     */
    waitUntilExpand() {
        browser.waitUntil(() => this.isExpanded());
    }

    /**
     * Wait until the contract transition has finished.
     * @method
     */
    waitUntilCollapse() {
        browser.waitUntil(() => !this.isExpanded());
    }

    /**
     * Returns true when the vertical section overflow button has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButton() {
        return $(this.rootElement)
            .$('[data-id="vertical-overflow-button"]')
            .isFocused();
    }
}

module.exports = PageVerticalSectionOverflow;
