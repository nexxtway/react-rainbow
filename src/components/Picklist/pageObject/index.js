/**
 * Picklist page object class.
 * @class
 * @tutorial picklist
 */
class PagePicklist {
    /**
     * Create a new PagePicklist page object.
     * @constructor
     * @param {string} rootElement - The selector of the PagePicklist root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the input element.
     * @method
     */
    clickInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Focus the input element.
     * @method
     */
    focusInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .doubleClick();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * It move the pointer off any menu scroll arrow
     * @method
     */
    mouseLeaveScrollArrow() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .moveTo();
    }

    /**
     * Returns the label of the selected PicklistOption
     * @method
     * @returns {string}
     */
    getSelectedOptionLabel() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .getValue();
    }
}

module.exports = PagePicklist;
