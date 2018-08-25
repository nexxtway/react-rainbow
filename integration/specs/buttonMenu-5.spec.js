const MENU_BTN_THREEDOTS_VERTICAL = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > header > div > div.slds-button-group.slds-m-right_medium > div > button';
const MENU_BTN_NOTIFICATION = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > header > div > div.slds-dropdown-trigger.slds-dropdown-trigger_click.slds-button_last > button';
const TAB_KEY = '\uE004';

describe('ButtonMenu with icons example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonMenu/5');
    });

    it('should focus the next element when the menu is opened and press the hey "tab"', () => {
        browser.click(MENU_BTN_THREEDOTS_VERTICAL);
        browser.keys(TAB_KEY);
        expect(browser.hasFocus(MENU_BTN_NOTIFICATION)).toBe(true);
    });
});
