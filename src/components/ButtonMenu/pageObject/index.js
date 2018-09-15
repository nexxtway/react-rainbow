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
    }

   /**
    * Clicks the button element.
    * @method
    */
    click() {
        $(this.rootElement).$('button').click();
    }

   /**
    * Returns true when the menu is open, false otherwise.
    * @method
    * @returns {bool}
    */
    isOpen() {
        return $(this.rootElement).$('.rainbow-button-menu_dropdown').isVisible();
    }

   /**
    * Returns true when the button element has focus.
    * @method
    * @returns {bool}
    */
    hasFocusButton() {
        return $(this.rootElement).$('button').hasFocus();
    }

   /**
    * Returns true when the menu item with item position has the focus.
    * @method
    * @returns {bool}
    * @param {number} itemPosition - The base 0 index of the menu item.
    */
    hasFocusItem(itemPosition) {
        const items = $(this.rootElement).$$('[role="menuitem"]');
        if (items[itemPosition]) {
            return items[itemPosition].hasFocus();
        }
        return false;
    }

   /**
    * It moves the pointer over the item with item position.
    * @method
    * @param {number} itemPosition - The base 0 index of the menu item.
    */
    hoverItem(itemPosition) {
        browser.moveToObject(`${this.rootElement} li[role="presentation"]:nth-child(${itemPosition + 1}) > a`);
    }
}

module.exports = PageButtonMenu;
