Here is an overview about how to use the Sidebar page object:

    const PageSidebar = require('react-rainbow-components/components/Sidebar/pageObject');

    const SIDEBAR = '#sidebar-1';
    const TAB_KEY = '\uE004';
    const ENTER_KEY = '\uE006';

    describe('Sidebar page object basic usage', () => {
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
