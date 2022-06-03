const PageButtonMenu = require('../../../src/components/ButtonMenu/pageObject');

const FIRST_MENU_BTN = '#button-menu-1';
const SECOND_MENU_BTN = '#button-menu-2';

describe('ButtonMenu with icons example', () => {
    it('should focus the next element in the page when the menu is opened and press the tab key', () => {
        browser.url('/#!/ButtonMenu/7');
        const secondButtonMenu = new PageButtonMenu(SECOND_MENU_BTN);
        const firsButtonMenu = $(FIRST_MENU_BTN);
        firsButtonMenu.click();
        browser.keys('Tab');
        expect(secondButtonMenu.hasFocusButton()).toBe(true);
    });
});
