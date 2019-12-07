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
    click() {
        $(this.rootElement).click();
    }

    /**
     * It moves the pointer over the menu item.
     * @method
     */
    hover() {
        const itemElement = $(`${this.rootElement} > div[role="option"]`);
        itemElement.moveTo();
    }

    /**
     * Returns true when the menu item is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return (
            $(this.rootElement)
                .$('[role="option"]')
                .getAttribute('aria-selected') === 'true'
        );
    }

    /**
     * Returns true when the menu item is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    isVisible() {
        return $(this.rootElement).isDisplayedInViewport();
    }

    /**
     *  Wait until the option is visible.
     * @method
     */
    waitUntilIsVisible() {
        browser.waitUntil(() => this.isVisible());
    }
}

module.exports = PageLookupMenuItem;
