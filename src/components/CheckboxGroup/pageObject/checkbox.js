/**
 * Checkbox page object class.
 * @class
 */
class PageCheckboxItem {
    /**
     * Create a new Checkbox page object.
     * @constructor
     * @param {string} rootElement - The selector of the Checkbox root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the checkbox.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('input[type="checkbox"] + label')
            .click();
    }

    /**
     * Returns true when the checkbox has the focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        return $(this.rootElement)
            .$('input[type="checkbox"]')
            .isFocused();
    }

    /**
     * Returns true when the checkbox is checked.
     * @method
     * @returns {bool}
     */
    async isChecked() {
        return $(this.rootElement)
            .$('input[type="checkbox"]')
            .isSelected();
    }
}

module.exports = PageCheckboxItem;
