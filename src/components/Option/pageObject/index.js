/**
 * PicklistOption page object class.
 * @class
 */

function isPointWithinRect(point, rect) {
    const { x, y } = point;
    const { left, top, right, bottom } = rect;
    return x >= left && y >= top && x <= right && y <= bottom;
}

class PagePicklistOption {
    /**
     * Create a new PicklistOption page object.
     * @constructor
     * @param {string} rootElement - The selector of the PicklistOption root element.
     */
    constructor(rootElement, containerRect) {
        this.rootElement = rootElement;
        this.containerRect = containerRect;
    }

    /**
     * Clicks the PicklistOption
     * @method
     */
    click() {
        this.rootElement.click();
    }

    /**
     * It moves the pointer over the PicklistOption
     * @method
     */
    hover() {
        const itemElement = this.rootElement.$('div[role="option"]');
        itemElement.moveTo();
    }

    /**
     * Get the label of the PicklistOption.
     * @method
     * @returns {string}
     */
    getLabel() {
        return this.rootElement.$('div[role="option"]').getText();
    }

    /**
     * Returns true when the PicklistOption is active.
     * @method
     * @returns {bool}
     */
    isActive() {
        return this.rootElement.$('div[aria-selected="true"]').isExisting();
    }

    /**
     * Returns true when the PicklistOption is selected.
     * @method
     * @returns {bool}
     */
    isSelected() {
        return this.rootElement.$('li[data-selected="true"]').isExisting();
    }

    /**
     * Returns true when the PicklistOption is visible inside the menu container.
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

module.exports = PagePicklistOption;
