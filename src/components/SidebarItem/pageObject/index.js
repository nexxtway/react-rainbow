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
            .$('a')
            .click();
    }

    /**
     * Return true when the sidebar item is active
     * @method
     * @returns {bool}
     */
    isActive() {
        return (
            $(this.rootElement).getAttribute('class') ===
            'rainbow-sidebar-item rainbow-sidebar-item--active'
        );
    }
}

module.exports = PageSidebarItem;
