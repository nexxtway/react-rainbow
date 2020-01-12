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
    click() {
        $(this.rootElement)
            .$('input[type="search"]')
            .click();
    }

    /**
     * Clicks the close button element.
     * @method
     */
    clickCloseButton() {
        $(this.rootElement)
            .$('button[title="close"]')
            .click();
    }

    /**
     * Clicks the input with a selected option.
     * @method
     */
    clickSelectedOptionInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Clicks the lookup label
     * @method
     */
    clickLabel() {
        $(this.rootElement)
            .$('label')
            .click();
    }

    /**
     * Clicks the remove selected option button.
     * @method
     */
    clickRemoveSelectedOptionButton() {
        $(this.rootElement)
            .$('button[title="Remove selected option"]')
            .click();
    }

    /**
     * Returns true when the input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusInput() {
        return $(this.rootElement)
            .$('input[type="search"]')
            .isFocused();
    }

    /**
     * Returns true when the selected option input element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusSelectedOptionInput() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .isFocused();
    }

    /**
     * Returns true when the remove selected option button has focus.
     * @method
     * @returns {bool}
     */
    hasFocusRemoveSelectedOptionButton() {
        return $(this.rootElement)
            .$('button[title="Remove selected option"]')
            .isFocused();
    }

    /**
     * Type in the input element.
     * @method
     * @param {string} value - The value to type in the input element.
     */
    setQuery(value) {
        $(this.rootElement)
            .$('input[type="search"]')
            .setValue(value);
    }

    /**
     * Clear the input element.
     * @method
     */
    clearQuery() {
        $(this.rootElement)
            .$('input[type="search"]')
            .clearValue();
    }

    /**
     * Get the value typed in the input element.
     * @method
     * @returns {string}
     */
    getQuery() {
        return $(this.rootElement)
            .$('input[type="search"]')
            .getValue();
    }

    /**
     * Get the number of matched options.
     * @method
     * @returns {number}
     */
    getOptionsLength() {
        return $(this.rootElement).$$('li[role="presentation"]').length;
    }

    /**
     * Returns a new LookupMenuItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the LookupMenuItem.
     */
    getOption(itemPosition) {
        const items = $(this.rootElement).$$('li[role="presentation"]');
        if (items[itemPosition]) {
            return new PageLookupMenuItem(
                `${this.rootElement} li[role="presentation"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Get the label of the selected option.
     * @method
     * @returns {string}
     */
    getSelectedOptionLabel() {
        const content = $(this.rootElement).$('input[type="text"]');
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
    isMenuOpen() {
        return $(this.rootElement)
            .$('[role="listbox"]')
            .isDisplayed();
    }

    /**
     * Returns true when the empty message is displayed, false otherwise.
     * @method
     * @returns {bool}
     */
    isMenuEmpty() {
        return $(this.rootElement)
            .$('[data-id="lookup-options-empty-container"]')
            .isDisplayed();
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isMenuOpen());
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    hoverScrollUpArrow() {
        return $(this.rootElement)
            .$('[data-id=lookup-arrow-button-up]')
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
            .$('[data-id=lookup-arrow-button-down]')
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

    /**
     * Returns true when the the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    arrowDownExists() {
        return $(this.rootElement)
            .$('[data-id="lookup-arrow-button-down"]')
            .isExisting();
    }

    /**
     * Returns true when the the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    arrowUpExists() {
        return $(this.rootElement)
            .$('[data-id="lookup-arrow-button-up"]')
            .isExisting();
    }
}

module.exports = PageLookup;
