const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-1';

describe('Tabset base example', () => {
    beforeAll(() => {
        browser.url('/#!/Tabset/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TABSET);
        component.waitForExist();
    });

    it('should select the first tab when selected', () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = tabset.getItem(0);
        tabItem.click();
        expect(tabItem.isSelected()).toBe(true);
    });
    it('should select the last tab when the first has focus and left arrow key is pressed', () => {
        const tabset = new PageTabset(TABSET);
        const firstTabItem = tabset.getItem(0);
        firstTabItem.click();
        browser.keys(ARROW_LEFT_KEY);
        const lastTabItem = tabset.getItem(4);
        expect(lastTabItem.isSelected()).toBe(true);
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
    it('should set the buttons visible when the screen size is resized', () => {
        const tabset = new PageTabset(TABSET);
        browser.setWindowSize(1920, 1080);
        expect(tabset.isButtonsVisible()).toBe(false);
        browser.setWindowSize(610, 610);
        expect(tabset.isButtonsVisible()).toBe(true);
    });
});
