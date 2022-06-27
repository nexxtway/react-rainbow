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

    get dropdown() {
        return $(this.dropdownElement);
    }

    get trigger() {
        return $(this.triggerElement);
    }

    /**
     * Clicks the PrimitiveMenu trigger element.
     * @method
     */
    async clickTrigger() {
        await (await this.trigger).click();
    }

    /**
     * Returns true when the menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isDropdownOpen() {
        const dropdown = await this.dropdown;
        const exists = await dropdown.isExisting();
        const visible = await dropdown.isDisplayed();
        return exists && visible;
    }

    /**
     * Returns true when the button element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusTrigger() {
        return (await this.trigger).isFocused();
    }

    /**
     * @method
     * @param {number} index
     * @return {PageMenuItem}
     */
    async getItem(itemPosition) {
        const menuItems = await this.dropdown.$$('li[role="menuitem"]');
        if (menuItems[itemPosition]) {
            return new PageMenuItem(menuItems[itemPosition]);
        }
        return null;
    }
}

module.exports = PagePrimitiveMenu;
