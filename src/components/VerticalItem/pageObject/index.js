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
    click() {
        $(this.rootElement)
            .$('.rainbow-vertical-item_action')
            .click();
    }

    /**
     * Returns true when the vertical item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('.rainbow-vertical-item_action')
            .isFocused();
    }

    /**
     * Returns true when the vertical item is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return (
            $(this.rootElement).getAttribute('class') ===
            'rainbow-vertical-item rainbow-vertical-item--active'
        );
    }
}

module.exports = PageVerticalItem;
