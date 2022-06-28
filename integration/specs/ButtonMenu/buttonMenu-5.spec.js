const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');

const MENU_BTN = '#button-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';

describe('ButtonMenu with subheaders example', () => {
    beforeAll(async () => {
        await browser.url('/#!/ButtonMenu/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(MENU_BTN);
        await component.waitForExist();
    });

    it('should open the menu when click on the button', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        await expect(await buttonMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const logoElement = await $(REACT_LOGO);
        await logoElement.click();
        await expect(await buttonMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        await browser.keys('Escape');
        await expect(await buttonMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and click an element', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(0);
        await menuItem.click();
        await expect(await buttonMenu.isOpen()).toBe(false);
    });
    it('should put the menu button focused when the menu is opened and press ESC', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        await browser.keys('Escape');
        await expect(await buttonMenu.hasFocusButton()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(0);
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should move to the next item when press arrow down', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(1);
        await browser.keys('ArrowDown');
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous item when press arrow up', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const secondMenuItem = await buttonMenu.getItem(1);
        const thirdMenuItem = await buttonMenu.getItem(2);
        await thirdMenuItem.hover();
        await browser.keys('ArrowUp');
        await expect(await secondMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const secondMenuItem = await buttonMenu.getItem(1);
        const thirdMenuItem = await buttonMenu.getItem(2);
        await secondMenuItem.hover();
        await browser.keys('ArrowDown');
        await expect(await thirdMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const menuItem = await buttonMenu.getItem(4);
        await browser.keys('ArrowUp');
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should close the menu when the menu is opened and press the key "tab"', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        await browser.keys('Tab');
        await expect(await buttonMenu.isOpen()).toBe(false);
    });
    it('should move focus to the item hovered', async () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        await buttonMenu.click();
        const thirdMenuItem = await buttonMenu.getItem(2);
        await thirdMenuItem.hover();
        await expect(await thirdMenuItem.hasFocus()).toBe(true);
    });
});
