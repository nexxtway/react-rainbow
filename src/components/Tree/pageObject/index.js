const PageNodeItem = require('./node');

/**
 * Tree page object class.
 * @class
 */
class PageTree {
    /**
     * Create a new Tree page object.
     * @constructor
     * @param {string} rootElement - The selector of the Tree root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Returns a new Node page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the Node.
     */
    getNode(itemPosition) {
        const items = $(this.rootElement).$$('[data-id="node-element-li"]');
        if (items[itemPosition]) {
            return new PageNodeItem(
                `${this.rootElement} [data-id="node-element-li"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }

    /**
     * Returns a new Node page object of the element at specified path.
     * @method
     * @param {array} path - Array with 0 base indexes that defines the node path in tree.
     */
    getNodeByPath(path) {
        const nodePath = path.join('.');
        const node = $(this.rootElement).$(`[data-path="${nodePath}"]`);
        if (node) {
            return new PageNodeItem(`${this.rootElement} [data-path="${nodePath}"]`);
        }
        return null;
    }
}

module.exports = PageTree;
