const PageVerticalNavigation = require('./../../src/components/VerticalNavigation/pageObject');

const VERTICAL_NAV = '#vertical-navigation';

const FOLDERS_BTN = 'div.rainbow-background-color_white.rainbow-p-top_small.rainbow-p-bottom_x-large > nav > div:nth-child(1) > button';
const ITEMS_CONTAINER = '#search-results-6';
const APPS_ITEM = 'li=Apps';
const SHARED_ITEM_LINK = 'a=Folder shared with Me';
const SHARED_ITEM = 'div.rainbow-background-color_white.rainbow-p-top_small.rainbow-p-bottom_x-large > nav > div:nth-child(1) > div > ul > li:nth-child(2)';
const SELECTED_ITEM_CLASS = 'rainbow-vertical-item rainbow-vertical-item--active';
const TAB_KEY = '\uE004';
const ENTER_KEY = '\uE006';

describe('VerticalNavigation expandable example', () => {
    beforeEach(() => {
        browser.url('/#!/VerticalNavigation/11');
        browser.refresh();
    });

    it('should open the "FOLDERS" menu when click on the "FOLDERS" button', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        expect(verticalNavigation.isOVerflowVisible(0)).toBe(true);
    });
    it('should get focus the "FOLDERS" menu when click in the "FOLDERS" button', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        expect(verticalNavigation.hasFocusExpandableItem(0)).toBe(true);
    });
    it('should close the "FOLDERS" menu when it is open and click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickExpandableItem(0);
        browser.pause(500);
        expect(verticalNavigation.isOVerflowVisible(0)).toBe(false);
    });
    it('should not lost focus the "FOLDERS" menu when it was closed', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickExpandableItem(0);
        expect(verticalNavigation.hasFocusExpandableItem(0)).toBe(true);
    });
    it('should lost focus the "FOLDERS" menu when it is focused and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.hasFocusExpandableItem(0)).toBe(false);
    });
    it('should select the "Apps" item when click on it', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickVerticalItem(0);
        expect(verticalNavigation.isVerticalItemSelected(0)).toBe(true);
    });
    it('should not lost select the "Apps" item when it is selected and press the key "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickVerticalItem(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.isVerticalItemSelected(0)).toBe(true);
    });
    it('should move to the previous link ("Folder shared with Me" item) when "Apps" item is selected and press "TAB"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickVerticalItem(0);
        browser.keys(TAB_KEY);
        expect(verticalNavigation.hasFocusVerticalItem(1)).toBe(true);
    });
    it('should select the "SHARED" item when it is focused and press the key "ENTER"', () => {
        const verticalNavigation = new PageVerticalNavigation(VERTICAL_NAV);
        verticalNavigation.clickExpandableItem(0);
        verticalNavigation.clickVerticalItem(0);
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(verticalNavigation.isVerticalItemSelected(1)).toBe(true);
    });
});
