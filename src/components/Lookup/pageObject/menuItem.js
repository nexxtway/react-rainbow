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
     * Returns true when the menu item is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return (
            $(this.rootElement).getAttribute('class') ===
            'rainbow-lookup_menu-item rainbow-lookup_menu-item--active'
        );
    }

    /**
     * It moves the pointer over the menu item.
     * @method
     */
    hover() {
        const itemElement = $(`${this.rootElement} > a`);
        itemElement.moveTo();
    }
}

module.exports = PageLookupMenuItem;
