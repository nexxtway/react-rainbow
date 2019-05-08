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
    click() {
        $(this.rootElement)
            .$('textarea')
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
     * Returns true when the textarea element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusTextarea() {
        return $(this.rootElement)
            .$('textarea')
            .isFocused();
    }

    /**
     * It set a value in the textarea.
     * @method
     * @param {string} values - The value to set in the textarea.
     */
    setValue(value) {
        $(this.rootElement)
            .$('textarea')
            .setValue(value);
    }

    /**
     * It get the value of the textarea.
     * @method
     * @returns {string}
     */
    getValue() {
        return $(this.rootElement)
            .$('textarea')
            .getValue();
    }
}

module.exports = PageTextarea;
