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
    click() {
        $(this.rootElement)
            .$('[role="combobox"]')
            .click();
    }

    /**
     * Clicks the label element
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the trigger button
     * @method
     */
    clickTrigger() {
        $(this.rootElement)
            .$('[data-id="button-icon-element"]')
            .click();
    }

    /**
     * Returns true when the options menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isMenuOpen() {
        return (
            $(this.rootElement)
                .$('div[role="combobox"]')
                .getAttribute('aria-expanded') === 'true'
        );
    }

    /**
     * Returns true when the Add button has focus.
     * @method
     * @returns {bool}
     */
    hasTriggerFocus() {
        return $(this.rootElement)
            .$('[role="combobox"] > button')
            .isFocused();
    }

    /**
     * Returns true when the textbox input element has focus.
     * @method
     * @returns {bool}
     */
    hasInputFocus() {
        return $(this.rootElement)
            .$('[role="textbox"]')
            .isFocused();
    }

    /**
     * Returns a new InternalDropdown page object for the element with the supplied id.
     * @method
     */
    [privateGetMenu]() {
        const menuId = `#${$(this.rootElement)
            .$('[role="combobox"]')
            .getAttribute('aria-controls')}`;
        if (this.isMenuOpen()) {
            return new PageInternalDropdown(menuId);
        }
        return null;
    }

    /**
     * Returns a new Option page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the Option.
     */
    getOption(optionIndex) {
        return this[privateGetMenu]().getOption(optionIndex);
    }

    /**
     * Wait until the dropdown is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isMenuOpen());
    }
}

module.exports = PageMultiSelect;
