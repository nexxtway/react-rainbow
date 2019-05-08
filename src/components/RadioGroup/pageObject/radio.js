/**
 * Radio page object class.
 * @class
 */
class PageRadioItem {
    /**
     * Create a new Radio page object.
     * @constructor
     * @param {string} rootElement - The selector of the Radio root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /** Click the radio.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Returns true when the radio has the focus.
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
            .$('input[type="radio"]')
            .isSelected();
    }
}

module.exports = PageRadioItem;
