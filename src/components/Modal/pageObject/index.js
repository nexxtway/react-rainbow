/* eslint-disable no-return-await */
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
    async clickCloseButton() {
        await browser.waitUntil(async () =>
            $(this.rootElement)
                .$('[id="modal-close-button"]')
                .isDisplayed(),
        );
        await $(this.rootElement)
            .$('[id="modal-close-button"]')
            .click();
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
    async isOpen() {
        if (await $(this.rootElement).isDisplayed()) {
            return (
                (await $(this.rootElement)
                    .$('section[role="dialog"]')
                    .isDisplayed()) &&
                (await $(this.rootElement)
                    .$('[id="modal-close-button"]')
                    .isDisplayed())
            );
        }
        return false;
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusCloseButton() {
        return (await $(this.rootElement).$('[id="modal-close-button"]')).isFocused();
    }

    /**
     * Wait until the open modal transition has finished.
     * @method
     */
    async waitUntilOpen() {
        await browser.waitUntil(async () => await this.isOpen());
    }

    /**
     * Wait until the close modal transition has finished.
     * @method
     */
    async waitUntilClose() {
        await browser.waitUntil(async () => !(await this.isOpen()));
    }
}

module.exports = PageModal;
