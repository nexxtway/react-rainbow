/**
 * SidebarItem page object class.
 * @class
 */
class PageSidebarItem {
    /**
     * Create a new SidebarItem page object.
     * @constructor
     * @param {string} rootElement - The selector of the SidebarItem root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    /**
     * Clicks the sidebar a element.
     * @method
     */
    click() {
        $(this.rootElement)
            .$('[data-id="sidebar-item-clickable-element"]')
            .click();
    }

    /**
     * Return true when the sidebar item is active
     * @method
     * @returns {bool}
     */
    isActive() {
        return $(this.rootElement)
            .$('[aria-current="page"]')
            .isExisting();
    }
}

module.exports = PageSidebarItem;
