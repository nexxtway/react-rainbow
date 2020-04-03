const PageButtonOption = require('../../ButtonOption/pageObject');

/**
 * ButtonGroupPicker page object class.
 * @class
 */
class PageButtonGroupPicker {
    /**
     * Create a new ButtonGroupPicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the ButtonGroupPicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new ButtonOption page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the radio.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('label');
        if (items[itemPosition]) {
            return new PageButtonOption(`${this.rootElement} label:nth-child(${itemPosition + 1})`);
        }
        return null;
    }
}

module.exports = PageButtonGroupPicker;
