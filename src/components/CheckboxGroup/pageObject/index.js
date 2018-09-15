/**
 * PageCheckboxGroup page object class.
 * @class
 */
class PageCheckboxGroup {
    /**
     * Create a new PageCheckboxGroup page object.
     * @constructor
     * @param {string} rootElement - The selector of the CheckboxGroup root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the checkbox with item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the menu item.
     */
    clickCheckbox(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-checkbox-group_checkbox-label-container');
        if (items[itemPosition]) {
            items[itemPosition].click();
        }
    }

    /**
     * Returns true when the checkbox with item position has the focus.
     * @method
     * @returns {bool}
     * @param {number} itemPosition - The base 0 index of the menu item.
     */
    hasFocusCheckbox(itemPosition) {
        const items = $(this.rootElement).$$('[type="checkbox"]');
        if (items[itemPosition]) {
            return items[itemPosition].hasFocus();
        }
        return false;
    }

    /**
     * Returns true when the checkbox with item position is checked.
     * @method
     * @returns {bool}
     * @param {number} itemPosition - The base 0 index of the menu item.
     */
    isCheckedCheckbox(itemPosition) {
        const items = $(this.rootElement).$$('[type="checkbox"]');
        if (items[itemPosition]) {
            return !!items[itemPosition].getAttribute('checked');
        }
        return false;
    }
}

module.exports = PageCheckboxGroup;
