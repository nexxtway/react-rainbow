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
    clickInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .click();
    }

    /**
     * Focus the input element.
     * @method
     */
    focusInput() {
        $(this.rootElement)
            .$('input[type="text"]')
            .doubleClick();
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
     * It move the pointer off any menu scroll arrow
     * @method
     */
    mouseLeaveScrollArrow() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .moveTo();
    }

    /**
     * Returns the label of the selected PicklistOption
     * @method
     * @returns {string}
     */
    getSelectedOptionLabel() {
        return $(this.rootElement)
            .$('input[type="text"]')
            .getValue();
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
     * Wait until the options menu is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isMenuOpen());
    }

    /**
     * Returns a new InternalDropdown page object for the element with the supplied id.
     * @method
     */
    [privateGetMenu]() {
        const menuId = `#${$(this.rootElement)
            .$('input[type="text"]')
            .getAttribute('aria-controls')}`;
        if (this.isMenuOpen()) {
            return new PageInternalDropdown(menuId);
        }
        return null;
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    hoverScrollUpArrow() {
        return this[privateGetMenu]().hoverScrollUpArrow();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    hoverScrollDownArrow() {
        return this[privateGetMenu]().hoverScrollDownArrow();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getOptionsLength() {
        return this[privateGetMenu]().getOptionsLength();
    }

    /**
     * Returns a new PicklistOption page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the PicklistOption.
     */
    getOption(optionIndex) {
        return this[privateGetMenu]().getOption(optionIndex);
    }

    /**
     * Clicks the search element
     * @method
     */
    clickSearch() {
        return this[privateGetMenu]().clickSearch();
    }
}

module.exports = PagePicklist;
