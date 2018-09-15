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
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        expect(verticalSectionOverflow.isVerticalOverflowVisible()).toBe(true);
    });
    it('should get focus the "FOLDERS" menu when click in the "FOLDERS" button', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        expect(verticalSectionOverflow.hasFocusButton()).toBe(true);
    });
    it('should close the "FOLDERS" menu when it is open and click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        verticalSectionOverflow.click();
        browser.pause(500);
        expect(verticalSectionOverflow.isVerticalOverflowVisible()).toBe(false);
    });
    it('should not lost focus the "FOLDERS" menu when it was closed', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        verticalSectionOverflow.click();
        expect(verticalSectionOverflow.hasFocusButton()).toBe(true);
    });
    it('should lost focus the "FOLDERS" menu when it is focused and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        browser.keys(TAB_KEY);
        expect(verticalSectionOverflow.hasFocusButton()).toBe(false);
    });
    it('should select the "Apps" item when click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        expect(verticalItem.isSelected()).toBe(true);
    });
    it('should not lost select the "Apps" item when it is selected and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        expect(verticalItem.isSelected()).toBe(true);
    });
    it('should move to the next link ("Folder shared with Me" item) when "Apps" item is selected and press "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        const verticalItemNext = verticalNavigation.getItem(1);
        expect(verticalItemNext.hasFocus()).toBe(true);
    });
    it('should select the "SHARED" item when it is focused and press the key "ENTER"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        const verticalSectionOverflow = verticalNavigation.getSctionOverflow(0);
        verticalSectionOverflow.click();
        const verticalItem = verticalNavigation.getItem(0);
        verticalItem.click();
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        const verticalItemNext = verticalNavigation.getItem(1);
        expect(verticalItemNext.isSelected()).toBe(true);
    });
});
