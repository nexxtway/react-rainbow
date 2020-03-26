/**
 * Drawer page object class.
 * @class
 * @tutorial drawer
 */

function getPointOutsideDrawer(drawerPosition, drawerSize) {
    const x = drawerPosition.x > 0 ? drawerPosition.x - 2 : drawerSize.width + 2;
    const y = drawerPosition.y > 0 ? drawerPosition.y - 2 : drawerSize.height + 2;
    return { x, y };
}

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
        $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .click();
    }

    /**
     * Clicks the drawer's backdrop element.
     * @method
     */
    clickBackDrop() {
        $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .waitForDisplayed();

        const { x, y } = getPointOutsideDrawer(
            $(this.rootElement)
                .$('section[role="dialog"]')
                .getLocation(),
            $(this.rootElement)
                .$('section[role="dialog"]')
                .getSize(),
        );

        $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .click({ x, y });
    }

    /**
     * Returns true when the drawer is open, false otherwise.
     * @method
     * @returns {bool}
     */
    isOpen() {
        return (
            $(this.rootElement).isExisting() &&
            $(this.rootElement)
                .$('section[role="dialog"]')
                .isDisplayed() &&
            $(this.rootElement)
                .$('[id="drawer-close-button"]')
                .isDisplayed()
        );
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    hasFocusCloseButton() {
        return $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .isFocused();
    }

    /**
     * Wait until the open transition has finished.
     * @method
     */
    waitUntilOpen() {
        browser.pause(1000);
        browser.waitUntil(() => this.isOpen());
    }

    /**
     * Wait until the close transition has finished.
     * @method
     */
    waitUntilClose() {
        browser.pause(1000);
        browser.waitUntil(() => !$(this.rootElement).isExisting());
    }
}

module.exports = PageDrawer;
