const PagePicklistOption = require('../../PicklistOption/pageObject');

const privateGetMenuBoundsRect = Symbol('privateGetMenuBoundsRect');

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
            .$('[data-id=picklist-arrow-button-up]')
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
            .$('[data-id=picklist-arrow-button-down]')
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
        return $(this.rootElement)
            .$('[role="listbox"]')
            .isDisplayed();
    }

    /**
     * Returns the boundaries of Picklist dropdown menu.
     * @method
     * @returns {object}
     */
    [privateGetMenuBoundsRect]() {
        const menu = $(this.rootElement).$('[role="listbox"]');
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

module.exports = PagePicklist;
