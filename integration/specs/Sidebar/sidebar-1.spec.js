const PageSidebar = require('../../../src/components/Sidebar/pageObject');
const { TAB_KEY, ENTER_KEY } = require('../../constants');

const SIDEBAR = '#sidebar-1';

describe('Sidebar with multiple items', () => {
    beforeAll(async () => {
        await browser.url('/#!/Sidebar/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(SIDEBAR);
        await component.waitForExist();
    });

    it('should make componet active on click event', async () => {
        const sidebar = new PageSidebar(SIDEBAR);
        const sidebarItem = await sidebar.getItem(1);
        await sidebarItem.click();
        await expect(await sidebarItem.isActive()).toBe(true);
    });
    it('should make the second item active when first item is active and press TAB and ENTER key', async () => {
        const sidebar = new PageSidebar(SIDEBAR);
        const sidebarItemOne = await sidebar.getItem(0);
        const sidebarItemTwo = await sidebar.getItem(1);
        await sidebarItemOne.click();
        await browser.keys(TAB_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await sidebarItemTwo.isActive()).toBe(true);
    });
});
