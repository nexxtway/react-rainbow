Here is an overview about how to use the VerticalNavigation page object:

    const PageVerticalNavigation = require('react-rainbow-components/components/VerticalNavigation/pageObject');

    const VERTICAL_NAV = '#vertical-navigation-3';

    describe('VerticalNavigation page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });

        it('should go to "avatar page" when click on the "Avatar" item', () => {
            const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
            const verticalItem = verticalNavigation.getItem(0);
            verticalItem.click();
            expect(browser.getUrl()).toContain('Components/Avatar');
        });
    });
