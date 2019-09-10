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
     * Get PicklistOption root elment
     * @method
     * @private
     * @returns {object}
     */
    getRootElement() {
        return typeof this.rootElement === 'string' ? $(this.rootElement) : this.rootElement;
    }

    /**
     * Clicks the PicklistOption
     * @method
     */
    click() {
        this.getRootElement().click();
    }

    /**
     * It moves the pointer over the PicklistOption
     * @method
     */
    hover() {
        const itemElement = this.getRootElement().$('a');
        itemElement.moveTo();
    }

    /**
     * Get the label of the PicklistOption.
     * @method
     * @returns {string}
     */
    getLabel() {
        return this.getRootElement()
            .$('a')
            .getText();
    }

    /**
     * Returns true when the PicklistOption is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return (
            this.getRootElement().getAttribute('class') ===
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
            this.getRootElement().getAttribute('class') ===
            'rainbow-picklist-option rainbow-picklist-option_selected'
        );
    }

    /**
     * Returns true when the PicklistOption is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    isVisible() {
        return this.getRootElement().isDisplayedInViewport();
    }
}

module.exports = PagePicklistOption;
