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
        return $(this.rootElement).$$('li.rainbow-lookup_menu-item').length;
    }

    /**
     * Returns a new LookupMenuItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the LookupMenuItem.
     */
    getOption(itemPosition) {
        const items = $(this.rootElement).$$('li.rainbow-lookup_menu-item');
        if (items[itemPosition]) {
            return new PageLookupMenuItem(
                `${this.rootElement} li.rainbow-lookup_menu-item:nth-child(${itemPosition + 1})`,
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
        const content = $(this.rootElement).$('.rainbow-lookup_chip-content_label');
        if (content) {
            return content.getText();
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
            .$('.rainbow-lookup_options-container')
            .isDisplayed();
    }

    /**
     * Returns true when the empty message is displayed, false otherwise.
     * @method
     * @returns {bool}
     */
    isMenuEmpty() {
        return $(this.rootElement)
            .$('.rainbow-lookup_options-container--empty')
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

module.exports = PageLookup;
