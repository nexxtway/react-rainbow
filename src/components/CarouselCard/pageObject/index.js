const PageCarouselCardIndicator = require('./indicator');
const PageCarouselImage = require('../../CarouselImage/pageObject');

/**
 * CarouselCard page object class.
 * @class
 * @tutorial carouselCard
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
     * @param {number} itemPosition - The base 0 index of the indicator item.
     */
    async getIndicatorItem(itemPosition) {
        const items = await $(this.rootElement).$$('li[role="presentation"]');
        if (items[itemPosition]) {
            return new PageCarouselCardIndicator(
                `${this.rootElement} li[role="presentation"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Returns a new CarouselImage page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the CarouselImage item.
     */
    async getImageItem(itemPosition) {
        const items = await $(this.rootElement).$$('li[role="tabpanel"]');
        if (items[itemPosition]) {
            return new PageCarouselImage(
                `${this.rootElement} li[role="tabpanel"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PageCarouselCard;
