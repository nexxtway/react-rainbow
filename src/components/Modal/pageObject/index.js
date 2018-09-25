/**
 * Modal page object class.
 * @class
 * @tutorial modal
 */
class PageModal {
    /**
     * Create a new Modal page object.
     * @constructor
     * @param {string} rootElement - The selector of the Modal root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the close button element.
     * @method
     */
    clickCloseButton() {
        $(this.rootElement).$('.rainbow-modal_close-button').click();
    }

    /**
     * Clicks the backdrop element.
     * @method
     */
    clickOutside() {
        $(this.rootElement).leftClick(1, 1);
    }

    /**
     * Returns true when the modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return $(this.rootElement).$('section[role="dialog"]').isVisible();
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement).$('.rainbow-modal_close-button').hasFocus();
    }
}

module.exports = PageModal;
