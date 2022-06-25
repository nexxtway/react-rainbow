const PagePrimitiveMenu = require('../../PrimitiveMenu/pageObject');

/**
 * ButtonMenu page object class.
 * @class
 * @tutorial buttonMenu
 */
class PageButtonMenu {
    /**
     * Create a new ButtonMenu page object.
     * @constructor
     * @param {string} rootElement - The selector of the ButtonMenu root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.primitiveMenu = new PagePrimitiveMenu(`${rootElement} button`);
    }

    /**
     * Returns a new MenuItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the MenuItem.
     */
    async getItem(itemPosition) {
        return this.primitiveMenu.getItem(itemPosition);
    }

    /**
     * Clicks the button element.
     * @method
     */
    async click() {
        await this.primitiveMenu.clickTrigger();
    }

    /**
     * Returns true when the menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isOpen() {
        return this.primitiveMenu.isDropdownOpen();
    }

    /**
     * Returns true when the button element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusButton() {
        return this.primitiveMenu.hasFocusTrigger();
    }
}

module.exports = PageButtonMenu;
