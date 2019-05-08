/**
 * CheckboxToggle page object class.
 * @class
 */
class PageCheckboxToggle {
    /**
     * Create a new CheckboxToggle page object.
     * @constructor
     * @param {string} rootElement - The selector of the CheckboxToggle root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the root element.
     * @method
     */
    click() {
        $(this.rootElement).click();
    }

    /**
     * Returns true when the input element is checked.
     * @method
     * @returns {bool}
     */
    isChecked() {
        return !!$(this.rootElement)
            .$('input')
            .isSelected();
    }
}

module.exports = PageCheckboxToggle;
