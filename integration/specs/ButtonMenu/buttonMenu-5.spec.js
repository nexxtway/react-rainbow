const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');
const { ESCAPE_KEY, ARROW_DOWN_KEY, ARROW_UP_KEY, TAB_KEY } = require('../../constants');

const MENU_BTN = '#button-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';

describe('ButtonMenu with subheaders example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonMenu/5');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(MENU_BTN);
        component.waitForExist();
    });

    it('should open the menu when click on the button', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const logoElement = $(REACT_LOGO);
        logoElement.click();
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and click an element', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(0);
        menuItem.click();
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should put the menu button focused when the menu is opened and press ESC', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(buttonMenu.hasFocusButton()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(0);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the next item when press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous item when press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const secondMenuItem = buttonMenu.getItem(1);
        const thirdMenuItem = buttonMenu.getItem(2);
        thirdMenuItem.hover();
        browser.keys(ARROW_UP_KEY);
        expect(secondMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const secondMenuItem = buttonMenu.getItem(1);
        const thirdMenuItem = buttonMenu.getItem(2);
        secondMenuItem.hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(thirdMenuItem.hasFocus()).toBe(true);
    });
    it.skip('should move to the last item when first item is active and press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(4);
        browser.keys(ARROW_UP_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should close the menu when the menu is opened and press the key "tab"', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(TAB_KEY);
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should move focus to the item hovered', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const thirdMenuItem = buttonMenu.getItem(2);
        thirdMenuItem.hover();
        expect(thirdMenuItem.hasFocus()).toBe(true);
    });
});
