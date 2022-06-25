/* eslint-disable no-return-await */
/* eslint-disable id-length */
/**
 * Option page object class.
 * @class
 */

async function isPointWithinRect(point, rect) {
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
    async click() {
        await this.rootElement.click();
    }

    /**
     * It moves the pointer over the Option
     * @method
     */
    async hover() {
        const itemElement = await this.rootElement.$('div[role="option"]');
        await itemElement.scrollIntoView();
        await itemElement.moveTo();
    }

    /**
     * Get the label of the Option.
     * @method
     * @returns {string}
     */
    async getLabel() {
        return (await this.rootElement.$('div[role="option"]')).getText();
    }

    /**
     * Returns true when the Option is active.
     * @method
     * @returns {bool}
     */
    async isActive() {
        return (await this.rootElement.$('div[aria-selected="true"]')).isExisting();
    }

    /**
     * Returns true when the Option is selected.
     * @method
     * @returns {bool}
     */
    async isSelected() {
        return (await this.rootElement.getAttribute('data-selected')) === 'true';
    }

    /**
     * Returns true when the Option is visible inside the menu container.
     * @method
     * @returns {bool}
     */
    async isVisible() {
        const { x, y } = await (await this.rootElement.$('div[role="option"]')).getLocation();
        const { width, height } = await (await this.rootElement.$('div[role="option"]')).getSize();

        return (
            (await this.rootElement.isDisplayedInViewport()) &&
            ((await isPointWithinRect({ x, y }, this.containerRect)) &&
                (await isPointWithinRect({ x: x + width, y: y + height }, this.containerRect)))
        );
    }

    /**
     *  Wait until the option is visible.
     * @method
     */
    async waitUntilIsVisible() {
        await browser.waitUntil(async () => await this.isVisible(), 30000);
    }

    /**
     * Scrolls the Option into view.
     * @method
     */
    async scrollIntoView() {
        await this.rootElement.scrollIntoView();
    }
}

module.exports = PageOption;
