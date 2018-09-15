/**
 * RadioGroup page object class.
 * @class
 */
class PageRadioGroup {
    /**
     * Create a new RadioGroup page object.
     * @constructor
     * @param {string} rootElement - The selector of the RadioGroup root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Click the RadioGroup item with item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the RadioGroup item.
     */
    clickItem(itemPosition) {
        const items = $(this.rootElement).$$('label');
        if (items[itemPosition]) {
            items[itemPosition].click();
        }
    }

    /**
     * Returns true when the RadioGroup item with item position has the focus.
     * @method
     * @returns {bool}
     * @param {number} itemPosition - The base 0 index of the RadioGroup item.
     */
    hasFocusItem(itemPosition) {
        const items = $(this.rootElement).$$('input');
        if (items[itemPosition]) {
            return items[itemPosition].hasFocus();
        }
        return false;
    }

    /**
     * Returns true when the RadioGroup item with item position is checked.
     * @method
     * @returns {bool}
     * @param {number} itemPosition - The base 0 index of the RadioGroup item.
     */
    isCheckedItem(itemPosition) {
        const items = $(this.rootElement).$$('input');
        if (items[itemPosition]) {
            return !!items[itemPosition].getAttribute('checked');
        }
        return false;
    }
}

module.exports = PageRadioGroup;
