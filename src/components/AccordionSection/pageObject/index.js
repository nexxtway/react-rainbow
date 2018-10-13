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
        $(this.rootElement).$('.rainbow-accordion-section_summary > button').click();
    }

    /**
     * Returns true when the button icon has focus.
     * @method
     * @returns {bool}
     */
    hasFocusButtonIcon() {
        return $(this.rootElement).$('.rainbow-accordion-section_summary > button').hasFocus();
    }

    /**
    * Returns true when the accordion section is expanded, false otherwise.
    * @method
    * @returns {bool}
    */
    isExpanded() {
        return $(this.rootElement).$('.rainbow-accordion-section_content').isVisible();
    }
}

module.exports = PageAccordionSection;
