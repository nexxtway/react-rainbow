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
        return $(this.rootElement).isFocused();
    }

    /**
     * It moves the pointer over the menu item.
     * @method
     */
    hover() {
        $(this.rootElement).moveTo();
    }

    /**
     * Returns the label text of the menu item.
     * @method
     * @returns {string}
     */
    getLabelText() {
        return $(this.rootElement).getText();
    }
}

module.exports = PageMenuItem;
