const PagePicklistOption = require('../../PicklistOption/pageObject');

const privateGetMenuBoundsRect = Symbol('privateGetMenuBoundsRect');

/**
 * InternalDropdown page object class.
 * @class
 */
class PageInternalDropdown {
    /**
     * Create a new PageInternalDropdown page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageInternalDropdown root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * It moves the pointer over the menu scroll up arrow
     * @method
     */
    hoverScrollUpArrow() {
        return $(this.rootElement)
            .$('[data-id="internal-dropdown-arrow-up"]')
            .moveTo();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    hoverScrollDownArrow() {
        return $(this.rootElement)
            .$('[data-id="internal-dropdown-arrow-down"]')
            .moveTo();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    getOptionsLength() {
        return $(this.rootElement).$$('li[data-selected="false"]').length;
    }

    /**
     * Returns a new PicklistOption page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the PicklistOption.
     */
    getOption(optionIndex) {
        const activeOptions = $(this.rootElement).$$('li[data-selected="false"]');
        const option = activeOptions[optionIndex];
        if (option && !option.error) {
            return new PagePicklistOption(option, this[privateGetMenuBoundsRect]());
        }
        return null;
    }

    /**
     * Returns true when the options menu is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isMenuOpen() {
        return $(this.rootElement).isDisplayed();
    }

    /**
     * Returns the boundaries of Picklist dropdown menu.
     * @method
     * @returns {object}
     */
    [privateGetMenuBoundsRect]() {
        const menu = $(this.rootElement);
        const { x, y } = menu.getLocation();
        const { width, height } = menu.getSize();
        return {
            left: x,
            top: y,
            right: x + width,
            bottom: y + height,
        };
    }

    /**
     * Wait until the options menu is open.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isMenuOpen());
    }
}

module.exports = PageInternalDropdown;
