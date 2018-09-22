const PageTab = require('../../Tab/pageObject');

/**
 * Tabset page object class.
 * @class
 */
class PageTabset {
    /**
     * Create a new Tabset page object.
     * @constructor
     * @param {string} rootElement - The selector of the Tabset root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Tab page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the tab item.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-tab');
        if (items[itemPosition]) {
            return new PageTab(`${this.rootElement} .rainbow-tab:nth-child(${itemPosition + 1})`);
        }
        return null;
    }
}

module.exports = PageTabset;
