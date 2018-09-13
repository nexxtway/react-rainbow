const PageButtonMenu = require('./../../src/components/ButtonMenu/pageObject');

const FIRST_MENU_BTN = '#button-menu_integration-test--firstButton';
const SECOND_MENU_BTN = '#button-menu_integration-test--secondButton';
const TAB_KEY = '\uE004';

describe('ButtonMenu with icons example', () => {
    it('should focus the next element in the page when the menu is opened and press the hey "tab"', () => {
        const moreButtonMenu = new PageButtonMenu(SECOND_MENU_BTN);
        browser.url('/#!/ButtonMenu/7');
        browser.click(FIRST_MENU_BTN);
        browser.keys(TAB_KEY);
        expect(moreButtonMenu.hasFocusButton()).toBe(true);
    });
});
