const PageMenuItem = require('../../MenuItem/pageObject');

/**
 * AvatarMenu page object class.
 * @class
 * @tutorial avatarMenu
 */
class PageButtonMenu {
    /**
     * Create a new AvatarMenu page object.
     * @constructor
     * @param {string} rootElement - The selector of the AvatarMenu root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new AvatarMenu page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the MenuItem.
     */
    getItem(itemPosition) {
        const menuItems = $(this.rootElement).$$('li[role="menuitem"]');
        const buttonMenuItems = $(this.rootElement).$$('ul > *');
        if (menuItems[itemPosition]) {
            const indexPosition = buttonMenuItems.findIndex(
                element => element.ELEMENT === menuItems[itemPosition].ELEMENT,
            );
            return new PageMenuItem(
                `${this.rootElement} li[role="menuitem"]:nth-child(${indexPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Clicks the button element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('button[data-id="avatar-menu-button"]')
            .click();
    }

    /**
     * Returns true when the menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return $(this.rootElement)
            .$('div[data-id="primitive-menu_dropdown"]')
            .isDisplayed();
    }

    /**
     * Returns true when the button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButton() {
        return $(this.rootElement)
            .$('button')
            .isFocused();
    }
}

module.exports = PageButtonMenu;
