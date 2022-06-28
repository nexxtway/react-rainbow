const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');

const MENU_BTN = '#button-menu-disabled-items';

describe('ButtonMenu when the second and last items are disabled', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonMenu/13');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(MENU_BTN);
        await component.waitForExist();
    });

    it('should move to the first item when last focusable item is active and press arrow down', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const lastFocusableMenuItem = await buttonMenu.getItem(3);
        const firstMenuItem = await buttonMenu.getItem(0);
        await lastFocusableMenuItem.hover();
        await browser.keys('ArrowDown');
        await expect(await firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last focusabled item when first item is active and press arrow up', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(3);
        await browser.keys('ArrowUp');
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should not move focus to the item hovered when the item is disabled', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(1);
        await menuItem.hover();
        await expect(await menuItem.hasFocus()).toBe(false);
    });
    it('should not close the menu when the menu is opened and click an disabled item', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(1);
        await menuItem.click();
        await expect(await buttonMenu.isOpen()).toBe(true);
    });
    it('should move to the next focusabled item when press arrow down', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(2);
        await browser.keys('ArrowDown');
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous focusabled item when press arrow up', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const thirdMenuItem = await buttonMenu.getItem(2);
        const fourthMenuItem = await buttonMenu.getItem(3);
        await fourthMenuItem.hover();
        await browser.keys('ArrowUp');
        await expect(await thirdMenuItem.hasFocus()).toBe(true);
    });
});
