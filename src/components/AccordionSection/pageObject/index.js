/**
 * AccordoinSection page object class.
 * @class
 */
class PageAccordionSection {
    /**
     * Create a new AccordionSection page object.
     * @constructor
     * @param {string} rootElement - The selector of the AccordoinSection root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the button icon element.
     * @method
     */
    clickButtonIcon() {
        $(this.rootElement)
            .$('[data-id="accordion-section-summary"] > button')
            .click();
    }

    /**
     * Returns true when the button icon has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButtonIcon() {
        return $(this.rootElement)
            .$('[data-id="accordion-section-summary"] > button')
            .isFocused();
    }

    /**
     * Returns true when the accordion section is expanded, false otherwise.
     * @method
     * @returns {bool}
     */
    isExpanded() {
        return $(this.rootElement)
            .$('[data-id="accordion-section-content"]')
            .isDisplayed();
    }
}

module.exports = PageAccordionSection;
