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
    async click() {
        await $(this.rootElement)
            .$('input')
            .click();
    }

    /**
     * Clicks the label element.
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusInput() {
        return $(this.rootElement)
            .$('input')
            .isFocused();
    }

    /**
     * Type in the input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    async setValue(value) {
        await $(this.rootElement)
            .$('input')
            .setValue(value);
    }

    /**
     * Get the value typed in the input element.
     * @method
     * @returns {string}
     */
    async getValue() {
        return $(this.rootElement)
            .$('input')
            .getValue();
    }
}

module.exports = PageInput;
