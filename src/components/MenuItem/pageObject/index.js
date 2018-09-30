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
     * Returns true when the menu item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement).$('[role="menuitem"]').hasFocus();
    }

    /**
     * It moves the pointer over the menu item.
     * @method
     */
    hover() {
        browser.moveToObject(`${this.rootElement}`);
    }
}

module.exports = PageMenuItem;
