/**
 * Node page object class.
 * @class
 */
class PageNodeItem {
    /**
     * Create a new Node page object.
     * @constructor
     * @param {string} rootElement - The selector of the Node root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the li element.
     * @method
     */
    async click() {
        await $(this.rootElement).click();
    }

    /**
     * Returns true when the li has focus.
     * @method
     * @returns {bool}
     */
    async hasFocus() {
        const nodeEl = $(this.rootElement);
        return (await nodeEl.isExisting()) && nodeEl.isFocused();
    }

    /**
     * Clicks the button icon element.
     * @method
     */
    async clickExpandButton() {
        await $(this.rootElement)
            .$('[data-id="node-element"] button')
            .click();
    }

    /**
     * Returns true when the node is expanded, false otherwise.
     * @method
     * @returns {bool}
     */
    async isExpanded() {
        const childEl = await $(this.rootElement).$('[data-id="node-element-li"]');
        return (await childEl.isExisting()) && childEl.isDisplayed();
    }

    /**
     * Returns true when the node is selected, false otherwise.
     * @method
     * @returns {bool}
     */
    async isSelected() {
        return (await $(this.rootElement).getAttribute('aria-selected')) === 'true';
    }
}

module.exports = PageNodeItem;
