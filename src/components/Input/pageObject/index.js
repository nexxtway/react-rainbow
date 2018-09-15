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
     * Clicks the input.
     * @method
     */
    click() {
        $(this.rootElement).click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement).$('input').hasFocus();
    }

    /**
     * Type in the input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setValue(value) {
        $(this.rootElement).$('input').setValue(value);
    }

    /**
     * Get the value typed in the input element.
     * @method
     * @returns {string}
     */
    getValue() {
        return $(this.rootElement).$('input').getValue();
    }

}

module.exports = PageInput;
