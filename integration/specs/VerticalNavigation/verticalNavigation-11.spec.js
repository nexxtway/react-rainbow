const PageVerticalNavigation = require('../../../src/components/VerticalNavigation/pageObject');
const { TAB_KEY, ENTER_KEY } = require('../../constants');

const VERTICAL_NAV = '#vertical-navigation-11';

describe('VerticalNavigation expandable example', () => {
    beforeAll(() => {
        browser.url('/#!/VerticalNavigation/11');
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
    it('should not lost focus the menu when it is expanded and then collapsed', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        verticalSectionOverflow.click();
        expect(verticalSectionOverflow.hasFocusButton()).toBe(true);
    });
    it('should lost the focus from menu when it is focused and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        browser.keys(TAB_KEY);
        expect(verticalSectionOverflow.hasFocusButton()).toBe(false);
    });
    it('should select the first item when click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        expect(verticalItem.isSelected()).toBe(true);
    });
    it('should not unselect the first item when it is selected and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        expect(verticalItem.isSelected()).toBe(true);
    });
    it('should move focus to the next item when press "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        const nextVerticalItem = verticalNavigation.getItem(1);
        expect(nextVerticalItem.hasFocus()).toBe(true);
    });
    it('should select the next item when it is focused and press the key "ENTER"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSectionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        const nextVerticalItem = verticalNavigation.getItem(1);
        expect(nextVerticalItem.isSelected()).toBe(true);
    });
});
