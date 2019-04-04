const PageTabset = require('../../../src/components/Tabset/pageObject');

const TABSET = '#tabset-3';

describe('Tabset with multi Tabs', () => {
    beforeAll(() => {
        browser.url('/#!/Tabset/5');
        browser.waitForExist(TABSET);
        browser.windowHandleSize({ width: 1280, height: 1280 });
    });
    beforeEach(() => {
        browser.refresh();
    });
    it('should be disabled the left button when the first tab is visible', () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = tabset.getItem(0);
        expect(firstTab.isVisibleWithinViewport()).toBe(true);
        expect(tabset.isLeftButtonEnabled()).toBe(false);
    });
    it('should be enabled the right button when the first tab is visible', () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = tabset.getItem(0);
        expect(firstTab.isVisibleWithinViewport()).toBe(true);
        expect(tabset.isRightButtonEnabled()).toBe(true);
    });
    it('should set to visible a tab not visible on viewport when it is clicked', () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = tabset.getItem(13);
        expect(lastTab.isVisibleWithinViewport()).toBe(false);
        lastTab.click();
        expect(lastTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set the first tab to visible if it was not visible on viewport when it is clicked', () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = tabset.getItem(0);
        const lastTab = tabset.getItem(13);
        lastTab.click();
        expect(firstTab.isVisibleWithinViewport()).toBe(false);
        firstTab.click();
        expect(firstTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set visible a tab out of view on the right side whe click on the right button', () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = tabset.getItem(13);
        expect(lastTab.isVisibleWithinViewport()).toBe(false);
        tabset.clickRightButton();
        expect(lastTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set visible a tab out of view on the left side whe click on the left button', () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = tabset.getItem(0);
        tabset.clickRightButton();
        expect(firstTab.isVisibleWithinViewport()).toBe(false);
        tabset.clickLeftButton();
        expect(firstTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should be disabled the right button when the last tab is visible', () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = tabset.getItem(13);
        tabset.clickRightButton();
        expect(lastTab.isVisibleWithinViewport()).toBe(true);
        expect(tabset.isRightButtonEnabled()).toBe(false);
    });
    it('should be enabled the left button when the last tab is visible', () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = tabset.getItem(13);
        tabset.clickRightButton();
        expect(lastTab.isVisibleWithinViewport()).toBe(true);
        expect(tabset.isLeftButtonEnabled()).toBe(true);
    });
});
