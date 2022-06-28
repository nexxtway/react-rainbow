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
     * Returns a new Node page object of the element at specified path.
     * @method
     * @param {array} path - Array with 0 base indexes that defines the node path in tree.
     */
    async getNode(path) {
        const nodePath = path.join('.');
        const node = await $(this.rootElement).$(`[data-path="${nodePath}"]`);
        if (node) {
            return new PageNodeItem(`${this.rootElement} [data-path="${nodePath}"]`);
        }
        return null;
    }
}

module.exports = PageTree;
