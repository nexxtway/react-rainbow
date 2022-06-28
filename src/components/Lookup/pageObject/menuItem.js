/**
 * LookupMenuItem page object class.
 * @class
 */
class PageLookupMenuItem {
    /**
     * Create a new LookupMenuItem page object.
     * @constructor
     * @param {string} rootElement - The selector of the LookupMenuItem root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the menu item.
     * @method
     */
    async click() {
        await this.rootElement.click();
    }

    /**
     * It moves the pointer over the menu item.
     * @method
     */
    async hover() {
        const itemElement = await this.rootElement.$('div[role="option"]');
        await itemElement.scrollIntoView();
        await itemElement.moveTo();
    }

    /**
     * Returns true when the menu item is active.
     * @method
     * @returns {bool}
     */
    async isActive() {
        return (
            (await this.rootElement.$('[role="option"]').getAttribute('aria-selected')) === 'true'
        );
    }

    /**
     * Returns true when the menu item is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    async isVisible() {
        return this.rootElement.isDisplayedInViewport();
    }

    /**
     *  Wait until the option is visible.
     * @method
     */
    async waitUntilIsVisible() {
        await browser.waitUntil(async () => this.isVisible());
    }
}

module.exports = PageLookupMenuItem;
