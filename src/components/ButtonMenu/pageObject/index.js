const PageMenuItem = require('../../MenuItem/pageObject');

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
     * Returns a new MenuItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the MenuItem.
     */
    getItem(itemPosition) {
        const menuItems = $(this.rootElement).$$('li.rainbow-menu-item');
        const buttonMenuItems = $(this.rootElement).$$('ul > *');
        if (menuItems[itemPosition]) {
            const indexPosition = buttonMenuItems.findIndex(
                element => element.ELEMENT === menuItems[itemPosition].ELEMENT,
            );
            return new PageMenuItem(`${this.rootElement} li.rainbow-menu-item:nth-child(${indexPosition + 1})`);
        }
        return null;
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
        return $(this.rootElement).$('.rainbow-primitive-menu_dropdown').isVisible();
    }

   /**
    * Returns true when the button element has focus.
    * @method
    * @returns {bool}
    */
    hasFocusButton() {
        return $(this.rootElement).$('button').hasFocus();
    }
}

module.exports = PageButtonMenu;
