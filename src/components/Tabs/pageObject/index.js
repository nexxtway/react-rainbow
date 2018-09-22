const PageTab = require('../../Tab/pageObject');

/**
 * Tabs page object class.
 * @class
 */
class PageTabs {
    /**
     * Create a new Tabs page object.
     * @constructor
     * @param {string} rootElement - The selector of the Tabs root element.
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

module.exports = PageTabs;
