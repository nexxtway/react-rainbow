/* eslint-disable class-methods-use-this */
/**
 * Modal page object class.
 * @class
 * @tutorial buttonMenu
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
     * Open the modal element.
     * @method
     */
    openModal() {
        $('#modal-container button[data-id="button-icon-element"]').click();
    }

    /**
     * Clicks the closeButton element.
     * @method
     */
    clickCloseButton() {
        $(this.rootElement).$('.rainbow-modal_close').click();
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
        return $(this.rootElement).$('[role="dialog"]').isVisible();
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement).$('.rainbow-modal_close').hasFocus();
    }
}

module.exports = PageModal;
