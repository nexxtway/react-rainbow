const PageAvatarMenu = require('./../../src/components/AvatarMenu/pageObject');
const {
    ESCAPE_KEY,
    SPACE_KEY,
    ENTER_KEY,
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
    TAB_KEY,
} = require('./../constants');

const AVATAR_MENU = '#avatar-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';

describe('AvatarMenu base example', () => {
    beforeEach(() => {
        browser.url('/#!/AvatarMenu/1');
        browser.refresh();
    });
    it('should open the menu when click on the AvatarMenu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        expect(avatarMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.click(REACT_LOGO);
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
        const menuItem = avatarMenu.getItem(1);
        avatarMenu.click();
        menuItem.click();
        expect(avatarMenu.isOpen()).toBe(false);
    });
    it('should put the menu button focused when the menu is opened and press ESC', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(avatarMenu.hasFocusButton()).toBe(true);
    });
    it('should open the menu when the button is focused and press Space', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(ESCAPE_KEY);
        browser.keys(SPACE_KEY);
        expect(avatarMenu.isOpen()).toBe(true);
    });
    it('should open the menu when the button is focused and press Enter', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        avatarMenu.click();
        browser.keys(ESCAPE_KEY);
        browser.keys(ENTER_KEY);
        expect(avatarMenu.isOpen()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        const menuItem = avatarMenu.getItem(0);
        avatarMenu.click();
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the next item when press arrow down', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        const menuItem = avatarMenu.getItem(1);
        avatarMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous item when press arrow up', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        const menuItemOne = avatarMenu.getItem(0);
        const menuItemTwo = avatarMenu.getItem(1);
        avatarMenu.click();
        menuItemTwo.hover();
        browser.keys(ARROW_UP_KEY);
        expect(menuItemOne.hasFocus()).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        const firstMenuItem = avatarMenu.getItem(0);
        const lastMenuItem = avatarMenu.getItem(1);
        avatarMenu.click();
        lastMenuItem.hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', () => {
        const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
        const firstMenuItem = avatarMenu.getItem(0);
        const lastMenuItem = avatarMenu.getItem(1);
        avatarMenu.click();
        firstMenuItem.hover();
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
        const menuItem = avatarMenu.getItem(1);
        avatarMenu.click();
        menuItem.hover();
        expect(menuItem.hasFocus()).toBe(true);
    });
});
