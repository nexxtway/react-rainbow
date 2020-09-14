const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');
const { ARROW_DOWN_KEY } = require('../../constants');

const BUTTONMENU = '#button-menu-17';

const addMenuItem = () => $('#button-icon_add-new-menu-item').click();

describe('ButtonMenu with MenuItems changed dynamically', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonMenu/17');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTONMENU);
        component.waitForExist();
    });
    it('should select the new option with keyboard after it is added dynamically', () => {
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        addMenuItem();
        buttonMenu.click();
        const secondItemMenu = buttonMenu.getItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item New');
    });
    it('should select the second option with keyboard after it is added and remove dynamically a new element', () => {
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        let secondItemMenu;
        addMenuItem();
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        secondItemMenu = buttonMenu.getItem(1);
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item New');
        addMenuItem();
        buttonMenu.click();
        secondItemMenu = buttonMenu.getItem(1);
        browser.keys(ARROW_DOWN_KEY);
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item Two');
    });
});
