/**
 * Textarea page object class.
 * @class
 */
class PageTextarea {
    /**
     * Create a new Textarea page object.
     * @constructor
     * @param {string} rootElement - The selector of the Textarea root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the textarea element.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('textarea')
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
     * Returns true when the textarea element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusTextarea() {
        return $(this.rootElement)
            .$('textarea')
            .isFocused();
    }

    /**
     * It set a value in the textarea.
     * @method
     * @param {string} values - The value to set in the textarea.
     */
    async setValue(value) {
        await $(this.rootElement)
            .$('textarea')
            .setValue(value);
    }

    /**
     * It get the value of the textarea.
     * @method
     * @returns {string}
     */
    async getValue() {
        return $(this.rootElement)
            .$('textarea')
            .getValue();
    }
}

module.exports = PageTextarea;
