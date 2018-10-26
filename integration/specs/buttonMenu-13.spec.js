const PageButtonMenu = require('../../src/components/ButtonMenu/pageObject');
const {
    ARROW_DOWN_KEY,
    ARROW_UP_KEY,
} = require('../constants');

const MENU_BTN = '#button-menu-disabled-items';

describe('ButtonMenu with disabled items', () => {
    beforeEach(() => {
        browser.url('/#!/ButtonMenu/13');
        browser.refresh();
    });
    it('should move to the first item when last focusable item is active and press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(0);
        buttonMenu.click();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the last focusabled item when first item is active and press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(2);
        buttonMenu.click();
        browser.keys(ARROW_UP_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should not move focus to the item hovered whe disabled is passed', () => {
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
        const menuItem = buttonMenu.getItem(0);
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
});
