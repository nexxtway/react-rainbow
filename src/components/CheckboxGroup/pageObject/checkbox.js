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
    click() {
        $(this.rootElement).$('.rainbow-checkbox-group_checkbox-label-container').click();
    }

    /**
     * Returns true when the checkbox has the focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement).$('input[type="checkbox"]').hasFocus();
    }

    /**
     * Returns true when the checkbox is checked.
     * @method
     * @returns {bool}
     */
    isChecked() {
        return !!$(this.rootElement).$('input[type="checkbox"]').getAttribute('checked');
    }
}

module.exports = PageCheckboxItem;
