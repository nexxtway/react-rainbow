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
    click() {
        $(this.rootElement).click();
    }

    /**
     * Returns true when the li has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        const nodeEl = $(this.rootElement);
        return nodeEl.isExisting() && nodeEl.isFocused();
    }

    /**
     * Clicks the button icon element.
     * @method
     */
    clickExpandButton() {
        $(this.rootElement)
            .$('[data-id="node-element"] button')
            .click();
    }

    /**
     * Returns true when the node is expanded, false otherwise.
     * @method
     * @returns {bool}
     */
    isExpanded() {
        return $(this.rootElement)
            .$('[data-id="node-element-li"]')
            .isDisplayed();
    }
}

module.exports = PageNodeItem;
