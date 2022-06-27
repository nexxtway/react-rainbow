const PageInternalDropdown = require('../../InternalDropdown/pageObject');

const privateGetMenu = Symbol('privateGetMenu');

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
    async clickInput() {
        await $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Focus the input element.
     * @method
     */
    async focusInput() {
        await $(this.rootElement)
            .$('input[type="text"]')
            .doubleClick();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * It move the pointer off any menu scroll arrow
     * @method
     */
    async mouseLeaveScrollArrow() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .moveTo();
    }

    /**
     * Returns the label of the selected PicklistOption
     * @method
     * @returns {string}
     */
    async getSelectedOptionLabel() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .getValue();
    }

    /**
     * Returns true when the options menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isMenuOpen() {
        return (
            (await $(this.rootElement)
                .$('div[role="combobox"]')
                .getAttribute('aria-expanded')) === 'true'
        );
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => this.isMenuOpen());
    }

    /**
     * Returns a new InternalDropdown page object for the element with the supplied id.
     * @method
     */
    async [privateGetMenu]() {
        const menuId = `#${await $(this.rootElement)
            .$('input[type="text"]')
            .getAttribute('aria-controls')}`;
        if (await this.isMenuOpen()) {
            return new PageInternalDropdown(menuId);
        }
        return null;
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    async hoverScrollUpArrow() {
        return (await this[privateGetMenu]()).hoverScrollUpArrow();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    async hoverScrollDownArrow() {
        return (await this[privateGetMenu]()).hoverScrollDownArrow();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    async getOptionsLength() {
        return (await this[privateGetMenu]()).getOptionsLength();
    }

    /**
     * Returns a new PicklistOption page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the PicklistOption.
     */
    async getOption(optionIndex) {
        return (await this[privateGetMenu]()).getOption(optionIndex);
    }

    /**
     * Clicks the search element
     * @method
     */
    async clickSearch() {
        return (await this[privateGetMenu]()).clickSearch();
    }
}

module.exports = PagePicklist;
