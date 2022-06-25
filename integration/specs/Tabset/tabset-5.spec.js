const PageTabset = require('../../../src/components/Tabset/pageObject');

const TABSET = '#tabset-3';

describe('Tabset with multi Tabs', () => {
    beforeAll(async () => {
        await browser.url('/#!/Tabset/5');
        await browser.setWindowSize(1280, 1280);
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TABSET);
        await component.waitForExist();
    });

    it('should be disabled the left button when the first tab is visible', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = await tabset.getItem(0);
        await expect(await firstTab.isVisibleWithinViewport()).toBe(true);
        await expect(await tabset.isLeftButtonEnabled()).toBe(false);
    });
    it('should be enabled the right button when the first tab is visible', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = await tabset.getItem(0);
        await expect(await firstTab.isVisibleWithinViewport()).toBe(true);
        await expect(await tabset.isRightButtonEnabled()).toBe(true);
    });
    it('should set to visible a tab not visible on viewport when it is clicked', async () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = await tabset.getItem(13);
        await expect(await lastTab.isVisibleWithinViewport()).toBe(false);
        await lastTab.click();
        await expect(await lastTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set the first tab to visible if it was not visible on viewport when it is clicked', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = await tabset.getItem(0);
        const lastTab = await tabset.getItem(13);
        await lastTab.click();
        await expect(await firstTab.isVisibleWithinViewport()).toBe(false);
        await firstTab.click();
        await expect(await firstTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set visible a tab out of view on the right side whe click on the right button', async () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = await tabset.getItem(13);
        await expect(await lastTab.isVisibleWithinViewport()).toBe(false);
        await tabset.clickRightButton();
        await expect(await lastTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should set visible a tab out of view on the left side whe click on the left button', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = await tabset.getItem(0);
        await tabset.clickRightButton();
        await expect(await firstTab.isVisibleWithinViewport()).toBe(false);
        await tabset.clickLeftButton();
        await expect(await firstTab.isVisibleWithinViewport()).toBe(true);
    });
    it('should be disabled the right button when the last tab is visible', async () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = await tabset.getItem(13);
        await tabset.clickRightButton();
        await expect(await lastTab.isVisibleWithinViewport()).toBe(true);
        await expect(await tabset.isRightButtonEnabled()).toBe(false);
    });
    it('should be enabled the left button when the last tab is visible', async () => {
        const tabset = new PageTabset(TABSET);
        const lastTab = await tabset.getItem(13);
        await tabset.clickRightButton();
        await expect(await lastTab.isVisibleWithinViewport()).toBe(true);
        await expect(await tabset.isLeftButtonEnabled()).toBe(true);
    });
});
