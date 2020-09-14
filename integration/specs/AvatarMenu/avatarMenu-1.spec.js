const PageAvatarMenu = require('../../../src/components/AvatarMenu/pageObject');
const { ESCAPE_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY, TAB_KEY } = require('../../constants');

const AVATAR_MENU = '#avatar-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';

describe('AvatarMenu base example', () => {
    beforeAll(() => {
        browser.url('/#!/AvatarMenu/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(AVATAR_MENU);
        component.waitForExist();
    });

    it('should open the menu when click on the AvatarMenu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        expect(avatarMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const logoElement = $(REACT_LOGO);
        logoElement.click();
        expect(avatarMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(avatarMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and click an element', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        expect(avatarMenu.isOpen()).toBe(true);
        const menuItem = avatarMenu.getItem(1);
        menuItem.click();
        expect(avatarMenu.isOpen()).toBe(false);
    });
    it('should put the AvatarMenu button focused when the menu is opened and press ESC', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(avatarMenu.hasFocusButton()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const menuItem = avatarMenu.getItem(0);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the next item when press arrow down', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const menuItem = avatarMenu.getItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous item when press arrow up', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const menuItemOne = avatarMenu.getItem(0);
        const menuItemTwo = avatarMenu.getItem(1);
        menuItemTwo.hover();
        browser.keys(ARROW_UP_KEY);
        expect(menuItemOne.hasFocus()).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const firstMenuItem = avatarMenu.getItem(0);
        const lastMenuItem = avatarMenu.getItem(1);
        lastMenuItem.hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const lastMenuItem = avatarMenu.getItem(1);
        browser.keys(ARROW_UP_KEY);
        expect(lastMenuItem.hasFocus()).toBe(true);
    });
    it('should close the menu when the menu is opened and press the key "tab"', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(TAB_KEY);
        expect(avatarMenu.isOpen()).toBe(false);
    });
    it('should move focus to the item hovered', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        const menuItem = avatarMenu.getItem(1);
        menuItem.hover();
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should not have focus in the trigger AvatarMenu button when the menu is opened and press the tab key', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(TAB_KEY);
        expect(avatarMenu.hasFocusButton()).toBe(false);
    });
});
