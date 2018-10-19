const PageProgressStep = require('../../ProgressStep/pageObject');

/**
 * ProgressIndicator page object class.
 * @class
 */
class PageProgressIndicator {
    /**
     * Create a new ProgressIndicator page object.
     * @constructor
     * @param {string} rootElement - The selector of the ProgressIndicator root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new ProgressStep page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the progress step item.
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('.rainbow-progress-step');
        if (items[itemPosition]) {
            return new PageProgressStep(`${this.rootElement} .rainbow-progress-step:nth-child(${itemPosition + 1})`);
        }
        return null;
    }
}

module.exports = PageProgressIndicator;
