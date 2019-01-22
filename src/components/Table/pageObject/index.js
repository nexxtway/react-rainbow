const PageHeader = require('../head/pageObject/index');

/**
 * Table page object class.
 * @class
 */
class PageTable {
    /**
     * Create a new Table page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalNavigation root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Header page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the header.
     */
    getHeaderItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-table_header');
        if (items[itemPosition]) {
            return new PageHeader(`${this.rootElement} .rainbow-table_header:nth-child(${itemPosition + 1})`);
        }
        return null;
    }
}

module.exports = PageTable;
