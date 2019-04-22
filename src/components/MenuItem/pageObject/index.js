/**
 * MenuItem page object class.
 * @class
 */
class PageMenuItem {
    /**
     * Create a new MenuItem page object.
     * @constructor
     * @param {string} rootElement - The selector of the MenuItem root element.
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
     * Returns true when the menu item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement).$('[role="menuitem"]').isFocused();
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

module.exports = PageMenuItem;
