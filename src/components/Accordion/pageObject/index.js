const PageAccordionSection = require('../../AccordionSection/pageObject');

/**
 * Accordion page object class.
 * @class
 * @tutorial accordion
 */
class PageAccordion {
    /**
     * Create a new Accordion page object.
     * @constructor
     * @param {string} rootElement - The selector of the Accordion root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new AccordionSection page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the accordion section.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="accordion-section-li"]');
        if (items[itemPosition]) {
            return new PageAccordionSection(
                `${this.rootElement} [data-id="accordion-section-li"]:nth-child(${itemPosition +
                    1})`,
            );
        }
        return null;
    }
}

module.exports = PageAccordion;
