const STORE_MENU_BTN = '#button-menu_integration-test--faStore';
const MORE_MENU_BTN = '#button-menu_integration-test--faEllipsisV > button';
const TAB_KEY = '\uE004';

describe('ButtonMenu with icons example', () => {
    it('should focus the next element in the page when the menu is opened and press the hey "tab"', () => {
        browser.url('/#!/ButtonMenu/7');
        browser.click(STORE_MENU_BTN);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(MORE_MENU_BTN)).toBe(true);
    });
});
