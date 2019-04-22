const PageVerticalNavigation = require('../../../src/components/VerticalNavigation/pageObject');

const VERTICAL_NAV = '#vertical-navigation-3';

describe('VerticalNavigation with href example', () => {
    it('should go to "avatar page" when click on the "Avatar" item', () => {
        browser.url('/#!/VerticalNavigation/3');
        browser.refresh();
        const component = $(VERTICAL_NAV);
        component.waitForExist();

        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        expect(browser.getUrl()).toContain('Components/Avatar');
    });
});
