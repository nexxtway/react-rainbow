const PageSidebarItem = require('../../SidebarItem/pageObject');

/**
 * Sidebar page object class
 * @class
 * @tutorial sidebar
 */
class PageSidebar {
    /**
     * Create a new Sidebar page object
     * @constructor
     * @param {string} rootElement - The selector if the Sidebar root element.
     */
    constructor(rootElement) {
        this.rootElement = rootElement;
    }
    /**
     * Return a new SidebarItem page object of the element in item position.
     * @method
     * @param {number} itemPosition - The base 0 index of the sidebar item
     */
    getItem(itemPosition) {
        const items = $(this.rootElement).$$('li[data-id="sidebar-item-li"]');
        if (items[itemPosition]) {
            return new PageSidebarItem(
                `${this.rootElement} li[data-id="sidebar-item-li"]:nth-child(${itemPosition + 1})`,
            );
        }
        return null;
    }
}

module.exports = PageSidebar;
