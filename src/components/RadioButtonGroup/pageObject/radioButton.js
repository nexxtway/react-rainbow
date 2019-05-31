/**
 * RadioButton page object class.
 * @class
 */
class PageRadioButtonItem {
    /**
     * Create a new RadioButton page object.
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
        $(this.rootElement)
            .$('label')
            .click();
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
            .$('input[type="radio"]')
            .isSelected();
    }
}

module.exports = PageRadioButtonItem;
