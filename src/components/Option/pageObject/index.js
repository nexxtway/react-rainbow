/* eslint-disable id-length */
/**
 * Option page object class.
 * @class
 */

function isPointWithinRect(point, rect) {
    const { x, y } = point;
    const { left, top, right, bottom } = rect;
    return x >= left && y >= top && x <= right && y <= bottom;
}

class PageOption {
    /**
     * Create a new Option page object.
     * @constructor
     * @param {string} rootElement - The selector of the Option root element.
     */
    constructor(rootElement, containerRect) {
        this.rootElement = rootElement;
        this.containerRect = containerRect;
    }

    /**
     * Clicks the Option
     * @method
     */
    click() {
        this.rootElement.click();
    }

    /**
     * It moves the pointer over the Option
     * @method
     */
    hover() {
        const itemElement = this.rootElement.$('div[role="option"]');
        itemElement.moveTo();
    }

    /**
     * Get the label of the Option.
     * @method
     * @returns {string}
     */
    getLabel() {
        return this.rootElement.$('div[role="option"]').getText();
    }

    /**
     * Returns true when the Option is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return this.rootElement.$('div[aria-selected="true"]').isExisting();
    }

    /**
     * Returns true when the Option is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return this.rootElement.getAttribute('data-selected') === 'true';
    }

    /**
     * Returns true when the Option is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    isVisible() {
        const { x, y } = this.rootElement.$('div[role="option"]').getLocation();
        const { width, height } = this.rootElement.$('div[role="option"]').getSize();

        return (
            this.rootElement.isDisplayedInViewport() &&
            (isPointWithinRect({ x, y }, this.containerRect) &&
                isPointWithinRect({ x: x + width, y: y + height }, this.containerRect))
        );
    }

    /**
     *  Wait until the option is visible.
     * @method
     */
    waitUntilIsVisible() {
        browser.waitUntil(() => this.isVisible());
    }
}

module.exports = PageOption;
