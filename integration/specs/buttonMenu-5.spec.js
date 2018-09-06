const MENU_BTN_THREEDOTS_VERTICAL = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > div > header > div > div > div > button';
const SHOW_CODE_BUTTON = '#rsg-root > div > main > section > section > div > div > article > div > div.rainbow-flex.rainbow-justify_end.rainbow-p-vertical_xx-small > div > button';
const TAB_KEY = '\uE004';

describe('ButtonMenu with icons example', () => {
    it('should focus the next element in the page when the menu is opened and press the hey "tab"', () => {
        browser.url('/#!/ButtonMenu/5');
        browser.click(MENU_BTN_THREEDOTS_VERTICAL);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(SHOW_CODE_BUTTON)).toBe(true);
    });
});
