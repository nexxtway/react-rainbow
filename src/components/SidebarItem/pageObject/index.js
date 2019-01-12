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
        $(this.rootElement).$('a').click();
    }

    /**
<<<<<<< HEAD:src/components/SidebarItem/pageObject/index.js
     * Return true when the sidebar item is active
=======
     * Return true when the sidebarItem is active
>>>>>>> 1f9e6babedaecd48ce8dea6c6b17c997d751ba15:src/components/Sidebaritem/pageObject/index.js
     * @method
     * @returns {bool}
     */
    isActive() {
        return $(this.rootElement).getAttribute('class') === 'rainbow-sidebar-item rainbow-sidebar-item--active';
    }

}

module.exports = PageSidebarItem;
