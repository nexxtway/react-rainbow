const PageTabs = require('./../../src/components/Tabs/pageObject');

const TABS = '#tabs-1';

const LEFT_ARROW = 'Left arrow';
const RIGHT_ARROW = 'Right arrow';

describe('Tabset base example', () => {
    beforeEach(() => {
        browser.url('/#!/Tabs/1');
        browser.refresh();
    });

    it('should select the first tab when selected', () => {
        const tabs = new PageTabs(TABS);
        const tabItem = tabs.getItem(0);
        tabItem.click();
        expect(tabItem.isSelected()).toBe(true);
    });
    it('should select the last tab when the first has focus and left arrow key is pressed', () => {
        const tabs = new PageTabs(TABS);
        const tabItem = tabs.getItem(0);
        tabItem.click();
        browser.keys(LEFT_ARROW);
        const tabItem2 = tabs.getItem(1);
        expect(tabItem2.isSelected()).toBe(true);
    });
    it('should select the next tab when the first has focus and right arrow key is pressed', () => {
        const tabs = new PageTabs(TABS);
        const tabItem = tabs.getItem(0);
        const tabItem2 = tabs.getItem(1);
        tabItem.click();
        browser.keys(RIGHT_ARROW);
        expect(tabItem2.isSelected()).toBe(true);
    });
    it('should loose focus if other tab is selected', () => {
        const tabs = new PageTabs(TABS);
        const tabItem = tabs.getItem(0);
        const tabItem2 = tabs.getItem(1);
        tabItem.click();
        tabItem2.click();
        expect(tabItem.hasFocus()).toBe(false);
    });
    it('should loose focus if other tab is selected by keyboard navigation', () => {
        const tabs = new PageTabs(TABS);
        const tabItem = tabs.getItem(0);
        tabItem.click();
        browser.keys(RIGHT_ARROW);
        expect(tabItem.hasFocus()).toBe(false);
    });
});
