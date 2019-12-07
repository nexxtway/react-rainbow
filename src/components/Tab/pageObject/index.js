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
        $(this.rootElement)
            .$('button[role="tab"]')
            .click();
    }

    /**
     * Returns true when the tab item has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('button[role="tab"]')
            .isFocused();
    }

    /**
     * Returns true when the tab item is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return !!$(this.rootElement)
            .$('button[role="tab"]')
            .getAttribute('data-active');
    }

    /**
     * Returns true when the tab item is visible in the viewport.
     * @method
     * @returns {bool}
     */
    isVisibleWithinViewport() {
        return $(this.rootElement)
            .$('button[role="tab"]')
            .isDisplayedInViewport();
    }

    /**
     * Returns the text of the tab item.
     * @method
     * @returns {string}
     */
    getLabelText() {
        return $(this.rootElement).getText();
    }
}

module.exports = PageTab;
