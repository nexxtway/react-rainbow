/**
 * InternalOverlay page object class
 * @class
 */
class PageInternalOverlay {
    /**
     * Create a nre InternalOverlay page object
     * @constructor
     * @param {string} rootElement
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Checks if the element exists
     */
    exists() {
        return $(this.rootElement).isExisting();
    }
}

module.exports = PageInternalOverlay;
