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

    /**
     * Clicks in the button of the first AccordionSection element.
     * @method
     */
    clickFirstButton() {
        $(this.rootElement)
            .$('li:nth-child(1) button')
            .click();
    }

    /**
     * Returns the label of the open AccordionSection
     * @method
     * @returns {string}
     */
    getOpenSectionLabel() {
        return $(this.rootElement)
            .$('div[aria-hidden="false"]')
            .$('..')
            .$('div h3 > span:nth-child(2)')
            .getText();
    }
}

module.exports = PageAccordion;
