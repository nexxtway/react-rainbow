const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');

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
        browser.keys('ArrowDown');
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item New');
    });
    it('should select the second option with keyboard after it is added and remove dynamically a new element', () => {
        const buttonMenu = new PageButtonMenu(BUTTONMENU);
        addMenuItem();
        buttonMenu.click();
        browser.keys('ArrowDown');
        const secondItemMenu = buttonMenu.getItem(1);
        addMenuItem();
        buttonMenu.click();
        browser.keys('ArrowDown');
        expect(secondItemMenu.hasFocus()).toBe(true);
        expect(secondItemMenu.getLabelText()).toBe('Menu Item Two');
    });
});
