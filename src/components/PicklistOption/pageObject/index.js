/**
 * PicklistOption page object class.
 * @class
 */
class PagePicklistOption {
    /**
     * Create a new PicklistOption page object.
     * @constructor
     * @param {string} rootElement - The selector of the PicklistOption root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the PicklistOption
     * @method
     */
    click() {
        this.rootElement.click();
    }

    /**
     * It moves the pointer over the PicklistOption
     * @method
     */
    hover() {
        const itemElement = this.rootElement.$('a');
        itemElement.moveTo();
    }

    /**
     * Get the label of the PicklistOption.
     * @method
     * @returns {string}
     */
    getLabel() {
        return this.rootElement.$('a').getText();
    }

    /**
     * Returns true when the PicklistOption is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return (
            this.rootElement.getAttribute('class') ===
            'rainbow-picklist-option rainbow-picklist-option_active'
        );
    }

    /**
     * Returns true when the PicklistOption is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return (
            this.rootElement.getAttribute('class') ===
            'rainbow-picklist-option rainbow-picklist-option_selected'
        );
    }

    /**
     * Returns true when the PicklistOption is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    isVisible() {
        return this.rootElement.isDisplayedInViewport();
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    waitUntilDisplayed() {
        browser.waitUntil(() => this.isVisible());
    }
}

module.exports = PagePicklistOption;
