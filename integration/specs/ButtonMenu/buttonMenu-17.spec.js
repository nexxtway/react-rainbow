const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');
const { ARROW_DOWN_KEY, ENTER_KEY } = require('../../constants');

const BUTTONMENU = '#button-menu-17';

const addMenuItem = () => $('#button-icon_add-new-menu-item').click();

describe('ButtonMenu with MenuItems changed dynamically', () => {
    it('should select the new option with keyboard after it is added dynamically', () => {
        browser.url('/#!/ButtonMenu/17');
        const component = $(BUTTONMENU);
        component.waitForExist();
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        const secondItemMenu = buttonMenu.getItem(1);
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item Two');
        browser.refresh();
        addMenuItem();
        buttonMenu.click();
        browser.keys(ARROW_DOWN_KEY);
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item New');
    });
});
