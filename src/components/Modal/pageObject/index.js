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
        if ($(this.rootElement).isVisible()) {
            return $(this.rootElement).$('section[role="dialog"]').isVisible() && $(this.rootElement).$('.rainbow-modal_close-button').isVisible();
        }
        return false;
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement).$('.rainbow-modal_close-button').hasFocus();
    }

    /**
     * Waiting until the open modal transition has finished.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Waiting until the close modal transition has finished.
     * @method
     */
    waitUntilClose() {
        browser.waitUntil(() => !this.isOpen());
    }
}

module.exports = PageModal;
