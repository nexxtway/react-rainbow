const PageTab = require('../../Tab/pageObject');

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
        const items = $(this.rootElement).$$('.rainbow-tab');
        if (items[itemPosition]) {
            return new PageTab(`${this.rootElement} .rainbow-tab:nth-child(${itemPosition + 1})`);
        }
        return null;
    }

    /**
     * Returns true when the left button existing.
     * @method
     * @returns {bool}
     */
    isLeftButtonExisting() {
        return !!$(this.rootElement).$$('.rainbow-tabset_button-icon')[0];
    }

    /**
     * Returns true when the right button existing.
     * @method
     * @returns {bool}
     */
    isRightButtonExisting() {
        return !!$(this.rootElement).$$('.rainbow-tabset_button-icon')[1];
    }

    /**
     * Returns true when the left button is enabled.
     * @method
     * @returns {bool}
     */
    isLeftButtonEnabled() {
        return $(this.rootElement).$$('.rainbow-tabset_button-icon')[0].isEnabled();
    }

    /**
     * Returns true when the right button is enabled.
     * @method
     * @returns {bool}
     */
    isRightButtonEnabled() {
        return $(this.rootElement).$$('.rainbow-tabset_button-icon')[1].isEnabled();
    }

    /**
     * Click the left button.
     * @method
     * @returns {bool}
     */
    clickToLeftButton() {
        return $(this.rootElement).$$('.rainbow-tabset_button-icon')[0].click();
    }

    /**
     * Click the right button.
     * @method
     * @returns {bool}
     */
    clickToRightButton() {
        return $(this.rootElement).$$('.rainbow-tabset_button-icon')[1].click();
    }
}

module.exports = PageTabset;
