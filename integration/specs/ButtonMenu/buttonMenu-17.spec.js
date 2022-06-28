const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');

const BUTTONMENU = '#button-menu-17';

const addMenuItem = async () => (await $('#button-icon_add-new-menu-item')).click();

describe('ButtonMenu with MenuItems changed dynamically', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonMenu/17');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTONMENU);
        await component.waitForExist();
    });
    it('should select the new option with keyboard after it is added dynamically', async () => {
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        await addMenuItem();
        await buttonMenu.click();
        const secondItemMenu = await buttonMenu.getItem(1);
        await browser.keys('ArrowDown');
        await expect(await secondItemMenu.hasFocus()).toBe(true);
        await expect(await secondItemMenu.getLabelText()).toBe('Menu Item New');
    });
    it('should select the second option with keyboard after it is added and remove dynamically a new element', async () => {
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        await addMenuItem();
        await buttonMenu.click();
        await browser.keys('ArrowDown');
        const secondItemMenu = await buttonMenu.getItem(1);
        await addMenuItem();
        await buttonMenu.click();
        await browser.keys('ArrowDown');
        await expect(await secondItemMenu.hasFocus()).toBe(true);
        await expect(await secondItemMenu.getLabelText()).toBe('Menu Item Two');
    });
});
