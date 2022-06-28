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
    async click() {
        await $(this.rootElement)
            .$('[data-id="vertical-overflow-button"]')
            .click();
    }

    /**
     * Returns true when the overflow section is visible, false otherwise.
     * @method
     * @returns {bool}
     */
    async isExpanded() {
        return $(this.rootElement)
            .$('[data-id="vertical-overflow"]')
            .isDisplayed();
    }

    /**
     * Wait until the expand transition has finished.
     * @method
     */
    async waitUntilExpand() {
        await browser.waitUntil(async () => this.isExpanded());
    }

    /**
     * Wait until the contract transition has finished.
     * @method
     */
    async waitUntilCollapse() {
        await browser.waitUntil(async () => !(await this.isExpanded()));
    }

    /**
     * Returns true when the vertical section overflow button has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusButton() {
        return $(this.rootElement)
            .$('[data-id="vertical-overflow-button"]')
            .isFocused();
    }
}

module.exports = PageVerticalSectionOverflow;
