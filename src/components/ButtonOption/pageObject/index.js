/**
 * ButtonOption page object class.
 * @class
 */
class PageButtonOption {
    /**
     * Create a new ButtonOption page object.
     * @constructor
     * @param {string} rootElement - The selector of the Radio root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /** Click the radiobutton.
     * @method
     */
    click() {
        $(this.rootElement).click();
    }

    /**
     * Returns true when the radiobutton has the focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('input[type="radio"]')
            .isFocused();
    }

    /**
     * Returns true when the radio is checked.
     * @method
     * @returns {bool}
     */
    isChecked() {
        return !!$(this.rootElement)
            .$('input')
            .isSelected();
    }
}

module.exports = PageButtonOption;
