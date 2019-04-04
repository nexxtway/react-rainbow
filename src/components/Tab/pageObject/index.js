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
     * Returns true when the tab item is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return $(this.rootElement).$('a').getAttribute('class') === 'rainbow-tab_anchor rainbow-tab--active';
    }

    /**
     * Returns true when the tab item is visible in the viewport.
     * @method
     * @returns {bool}
     */
    isVisibleWithinViewport() {
        return $(this.rootElement).$('a').isVisibleWithinViewport();
    }
}

module.exports = PageTab;
