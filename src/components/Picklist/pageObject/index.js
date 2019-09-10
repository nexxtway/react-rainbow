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
     * Focus the input element.
     * @mehod
     */
    focusInput() {
        this.clickInput();
        this.waitUntilOpen();
        this.clickInput();
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
            .$('div.rainbow-picklist_dropdown-arrow-button.rainbow-picklist_dropdown-arrow-up')
            .moveTo();
    }

    /**
     * It moves the pointer out of the menu scroll up arrow
     * @method
     */
    mouseLeaveScrollUpArrow() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .moveTo();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    hoverScrollDownArrow() {
        return $(this.rootElement)
            .$('div.rainbow-picklist_dropdown-arrow-button.rainbow-picklist_dropdown-arrow-down')
            .moveTo();
    }

    /**
     * It moves the pointer out of the menu scroll down arrow
     * @method
     */
    mouseLeaveScrollDownArrow() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .moveTo();
    }

    getLabel() {
        return $(this.rootElement)
            .$('input[type="text"')
            .getValue();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getRegisteredOptionsLength() {
        return $(this.rootElement).$$(
            'li.rainbow-picklist-option:not(.rainbow-picklist-option_selected)',
        ).length;
    }

    /**
     * Returns a new PicklistOption page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the PicklistOption.
     */
    getOption(optionIndex) {
        const activeOptions = $(this.rootElement).$$(
            'li.rainbow-picklist-option:not(.rainbow-picklist-option_selected)',
        );
        const option = activeOptions[optionIndex];
        if (!option.error) {
            return new PagePicklistOption(option);
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
