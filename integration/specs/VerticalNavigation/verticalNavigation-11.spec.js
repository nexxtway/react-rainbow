const PageVerticalNavigation = require('../../../src/components/VerticalNavigation/pageObject');
const { TAB_KEY, ENTER_KEY } = require('../../constants');

const VERTICAL_NAV = '#vertical-navigation-11';

describe('VerticalNavigation expandable example', () => {
    beforeAll(async () => {
        await browser.url('/#!/VerticalNavigation/11');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(VERTICAL_NAV);
        await component.waitForExist();
    });

    it('should expand the menu when click on its button', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        await verticalSectionOverflow.waitUntilExpand();
        await expect(await verticalSectionOverflow.isExpanded()).toBe(true);
    });
    it('should get focus on the menu when click its button', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        await expect(await verticalSectionOverflow.hasFocusButton()).toBe(true);
    });
    it('should collapse the menu when it is expanded and click on it', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        await verticalSectionOverflow.click();
        await verticalSectionOverflow.waitUntilCollapse();
        await expect(await verticalSectionOverflow.isExpanded()).toBe(false);
    });
    it('should not lost focus the menu when it is expanded and then collapsed', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        await verticalSectionOverflow.click();
        await expect(await verticalSectionOverflow.hasFocusButton()).toBe(true);
    });
    it('should lost the focus from menu when it is focused and press the key "TAB"', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        await browser.keys(TAB_KEY);
        await expect(await verticalSectionOverflow.hasFocusButton()).toBe(false);
    });
    it('should select the first item when click on it', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        const verticalItem = await verticalNavigation.getItem(0);
        await verticalItem.click();
        await expect(await verticalItem.isSelected()).toBe(true);
    });
    it('should not unselect the first item when it is selected and press the key "TAB"', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        const verticalItem = await verticalNavigation.getItem(0);
        await verticalItem.click();
        await browser.keys(TAB_KEY);
        await expect(await verticalItem.isSelected()).toBe(true);
    });
    it('should move focus to the next item when press "TAB"', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        const verticalItem = await verticalNavigation.getItem(0);
        await verticalItem.click();
        await browser.keys(TAB_KEY);
        const nextVerticalItem = await verticalNavigation.getItem(1);
        await expect(await nextVerticalItem.hasFocus()).toBe(true);
    });
    it('should select the next item when it is focused and press the key "ENTER"', async () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = await verticalNavigation.getSectionOverflow(0);
        await verticalSectionOverflow.click();
        const verticalItem = await verticalNavigation.getItem(0);
        await verticalItem.click();
        await browser.keys(TAB_KEY);
        await browser.keys(ENTER_KEY);
        const nextVerticalItem = await verticalNavigation.getItem(1);
        await expect(await nextVerticalItem.isSelected()).toBe(true);
    });
});
