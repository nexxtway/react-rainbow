const PageMenuItem = require('../../MenuItem/pageObject');

/**
 * PrimitiveMenu page object class.
 * @class
 */
class PagePrimitiveMenu {
    /**
     * Create a new PrimitiveMenu page object.
     * @constructor
     * @param {string} rootElement - The selector of the PrimitiveMenu root element.
     */
    constructor(triggerElement, dropdownElement) {
        this.triggerElement = triggerElement;
        this.dropdownElement = dropdownElement || 'div[data-id="primitive-menu_dropdown"]';
    }

    /**
     * Clicks the PrimitiveMenu trigger element.
     * @method
     */
    clickTrigger() {
        $(this.triggerElement).click();
    }

    /**
     * Returns true when the menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isDropdownOpen() {
        return $(this.dropdownElement).isExisting();
    }

    /**
     * Returns true when the button element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusTrigger() {
        return $(this.triggerElement).isFocused();
    }

    /**
     * @method
     * @param {number} index
     * @return {PageMenuItem}
     */
    getItem(itemPosition) {
        const menuItems = $(this.dropdownElement).$$('li[role="menuitem"]');
        const buttonMenuItems = $(this.dropdownElement).$$('ul > *');
        if (menuItems[itemPosition]) {
            const indexPosition = buttonMenuItems.findIndex(
                element => element.ELEMENT === menuItems[itemPosition].ELEMENT,
            );
            return new PageMenuItem(
                `${this.dropdownElement} ul > li[role="menuitem"]:nth-child(${indexPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PagePrimitiveMenu;
