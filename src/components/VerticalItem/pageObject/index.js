/**
 * VerticalItem page object class.
 * @class
 */
class PageVerticalItem {
    /**
     * Create a new VerticalItem page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalItem root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the vertical item.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('[data-id="vertical-item-clickable-element"]')
            .click();
    }

    /**
     * Returns true when the vertical item has focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        return $(this.rootElement)
            .$('[data-id="vertical-item-clickable-element"]')
            .isFocused();
    }

    /**
     * Returns true when the vertical item is selected.
     * @method
     * @returns {bool}
     */
    async isSelected() {
        return !!(await $(this.rootElement).getAttribute('data-active'));
    }
}

module.exports = PageVerticalItem;
