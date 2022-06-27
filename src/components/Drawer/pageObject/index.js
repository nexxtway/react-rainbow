/* eslint-disable no-return-await */
/* eslint-disable id-length */
/**
 * Drawer page object class.
 * @class
 * @tutorial drawer
 */

function getPointOutsideDrawer(drawerPosition, drawerSize) {
    const x = drawerPosition.x > 0 ? drawerPosition.x - 2 : drawerSize.width + 2;
    const y = Math.round(drawerSize.height / 2);
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
    async clickCloseButton() {
        await $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .click();
    }

    /**
     * Clicks the drawer's backdrop element.
     * @method
     */
    async clickBackDrop() {
        await $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .waitForDisplayed();

        const section = await $(this.rootElement).$('section[role="dialog"]');
        const { x, y } = getPointOutsideDrawer(
            await section.getLocation(),
            await section.getSize(),
        );

        await $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .click({ x, y });
    }

    /**
     * Returns true when the drawer is open, false otherwise.
     * @method
     * @returns {bool}
     */
    async isOpen() {
        return (
            (await $(this.rootElement).isExisting()) &&
            (await $(this.rootElement)
                .$('section[role="dialog"]')
                .isDisplayed()) &&
            (await $(this.rootElement)
                .$('[id="drawer-close-button"]')
                .isDisplayed())
        );
    }

    /**
     * Returns true when the closeButton has focus.
     * @method
     * @returns {bool}
     */
    async hasFocusCloseButton() {
        return $(this.rootElement)
            .$('[id="drawer-close-button"]')
            .isFocused();
    }

    /**
     * Wait until the open transition has finished.
     * @method
     */
    async waitUntilOpen() {
        await browser.pause(1000);
        await browser.waitUntil(async () => await this.isOpen());
    }

    /**
     * Wait until the close transition has finished.
     * @method
     */
    async waitUntilClose() {
        await browser.pause(1000);
        await browser.waitUntil(async () => !(await $(this.rootElement).isExisting()));
    }
}

module.exports = PageDrawer;
