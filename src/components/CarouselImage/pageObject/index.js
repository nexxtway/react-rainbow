/**
 * CarouselImage page object class.
 * @class
 */
class PageCarouselImage {
    /**
     * Create a new CarouselImage page object.
     * @constructor
     * @param {string} rootElement - The selector of the CarouselImage root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the CarouselImage item.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('a')
            .click();
    }
}

module.exports = PageCarouselImage;
