const PageTab = require('../../Tab/pageObject');

const BUTTON_SELECTOR = '[data-id="button-icon-element"]';

/**
 * Tabset page object class.
 * @class
 */
class PageTabset {
    /**
     * Create a new Tabset page object.
     * @constructor
     * @param {string} rootElement - The selector of the Tabset root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Tab page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the tab item.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('li[role="presentation"]');
        if (items[itemPosition]) {
            return new PageTab(
                `${this.rootElement} li[role="presentation"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Returns true when buttons are visible.
     * @method
     * @returns {bool}
     */
    isButtonsVisible() {
        const buttons = $(this.rootElement).$$(BUTTON_SELECTOR);
        if (buttons && buttons.length) {
            return browser.waitUntil(() => buttons[0].isDisplayed() && buttons[1].isDisplayed());
        }
        return false;
    }

    /**
     * Returns true when the left button is enabled.
     * @method
     * @returns {bool}
     */
    isLeftButtonEnabled() {
        return $(this.rootElement)
            .$$(BUTTON_SELECTOR)[0]
            .isEnabled();
    }

    /**
     * Returns true when the right button is enabled.
     * @method
     * @returns {bool}
     */
    isRightButtonEnabled() {
        return $(this.rootElement)
            .$$(BUTTON_SELECTOR)[1]
            .isEnabled();
    }

    /**
     * Click the left button.
     * @method
     * @returns {bool}
     */
    clickLeftButton() {
        return $(this.rootElement)
            .$$(BUTTON_SELECTOR)[0]
            .click();
    }

    /**
     * Click the right button.
     * @method
     * @returns {bool}
     */
    clickRightButton() {
        return $(this.rootElement)
            .$$(BUTTON_SELECTOR)[1]
            .click();
    }
}

module.exports = PageTabset;
