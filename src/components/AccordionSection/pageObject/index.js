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

    get root() {
        return $(this.rootElement);
    }

    get summary() {
        return this.root.then(root => root.$('[data-id="accordion-section-summary"]'));
    }

    get content() {
        return this.root.then(root => root.$('[data-id="accordion-section-content"]'));
    }

    get label() {
        return this.root.then(root => root.$('[data-id="accordion-section-label"]'));
    }

    /**
     * Clicks the button icon element.
     * @method
     */
    async clickButton() {
        const elem = await this.summary;
        return elem.click();
    }

    /**
     * Returns true when the button icon has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusButton() {
        const elem = await this.summary;
        return elem.isFocused();
    }

    /**
     * Returns true when the accordion section is expanded, false otherwise.
     * @method
     * @returns {bool}
     */
    async isExpanded() {
        const elem = await this.content;
        return elem.isDisplayed();
    }

    /**
     * Returns the label of the accordion section.
     * @method
     * @returns {string}
     */
    async getLabel() {
        const elem = await this.label;
        return elem.getText();
    }
}

module.exports = PageAccordionSection;
