const PageTabset = require('./../../src/components/Tabset/pageObject');

const TABSET = '#tabset-1';

const LEFT_ARROW = 'Left arrow';

describe('Tabset with href example', () => {
    beforeEach(() => {
        browser.url('/#!/Tabset/1');
        browser.refresh();
    });

    it('should select the first tab when selected', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        expect(tabItem.isSelected()).toBe(true);
    });
    it('should select the secound tab when the first has focus and down key is pressed', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        browser.keys(LEFT_ARROW);
        const tabItem2 = tabset.getItem(1);
        expect(tabItem2.isSelected()).toBe(true);
    });
    it('should select the first tab when the first has focus and down key is pressed twice', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        browser.keys(LEFT_ARROW);
        browser.keys(LEFT_ARROW);
        expect(tabItem.isSelected()).toBe(true);
    });
});
