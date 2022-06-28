const PageOption = require('../../Option/pageObject');

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
    async hoverScrollUpArrow() {
        const upArrow = await $(this.rootElement).$('[data-id="internal-dropdown-arrow-up"]');
        await upArrow.scrollIntoView();
        return upArrow.moveTo();
    }

    /**
     * It moves the pointer over the menu scroll down arrow
     * @method
     */
    async hoverScrollDownArrow() {
        const downArrow = await $(this.rootElement).$('[data-id="internal-dropdown-arrow-down"]');
        await downArrow.scrollIntoView();
        return downArrow.moveTo();
    }

    /**
     * Get the number of registered options.
     * @method
     * @returns {number}
     */
    async getOptionsLength() {
        return (await $(this.rootElement).$$('li[data-selected="false"]')).length;
    }

    /**
     * Returns a new Option page object of the element in item position.
     * @method
     * @param {number} optionIndex - The base 0 index of the Option.
     */
    async getOption(optionIndex) {
        const activeOptions = await $(this.rootElement).$$('li[data-selected="false"]');
        const option = activeOptions[optionIndex];
        if (option && !option.error) {
            return new PageOption(option, await this[privateGetMenuBoundsRect]());
        }
        return null;
    }

    /**
     * Returns the boundaries of Picklist dropdown menu.
     * @method
     * @returns {object}
     */
    async [privateGetMenuBoundsRect]() {
        const menu = $(this.rootElement);
        // eslint-disable-next-line id-length
        const { x, y } = await menu.getLocation();
        const { width, height } = await menu.getSize();
        return {
            left: x,
            top: y,
            right: x + width,
            bottom: y + height,
        };
    }

    /**
     * Returns true when the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    async arrowDownExists() {
        return $(this.rootElement)
            .$('[data-id="internal-dropdown-arrow-down"]')
            .isExisting();
    }

    /**
     * Returns true when the arrow to scroll down exits, false otherwise.
     * @method
     * @returns {bool}
     */
    async arrowUpExists() {
        return $(this.rootElement)
            .$('[data-id="internal-dropdown-arrow-up"]')
            .isExisting();
    }

    /**
     * Returns true when the search no results found, false otherwise.
     * @method
     * @returns {bool}
     */
    async emptyMessageExist() {
        return $(this.rootElement)
            .$('[data-id="internal-dropdown-empty-message"]')
            .isExisting();
    }

    /**
     * Returns true when loading indicator is visible.
     * @method
     * @returns {bool}
     */
    async isLoading() {
        return $(this.rootElement)
            .$('ul[role="presentation"] > div > div')
            .isExisting();
    }

    /**
     * Clicks the input element.
     * @method
     */
    async clickSearch() {
        await $(this.rootElement)
            .$('input[type="search"]')
            .click();
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
}

module.exports = PageInternalDropdown;
