const PageRadioItem = require('./radio');

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
     * Returns a new Radio page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the radio.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="input-radio_container"]');
        if (items[itemPosition]) {
            return new PageRadioItem(
                `${this.rootElement} [data-id="input-radio_container"]:nth-child(${itemPosition +
                    1})`,
            );
        }
        return null;
    }
}

module.exports = PageRadioGroup;
