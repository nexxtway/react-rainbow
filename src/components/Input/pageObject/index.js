/**
 * Input page object class.
 * @class
 */
class PageInput {
    /**
     * Create a new Input page object.
     * @constructor
     * @param {string} rootElement - The selector of the Input root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the input element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('input')
            .click();
    }

    /**
     * Clicks the label element.
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement)
            .$('input')
            .isFocused();
    }

    /**
     * Type in the input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setValue(value) {
        $(this.rootElement)
            .$('input')
            .setValue(value);
    }

    /**
     * Get the value typed in the input element.
     * @method
     * @returns {string}
     */
    getValue() {
        return $(this.rootElement)
            .$('input')
            .getValue();
    }
}

module.exports = PageInput;
