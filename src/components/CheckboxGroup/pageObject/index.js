const PageCheckboxItem = require('./checkbox');

/**
 * CheckboxGroup page object class.
 * @class
 */
class PageCheckboxGroup {
    /**
     * Create a new CheckboxGroup page object.
     * @constructor
     * @param {string} rootElement - The selector of the CheckboxGroup root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Checkbox page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the checkbox.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="input-checkbox_container"]');
        if (items[itemPosition]) {
            return new PageCheckboxItem(
                `${this.rootElement} [data-id="input-checkbox_container"]:nth-child(${itemPosition +
                    1})`,
            );
        }
        return null;
    }
}

module.exports = PageCheckboxGroup;
