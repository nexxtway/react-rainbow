/**
 * Drawer page object class.
 * @class
 * @tutorial drawer
 */
class PageDrawer {
    /**
     * Create a new PageDrawer page object.
     * @constructor
     * @param {string} rootElement - The selector of the PageDrawer root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the close button element.
     * @method
     */
    clickCloseButton() {
        browser.waitUntil(() =>
            $(this.rootElement)
                .$('[data-id="drawer-close-button"]')
                .isDisplayed(),
        );
        $(this.rootElement)
            .$('[data-id="drawer-close-button"]')
            .click();
    }

    /**
     * Returns true when the drawer is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        if ($(this.rootElement).isDisplayed()) {
            return (
                $(this.rootElement)
                    .$('section[role="dialog"]')
                    .isDisplayed() &&
                $(this.rootElement)
                    .$('[data-id="drawer-close-button"]')
                    .isDisplayed()
            );
        }
        return false;
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement)
            .$('[data-id="drawer-close-button"]')
            .isFocused();
    }

    /**
     * Wait until the open transition has finished.
     * @method
     */
    waitUntilOpen() {
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Wait until the close transition has finished.
     * @method
     */
    waitUntilClose() {
        browser.waitUntil(() => !this.isOpen());
    }
}

module.exports = PageDrawer;
