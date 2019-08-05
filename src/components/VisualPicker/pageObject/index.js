const PageVisualPickerOption = require('../../VisualPickerOption/pageObject/index');

/**
 * VisualPicker page object class.
 * @class
 */
class PageVisualPicker {
    /**
     * Create a new VisualPicker page object.
     * @constructor
     * @param {string} rootElement - The selector of the VisualPicker root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new VisualPickerOption page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the VisualPickerOption.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-visual-picker-option_content-container');
        if (items[itemPosition]) {
            return new PageVisualPickerOption(
                `${
                    this.rootElement
                } .rainbow-visual-picker-option_content-container:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PageVisualPicker;
