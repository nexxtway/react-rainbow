Here is an overview about how to use the VerticalNavigation page object:

    const PageVerticalNavigation = require('react-rainbow-components/components/VerticalNavigation/pageObject');

    const VERTICAL_NAV = '#vertical-navigation-3';

    describe('VerticalNavigation page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(VERTICAL_NAV);
            component.waitForExist();
        });

        it('should expand the menu when click on its button', () => {
            const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
            const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
            verticalSectionOverflow.click();
            verticalSectionOverflow.waitUntilExpand();
            expect(verticalSectionOverflow.isExpanded()).toBe(true);
        });
        it('should get focus on the menu when click its button', () => {
            const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
            const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
            verticalSectionOverflow.click();
            expect(verticalSectionOverflow.hasFocusButton()).toBe(true);
        });
        it('should collapse the menu when it is expanded and click on it', () => {
            const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
            const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
            verticalSectionOverflow.click();
            verticalSectionOverflow.click();
            verticalSectionOverflow.waitUntilCollapse();
            expect(verticalSectionOverflow.isExpanded()).toBe(false);
        });
    });
