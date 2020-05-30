/**
 * InternalOverlay page object class
 * @class
 */
class PageInternalOverlayButton {
    /**
     * Create a nre InternalOverlay page object
     * @constructor
     * @param {string} rootElement
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Click the trigger element
     * @method
     */
    click() {
        $(this.rootElement).click();
    }
}

module.exports = PageInternalOverlayButton;
