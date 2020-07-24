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

    /**
     * Returns true when the trigger element has focus.
     * @method
     * @returns {bool}
     */
    hasFocusTrigger() {
        return $(this.rootElement).isFocused();
    }
}

module.exports = PageInternalOverlayButton;
