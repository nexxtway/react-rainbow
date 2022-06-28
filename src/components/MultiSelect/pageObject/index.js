const PageInternalDropdown = require('../../InternalDropdown/pageObject');

const privateGetMenu = Symbol('privateGetMenu');

/**
 * MultiSelect page object class.
 * @class
 */
class PageMultiSelect {
    /**
     * Create a new MultiSelect page object.
     * @constructor
     * @param {string} rootElement - The selector of the MultiSelect root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the component
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('[role="combobox"]')
            .click();
    }

    /**
     * Clicks the label element
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the trigger button
     * @method
     */
    async clickTrigger() {
        await $(this.rootElement)
            .$('[data-id="button-icon-element"]')
            .click();
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
     * Returns true when the Add button has focus.
     * @method
     * @returns {bool}
     */
    async hasTriggerFocus() {
        return (await $(this.rootElement).$('[role="combobox"] > button')).isFocused();
    }

    /**
     * Returns true when the textbox input element has focus.
     * @method
     * @returns {bool}
     */
    async hasInputFocus() {
        return (await $(this.rootElement).$('[role="textbox"]')).isFocused();
    }

    /**
     * Returns a new InternalDropdown page object for the element with the supplied id.
     * @method
     */
    async [privateGetMenu]() {
        const menuId = `#${await $(this.rootElement)
            .$('[role="combobox"]')
            .getAttribute('aria-controls')}`;
        if (await this.isMenuOpen()) {
            return new PageInternalDropdown(menuId);
        }
        return null;
    }

    /**
     * Returns a new Option page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the Option.
     */
    async getOption(optionIndex) {
        return (await this[privateGetMenu]()).getOption(optionIndex);
    }

    /**
     * Wait until the dropdown is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => this.isMenuOpen());
    }
}

module.exports = PageMultiSelect;
