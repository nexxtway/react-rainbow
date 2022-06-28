/* eslint-disable class-methods-use-this */
const PageLookupMenuItem = require('./menuItem');

/**
 * Lookup page object class.
 * @class
 */
class PageLookup {
    /**
     * Create a new Lookup page object.
     * @constructor
     * @param {string} rootElement - The selector of the Lookup root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the input element.
     * @method
     */
    async click() {
        await $(this.rootElement)
            .$('input[type="search"]')
            .click();
    }

    /**
     * Clicks the close button element.
     * @method
     */
    async clickCloseButton() {
        await $(this.rootElement)
            .$('button[title="close"]')
            .click();
    }

    /**
     * Clicks the input with a selected option.
     * @method
     */
    async clickSelectedOptionInput() {
        await $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Clicks the lookup label
     * @method
     */
    async clickLabel() {
        await $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the remove selected option button.
     * @method
     */
    async clickRemoveSelectedOptionButton() {
        await $(this.rootElement)
            .$('button[title="Remove selected option"]')
            .click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="search"]')
            .isFocused();
    }

    /**
     * Returns true when the selected option input element has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusSelectedOptionInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * Returns true when the remove selected option button has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusRemoveSelectedOptionButton() {
        return $(this.rootElement)
            .$('button[title="Remove selected option"]')
            .isFocused();
    }

    /**
     * Type in the input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    async setQuery(value) {
        await $(this.rootElement)
            .$('input[type="search"]')
            .setValue(value);
    }

    /**
     * Clear the input element.
     * @method
     */
    async clearQuery() {
        await $(this.rootElement)
            .$('input[type="search"]')
            .clearValue();
    }

    /**
     * Get the value typed in the input element.
     * @method
     * @returns {string}
     */
    async getQuery() {
        return $(this.rootElement)
            .$('input[type="search"]')
            .getValue();
    }

    /**
     * Get the number of matched options.
     * @method
     * @returns {number}
     */
    async getOptionsLength() {
        return (await $('[data-id="lookup-options-container"]').$$('li[role="presentation"]'))
            .length;
    }

    /**
     * Returns a new LookupMenuItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the LookupMenuItem.
     */
    async getOption(itemPosition) {
        const items = await $('[data-id="lookup-options-container"]').$$('li[role="presentation"]');
        if (items[itemPosition]) {
            return new PageLookupMenuItem(items[itemPosition]);
        }
        return null;
    }

    /**
     * Get the label of the selected option.
     * @method
     * @returns {string}
     */
    async getSelectedOptionLabel() {
        const content = await $(this.rootElement).$('input[type="text"]');
        if (content) {
            return content.getValue();
        }
        return '';
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
     * Returns true when the empty message is displayed, false otherwise.
     * @method
     * @returns {bool}
     */
    async isMenuEmpty() {
        return $('[data-id="lookup-options-empty-container"]').isDisplayed();
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => this.isMenuOpen());
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    async hoverScrollUpArrow() {
        const upArrow = await $('[data-id="lookup-options-container"]').$(
            '[data-id=lookup-arrow-button-up]',
        );
        await upArrow.scrollIntoView();
        return upArrow.moveTo();
    }

    /**
     * It moves the pointer out of the menu scroll up arrow
     * @method
     */
    async mouseLeaveScrollUpArrow() {
        return (await $(this.rootElement).$('input[type="text"]')).moveTo();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    async hoverScrollDownArrow() {
        const downArrow = await $('[data-id="lookup-options-container"]').$(
            '[data-id="lookup-arrow-button-down"]',
        );
        await downArrow.scrollIntoView();
        return downArrow.moveTo();
    }

    /**
     * It moves the pointer out of the menu scroll down arrow
     * @method
     */
    async mouseLeaveScrollDownArrow() {
        return (await $(this.rootElement).$('input[type="text"]')).moveTo();
    }

    /**
     * Returns true when the the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    async arrowDownExists() {
        return (await $('[data-id="lookup-options-container"]').$(
            '[data-id="lookup-arrow-button-down"]',
        )).isExisting();
    }

    /**
     * Returns true when the the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    async arrowUpExists() {
        return (await $('[data-id="lookup-options-container"]').$(
            '[data-id="lookup-arrow-button-up"]',
        )).isExisting();
    }
}

module.exports = PageLookup;
