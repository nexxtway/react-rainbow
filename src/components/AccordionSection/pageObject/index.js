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
    clickButton() {
        $(this.rootElement)
            .$('[data-id="accordion-section-summary"]')
            .click();
    }

    /**
     * Returns true when the button icon has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButton() {
        return $(this.rootElement)
            .$('[data-id="accordion-section-summary"]')
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

    /**
     * Returns the label of the accordion section.
     * @method
     * @returns {string}
     */
    getLabel() {
        return $(this.rootElement)
            .$('[data-id="accordion-section-label"]')
            .getText();
    }
}

module.exports = PageAccordionSection;
