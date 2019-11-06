const PageVerticalItem = require('../../VerticalItem/pageObject');
const PageVerticalSectionOverflow = require('../../VerticalSectionOverflow/pageObject');

/**
 * VerticalNavigation page object class.
 * @class
 */
class PageVerticalNavigation {
    /**
     * Create a new VerticalNavigation page object.
     * @constructor
     * @param {string} rootElement - The selector of the VerticalNavigation root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new VerticalItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the vertical item.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="vertical-item"]');
        if (items[itemPosition]) {
            return new PageVerticalItem(
                `${this.rootElement} [data-id="vertical-item"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Returns a new VerticalSectionOverflow page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the vertical section overflow.
     */
    getSectionOverflow(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="vertical-overflow-container"]');
        if (items[itemPosition]) {
            return new PageVerticalSectionOverflow(
                `${
                    this.rootElement
                } [data-id="vertical-overflow-container"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PageVerticalNavigation;
