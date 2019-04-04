const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-1';

describe('Tabset base example', () => {
    beforeAll(() => {
        browser.url('/#!/Tabset/1');
        browser.waitForExist(TABSET);
    });
    beforeEach(() => {
        browser.refresh();
    });
    it('should select the first tab when selected', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        expect(tabItem.isSelected()).toBe(true);
    });
    it('should select the last tab when the first has focus and left arrow key is pressed', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        browser.keys(ARROW_LEFT_KEY);
        const tabItem2 = tabset.getItem(3);
        expect(tabItem2.isSelected()).toBe(true);
    });
    it('should select the next tab when the first has focus and right arrow key is pressed', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        const tabItem2 = tabset.getItem(1);
        tabItem.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(tabItem2.isSelected()).toBe(true);
    });
    it('should lost focus if other tab is selected', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        const tabItem2 = tabset.getItem(1);
        tabItem.click();
        tabItem2.click();
        expect(tabItem.hasFocus()).toBe(false);
    });
    it('should lost focus if other tab is selected by keyboard navigation', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(tabItem.hasFocus()).toBe(false);
    });
    it('should set the left buttons visible when the screen size is resized', () => {
        const tabset = new PageTabset(TABSET);
        expect(tabset.isLeftButtonExisting()).toBe(false);
        browser.windowHandleSize({ width: 705, height: 705 });
        expect(tabset.isLeftButtonExisting()).toBe(true);
    });
    it('should set the right buttons visible when the screen size is resized', () => {
        const tabset = new PageTabset(TABSET);
        expect(tabset.isRightButtonExisting()).toBe(false);
        browser.windowHandleSize({ width: 705, height: 705 });
        expect(tabset.isRightButtonExisting()).toBe(true);
    });
});
