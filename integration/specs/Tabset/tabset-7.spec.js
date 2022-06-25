const PageTabset = require('../../../src/components/Tabset/pageObject');
const { ARROW_RIGHT_KEY } = require('../../constants');

const TABSET = '#tabset-7';

const addRecents = () => $('#button-icon_add-recents').click();

describe('Tabset with Tabs changed dynamically', () => {
    beforeAll(async () => {
        await browser.url('/#!/Tabset/7');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TABSET);
        await component.waitForExist();
    });

    it('should select the new option with keyboard after it is added dynamically', async () => {
        const tabset = new PageTabset(TABSET);
        const firstTab = await tabset.getItem(0);
        await firstTab.click();
        await browser.keys(ARROW_RIGHT_KEY);
        const secondTab = await tabset.getItem(1);
        await expect(await secondTab.isSelected()).toBe(true);
        await expect(await secondTab.getLabelText()).toBe('SHARED');
        await browser.refresh();
        await addRecents();
        await firstTab.click();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await secondTab.isSelected()).toBe(true);
        await expect(await secondTab.getLabelText()).toBe('RECENTS');
    });
    it('should select the second option with keyboard after it is added and remove dynamically a new element', async () => {
        const tabset = new PageTabset(TABSET);
        await addRecents();
        const firstTab = await tabset.getItem(0);
        await firstTab.click();
        await browser.keys(ARROW_RIGHT_KEY);
        const secondTab = await tabset.getItem(1);
        await expect(await secondTab.isSelected()).toBe(true);
        await expect(await secondTab.getLabelText()).toBe('RECENTS');
        await addRecents();
        await firstTab.click();
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await secondTab.isSelected()).toBe(true);
        await expect(await secondTab.getLabelText()).toBe('SHARED');
    });
});
