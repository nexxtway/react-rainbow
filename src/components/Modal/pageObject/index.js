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
        browser.waitUntil(() => $(this.rootElement).$('.rainbow-modal_close-button').isDisplayed());
        $(this.rootElement).$('.rainbow-modal_close-button').click();
    }

    /**
     * Clicks the backdrop element.
     * @method
     */
    // clickOutside() {}

    /**
     * Returns true when the modal is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        if ($(this.rootElement).isDisplayed()) {
            return $(this.rootElement).$('section[role="dialog"]').isDisplayed() && $(this.rootElement).$('.rainbow-modal_close-button').isDisplayed();
        }
        return false;
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement).$('.rainbow-modal_close-button').isFocused();
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
