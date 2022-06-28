const PageVerticalNavigation = require('../../../src/components/VerticalNavigation/pageObject');

const VERTICAL_NAV = '#vertical-navigation-3';

describe('VerticalNavigation with href example', () => {
    it('should go to "avatar page" when click on the "Avatar" item', async () => {
        await browser.url('/#!/VerticalNavigation/3');
        await browser.refresh();
        const component = await $(VERTICAL_NAV);
        await component.waitForExist();

        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalItem = await verticalNavigation.getItem(0);
        await verticalItem.click();
        await expect(await browser.getUrl()).toContain('Components/Avatar');
    });
});
