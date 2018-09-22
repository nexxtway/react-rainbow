/**
 * Tab page object class.
 * @class
 */
class PageTab {
    /**
     * Create a new Tab page object.
     * @constructor
     * @param {string} rootElement - The selector of the Tab root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the tab item.
     * @method
     */
    click() {
        $(this.rootElement).$('a').click();
    }

    /**
     * Returns true when the tab item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement).$('a').hasFocus();
    }

    /**
     * Returns true when the vertical item is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return $(this.rootElement).getAttribute('class') === 'rainbow-tab rainbow-tab--active';
    }
}

module.exports = PageTab;
