const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');
const { ARROW_DOWN_KEY, ARROW_UP_KEY } = require('../../constants');

const MENU_BTN = '#button-menu-disabled-items';
const SHOW_CODE_BUTTON = 'button=Show Code';

describe('ButtonMenu when the second and last items are disabled', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonMenu/13');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(MENU_BTN);
        component.waitForExist();
        $(SHOW_CODE_BUTTON).moveTo();
    });

    it('should move to the first item when last focusable item is active and press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const lastFocusableMenuItem = buttonMenu.getItem(3);
        const firstMenuItem = buttonMenu.getItem(0);
        lastFocusableMenuItem.hover();
        browser.keys(ARROW_DOWN_KEY);
        expect(firstMenuItem.hasFocus()).toBe(true);
    });
    it('should move to the last focusabled item when first item is active and press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(3);
        browser.keys(ARROW_UP_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should not move focus to the item hovered when the item is disabled', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(1);
        menuItem.hover();
        expect(menuItem.hasFocus()).toBe(false);
    });
    it('should not close the menu when the menu is opened and click an disabled item', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(1);
        menuItem.click();
        expect(buttonMenu.isOpen()).toBe(true);
    });
    it('should move to the next focusabled item when press arrow down', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const menuItem = buttonMenu.getItem(2);
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
    it('should move to the previous focusabled item when press arrow up', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        buttonMenu.click();
        const thirdMenuItem = buttonMenu.getItem(2);
        const fourthMenuItem = buttonMenu.getItem(3);
        fourthMenuItem.hover();
        browser.keys(ARROW_UP_KEY);
        expect(thirdMenuItem.hasFocus()).toBe(true);
    });
});
