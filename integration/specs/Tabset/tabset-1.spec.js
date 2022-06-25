const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-1';

describe('Tabset base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Tabset/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TABSET);
        await component.waitForExist();
    });

    it('should select the first tab when selected', async () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = await tabset.getItem(0);
        await tabItem.click();
        await expect(await tabItem.isSelected()).toBe(true);
    });
    it('should select the last tab when the first has focus and left arrow key is pressed', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTabItem = await tabset.getItem(0);
        await firstTabItem.click();
        await browser.keys(ARROW_LEFT_KEY);
        const lastTabItem = await tabset.getItem(4);
        await expect(await lastTabItem.isSelected()).toBe(true);
    });
    it('should select the next tab when the first has focus and right arrow key is pressed', async () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = await tabset.getItem(0);
        const tabItem2 = await tabset.getItem(1);
        await tabItem.click();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await tabItem2.isSelected()).toBe(true);
    });
    it('should lost focus if other tab is selected', async () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = await tabset.getItem(0);
        const tabItem2 = await tabset.getItem(1);
        await tabItem.click();
        await tabItem2.click();
        await expect(await tabItem.hasFocus()).toBe(false);
    });
    it('should lost focus if other tab is selected by keyboard navigation', async () => {
        const tabset = new PageTabset(TABSET);
        const tabItem = await tabset.getItem(0);
        await tabItem.click();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await tabItem.hasFocus()).toBe(false);
    });
    it('should set the buttons visible when the screen size is resized', async () => {
        const tabset = new PageTabset(TABSET);
        await browser.setWindowSize(1920, 1080);
        await expect(await tabset.isButtonsVisible()).toBe(false);
        await browser.setWindowSize(610, 610);
        await expect(await tabset.isButtonsVisible()).toBe(true);
    });
});
