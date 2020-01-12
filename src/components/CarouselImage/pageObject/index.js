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

    /**
     * Returns the header of the CarouselImage.
     * @method
     * @returns {string}
     */
    getHeaderText() {
        return $(this.rootElement)
            .$('[title="Imagen Header"]')
            .getHTML(false);
    }
}

module.exports = PageCarouselImage;
