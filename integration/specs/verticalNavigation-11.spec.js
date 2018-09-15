const PageVerticalNavigation = require('./../../src/components/VerticalNavigation/pageObject');

const VERTICAL_NAV = '#vertical-navigation-11';
const TAB_KEY = '\uE004';
const ENTER_KEY = '\uE006';

describe('VerticalNavigation expandable example', () => {
    beforeEach(() => {
        browser.url('/#!/VerticalNavigation/11');
        browser.refresh();
    });

    it('should open the "FOLDERS" menu when click on the "FOLDERS" button', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        expect(verticalNavigation.isSectionOverflowVisible(0)).toBe(true);
    });
    it('should get focus the "FOLDERS" menu when click in the "FOLDERS" button', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        expect(verticalNavigation.hasFocusSectionOVerflowButton(0)).toBe(true);
    });
    it('should close the "FOLDERS" menu when it is open and click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickSectionOverflow(0);
        browser.pause(500);
        expect(verticalNavigation.isSectionOverflowVisible(0)).toBe(false);
    });
    it('should not lost focus the "FOLDERS" menu when it was closed', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickSectionOverflow(0);
        expect(verticalNavigation.hasFocusSectionOVerflowButton(0)).toBe(true);
    });
    it('should lost focus the "FOLDERS" menu when it is focused and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.hasFocusSectionOVerflowButton(0)).toBe(false);
    });
    it('should select the "Apps" item when click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickItem(0);
        expect(verticalNavigation.isItemSelected(0)).toBe(true);
    });
    it('should not lost select the "Apps" item when it is selected and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickItem(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.isItemSelected(0)).toBe(true);
    });
    it('should move to the next link ("Folder shared with Me" item) when "Apps" item is selected and press "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickItem(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.hasFocusItem(1)).toBe(true);
    });
    it('should select the "SHARED" item when it is focused and press the key "ENTER"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickSectionOverflow(0);
        verticalNavigation.clickItem(0);
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(verticalNavigation.isItemSelected(1)).toBe(true);
    });
});
