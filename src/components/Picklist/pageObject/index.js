const PagePicklistOption = require('../../PicklistOption/pageObject');

/**
 * Picklist page object class.
 * @class
 * @tutorial picklist
 */
class PagePicklist {
    /**
     * Create a new PagePicklist page object.
     * @constructor
     * @param {string} rootElement - The selector of the PagePicklist root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the input element.
     * @method
     */
    clickInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    hoverScrollUpArrow() {
        return $(this.rootElement)
            .$('div.')
            .isFocused();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    hoverScrollDownArrow() {
        return $(this.rootElement)
            .$('div.')
            .isFocused();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getOptionsLength() {
        return $(this.rootElement).$$('li.rainbow-picklist-option').length;
    }

    /**
     * Returns a new PicklistOption page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the PicklistOption.
     */
    getOption(optionIndex) {
        const options = $(this.rootElement).$$('li.rainbow-picklist-option');
        if (options[optionIndex]) {
            return new PagePicklistOption(
                `${this.rootElement} li.rainbow-picklist-option:nth-child(${optionIndex + 1})`,
            );
        }
        return null;
    }

    /**
     * Returns true when the options menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isMenuOpen() {
        return $(this.rootElement)
            .$('.rainbow-picklist_dropdown')
            .isDisplayed();
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isMenuOpen());
    }
}

module.exports = PagePicklist;
