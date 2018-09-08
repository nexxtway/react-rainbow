const FOLDERS_BTN = 'div.rainbow-background-color_white.rainbow-p-top_small.rainbow-p-bottom_x-large > nav > div:nth-child(1) > button';
const ITEMS_CONTAINER = '#search-results-6';
const APPS_ITEM = 'li=Apps';
const SHARED_ITEM_LINK = 'a=Folder shared with Me';
const SHARED_ITEM = 'div.rainbow-background-color_white.rainbow-p-top_small.rainbow-p-bottom_x-large > nav > div:nth-child(1) > div > ul > li:nth-child(2)';
const SELECTED_ITEM_CLASS = 'rainbow-nav-vertical__item rainbow-is-active';
const TAB_KEY = '\uE004';
const ENTER_KEY = '\uE006';

describe('VerticalNavigation expandable example', () => {
    beforeEach(() => {
        browser.url('/#!/VerticalNavigation/11');
        browser.refresh();
    });

    it('should open the "FOLDERS" menu when click on the "FOLDERS" button', () => {
        browser.click(FOLDERS_BTN);
        expect(browser.isVisible(ITEMS_CONTAINER)).toBe(true);
    });
    it('should get focus the "FOLDERS" menu when click in the "FOLDERS" button', () => {
        browser.click(FOLDERS_BTN);
        expect(browser.hasFocus(FOLDERS_BTN)).toBe(true);
    });
    it('should close the "FOLDERS" menu when it is open and click on it', () => {
        browser.click(FOLDERS_BTN);
        browser.click(FOLDERS_BTN);
        browser.pause(500);
        expect(browser.isVisible(ITEMS_CONTAINER)).toBe(false);
    });
    it('should not lost focus the "FOLDERS" menu when it was closed', () => {
        browser.click(FOLDERS_BTN);
        browser.click(FOLDERS_BTN);
        expect(browser.hasFocus(FOLDERS_BTN)).toBe(true);
    });
    it('should lost focus the "FOLDERS" menu when it is focused and press the key "TAB"', () => {
        browser.click(FOLDERS_BTN);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(FOLDERS_BTN)).toBe(false);
    });
    it('should select the "Apps" item when click on it', () => {
        browser.click(FOLDERS_BTN);
        browser.click(APPS_ITEM);
        expect(browser.getAttribute(APPS_ITEM, 'class')).toBe(SELECTED_ITEM_CLASS);
    });
    it('should not lost select the "Apps" item when it is selected and press the key "TAB"', () => {
        browser.click(FOLDERS_BTN);
        browser.click(APPS_ITEM);
        browser.keys(TAB_KEY);
        expect(browser.getAttribute(APPS_ITEM, 'class')).toBe(SELECTED_ITEM_CLASS);
    });
    it('should move to the previous link ("Folder shared with Me" item) when "Apps" item is selected and press "TAB"', () => {
        browser.click(FOLDERS_BTN);
        browser.click(APPS_ITEM);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(SHARED_ITEM_LINK)).toBe(true);
    });
    it('should select the "SHARED" item when it is focused and press the key "ENTER"', () => {
        browser.click(FOLDERS_BTN);
        browser.click(APPS_ITEM);
        browser.keys(TAB_KEY);
        browser.keys(ENTER_KEY);
        expect(browser.getAttribute(SHARED_ITEM, 'class')).toBe(SELECTED_ITEM_CLASS);
    });
});
