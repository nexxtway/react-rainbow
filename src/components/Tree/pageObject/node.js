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
     * Clicks the button icon element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('[data-id="node-element"] > button')
            .click();
    }

    /**
     * Returns true when the button icon has focus.
     * @method
     * @returns {bool}
     */
    hasFocus() {
        return $(this.rootElement)
            .$('[data-id="node-element"] > button')
            .isFocused();
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

    /**
     * Returns the label of the node.
     * @method
     * @returns {string}
     */
    getLabel() {
        return $(this.rootElement)
            .$('[data-id="node-element"]')
            .$('h1')
            .getText();
    }
}

module.exports = PageNodeItem;
