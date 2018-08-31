const MENU_BTN_THREEDOTS_VERTICAL = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > div > header > div > div.slds-button-group.slds-m-right_medium > div > button';
const MENU_BTN_NOTIFICATION = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > div > header > div > div.rainbow-button-menu > button';
const TAB_KEY = '\uE004';

describe('ButtonMenu with icons example', () => {
    it('should focus the next element when the menu is opened and press the hey "tab"', () => {
        browser.url('/#!/ButtonMenu/5');
        browser.click(MENU_BTN_THREEDOTS_VERTICAL);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(MENU_BTN_NOTIFICATION)).toBe(true);
    });
});
