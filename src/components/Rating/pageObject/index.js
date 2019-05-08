const PageRatingStar = require('./star');

/**
 * Rating page object class.
 * @class
 */
class PageRating {
    /**
     * Create a new Rating page object.
     * @constructor
     * @param {string} rootElement - The selector of the Rating root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Star page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the star.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-rating_star');
        if (items[itemPosition]) {
            return new PageRatingStar(
                `${this.rootElement} .rainbow-rating_star:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PageRating;
