const PageSidebar = require('../../../src/components/Sidebar/pageObject');

const SIDEBAR = '#sidebar-1';

describe('Sidebar with multiple items', () => {
    beforeEach(() => {
        browser.url('/#!/Sidebar/1');
        browser.refresh();
    });
    it('should make componet active on click event', () => {
        const sidebar = new PageSidebar(SIDEBAR);
        const sidebarItem = sidebar.getItem(1);
        sidebarItem.click();
        expect(sidebarItem.isActive()).toBe(true);
    });
});
