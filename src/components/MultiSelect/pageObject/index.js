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
     * Clicks the trigger button
     * @method
     */
    clickTrigger() {
        $(this.rootElement)
            .$('[data-id="button-icon-element"]')
            .click();
    }

    /**
     * Returns true when the Add button has focus.
     * @method
     * @returns {bool}
     */
    hasTriggerFocus() {
        return $(this.rootElement)
            .$('[role="combobox"] > button')
            .isFocused();
    }

    /**
     * Returns true when the textbox input element has focus.
     * @method
     * @returns {bool}
     */
    hasInputFocus() {
        return $(this.rootElement)
            .$('[role="textbox"]')
            .isFocused();
    }
}

module.exports = PageMultiSelect;
