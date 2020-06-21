/**
 * MultiSelect page object class.
 * @class
 */
class PageMultiSelect {
    /**
     * Create a new MultiSelect page object.
     * @constructor
     * @param {string} rootElement - The selector of the MultiSelect root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the component
     * @method
     */
    click() {
        $(this.rootElement)
            .$('[role="combobox"]')
            .click();
    }

    /**
     * Clicks the label element
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Returns true when the combobox element has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('[role="combobox"]')
            .isFocused();
    }
}

module.exports = PageMultiSelect;
