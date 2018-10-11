/* eslint-disable max-len */
const PageIndicator = require('./indicator');

/**
 * CarouselCard page object class.
 * @class
 */
class PageCarouselCard {
    /**
     * Create a new CarouselCard page object.
     * @constructor
     * @param {string} rootElement - The selector of the CarouselCard root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Indicator page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the tab item.
     */
    getIndicatorItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-carousel_indicator');
        if (items[itemPosition]) {
            // return new PageIndicator(`${this.rootElement} .rainbow-carousel_indicator:nth-child(${itemPosition + 1})`);
            return new PageIndicator(items[itemPosition]);
        }
        return null;
    }
}

module.exports = PageCarouselCard;
