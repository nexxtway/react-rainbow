const PageSidebar = require('../../../src/components/Sidebar/pageObject');
const { TAB_KEY, ENTER_KEY } = require('../../constants');

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
    it('should make the second item active when first item is active and press TAB and ENTER key', () => {
        const sidebar = new PageSidebar(SIDEBAR);
        const sidebarItemOne = sidebar.getItem(0);
        const sidebarItemTwo = sidebar.getItem(1);
        sidebarItemOne.click();
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(sidebarItemTwo.isActive()).toBe(true);
    });
});
