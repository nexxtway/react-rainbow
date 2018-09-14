const PageButtonMenu = require('./../../src/components/ButtonMenu/pageObject');

const MENU_BTN = '#button-menu';
const REACT_LOGO = 'img[alt="rainbow logo"]';
const ESCAPE_KEY = '\uE00C';
const SPACE_KEY = '\uE00D';
const ENTER_KEY = '\uE006';
const ARROW_DOWN_KEY = '\uE015';
const ARROW_UP_KEY = '\uE013';
const TAB_KEY = '\uE004';

describe('ButtonMenu base example', () => {
    beforeEach(() => {
        browser.url('/#!/ButtonMenu/1');
        browser.refresh();
    });
    it('should open the menu when click on the button', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.click(REACT_LOGO);
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should put the menu button focused when the menu is opened and press ESC', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        expect(buttonMenu.hasFocusButton()).toBe(true);
    });
    it('should open the menu when the button is focused and press Space', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        browser.keys(SPACE_KEY);
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should open the menu when the button is focused and press Enter', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ESCAPE_KEY);
        browser.keys(ENTER_KEY);
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should set the focus to the first menu item when open the menu', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        expect(buttonMenu.hasFocusItem(0)).toBe(true);
    });
    it('should move to the next item when press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys('ArrowDown');
        expect(buttonMenu.hasFocusItem(1)).toBe(true);
    });
    it('should move to the previous item when press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(buttonMenu.hasFocusItem(1)).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(buttonMenu.hasFocusItem(0)).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(ARROW_UP_KEY);
        expect(buttonMenu.hasFocusItem(3)).toBe(true);
    });
    it('should close the menu when the menu is opened and press the hey "tab"', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        browser.keys(TAB_KEY);
        expect(buttonMenu.isOpen()).toBe(false);
    });
    it('should move focus to the item hovered', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        buttonMenu.hoverItem(1);
        expect(buttonMenu.hasFocusItem(1)).toBe(true);
    });
});
