/* eslint-disable class-methods-use-this */
const PagePrimitiveMenu = require('../../PrimitiveMenu/pageObject');
// const PageMenuItem = require('../../MenuItem/pageObject');

/**
 * AvatarMenu page object class.
 * @class
 * @tutorial avatarMenu
 */
class PageAvatarMenu {
    /**
     * Create a new AvatarMenu page object.
     * @constructor
     * @param {string} rootElement - The selector of the AvatarMenu root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
        this.primitiveMenu = new PagePrimitiveMenu(
            `${rootElement} button[data-id="avatar-menu-button"]`,
        );
    }

    /**
     * Returns a new AvatarMenu page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the MenuItem.
     */
    getItem(itemPosition) {
        return this.primitiveMenu.getItem(itemPosition);
    }

    /**
     * Clicks the button element.
     * @method
     */
    click() {
        this.primitiveMenu.clickTrigger();
    }

    /**
     * Returns true when the menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return this.primitiveMenu.isDropdownOpen();
    }

    /**
     * Returns true when the button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButton() {
        return this.primitiveMenu.hasFocusTrigger();
    }
}

module.exports = PageAvatarMenu;
