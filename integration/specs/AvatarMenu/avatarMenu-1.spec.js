const PageAvatarMenu = require('../../../src/components/AvatarMenu/pageObject');

const AVATAR_MENU = '#avatar-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';

describe('AvatarMenu base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/AvatarMenu/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(AVATAR_MENU);
        await component.waitForExist();
    });

    it('should open the menu when click on the AvatarMenu', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await expect(await avatarMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const logoElement = await $(REACT_LOGO);
        await logoElement.click();
        await expect(await avatarMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await browser.keys('Escape');
        await expect(await avatarMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and click an element', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await expect(await avatarMenu.isOpen()).toBe(true);
        const menuItem = await avatarMenu.getItem(1);
        await menuItem.click();
        await expect(await avatarMenu.isOpen()).toBe(false);
    });
    it('should put the AvatarMenu button focused when the menu is opened and press ESC', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await browser.keys('Escape');
        await expect(await avatarMenu.hasFocusButton()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const menuItem = await avatarMenu.getItem(0);
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should move to the next item when press arrow down', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const menuItem = await avatarMenu.getItem(1);
        await browser.keys('ArrowDown');
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous item when press arrow up', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const menuItemOne = await avatarMenu.getItem(0);
        const menuItemTwo = await avatarMenu.getItem(1);
        await menuItemTwo.hover();
        await expect(await menuItemTwo.hasFocus()).toBe(true);
        await browser.keys('ArrowUp');
        await expect(await menuItemOne.hasFocus()).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const firstMenuItem = await avatarMenu.getItem(0);
        const lastMenuItem = await avatarMenu.getItem(1);
        await lastMenuItem.hover();
        await browser.keys('ArrowDown');
        await expect(await firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const lastMenuItem = await avatarMenu.getItem(1);
        await browser.keys('ArrowUp');
        await expect(await lastMenuItem.hasFocus()).toBe(true);
    });
    it('should close the menu when the menu is opened and press the key "tab"', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await browser.keys('Tab');
        await expect(await avatarMenu.isOpen()).toBe(false);
    });
    it('should move focus to the item hovered', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        const menuItem = await avatarMenu.getItem(1);
        await menuItem.hover();
        await expect(await menuItem.hasFocus()).toBe(true);
    });
    it('should not have focus in the trigger AvatarMenu button when the menu is opened and press the tab key', async () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        await avatarMenu.click();
        await browser.keys('Tab');
        await expect(await avatarMenu.hasFocusButton()).toBe(false);
    });
});
