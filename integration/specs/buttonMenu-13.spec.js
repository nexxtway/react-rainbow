const PageButtonMenu = require('../../src/components/ButtonMenu/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
} = require('../constants');

const MENU_BTN = '#button-menu-disabled-items';

describe('ButtonMenu when the second and last items are disabled', () => {
    beforeEach(() => {
        browser.url('/#!/ButtonMenu/13');
        browser.refresh();
    });
    it('should move to the first item when last focusable item is active and press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const lastFocusableMenuItem = buttonMenu.getItem(3);
        const firstMenuItem = buttonMenu.getItem(0);
        buttonMenu.click();
        lastFocusableMenuItem.hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last focusabled item when first item is active and press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(3);
        buttonMenu.click();
        browser.keys(ARROW_UP_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should not move focus to the item hovered when the item is disabled', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(1);
        buttonMenu.click();
        menuItem.hover();
        expect(menuItem.hasFocus()).toBe(false);
    });
    it('should not close the menu when the menu is opened and click an disabled item', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(1);
        buttonMenu.click();
        menuItem.click();
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should move to the next focusabled item when press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(2);
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous focusabled item when press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const thirdMenuItem = buttonMenu.getItem(2);
        const fourthMenuItem = buttonMenu.getItem(3);
        buttonMenu.click();
        fourthMenuItem.hover();
        browser.keys(ARROW_UP_KEY);
        expect(thirdMenuItem.hasFocus()).toBe(true);
    });
});
