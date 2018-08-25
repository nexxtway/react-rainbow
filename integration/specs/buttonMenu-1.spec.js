const MENU_BTN = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div > header > div > div > div > button';
const ITEM_1_CONTAINER = 'li=Menu Item One';
const ITEM_1 = 'a=Menu Item One';
const ITEM_2 = '//*[@id="rsg-root"]/div/main/section/section/div/div/article/div/article/div/div/div/header/div/div/div/div/ul/li[2]/a';
const ITEM_4 = 'a=Menu Item Four';
const REACT_LOGO = 'img[alt*="react lightning logo"]';
const ESCAPE_KEY = '\uE00C';
const SPACE_KEY = '\uE00D';
const ENTER_KEY = '\uE006';
const ARROW_DOWN_KEY = '\uE015';
const ARROW_UP_KEY = '\uE013';
const TAB_KEY = '\uE004';
const MENU_BTN_FOCUSED = () => {
    browser.click(MENU_BTN);
    browser.keys(ESCAPE_KEY);
};

describe('ButtonMenu base example', () => {
    beforeAll(() => {
        browser.url('/#!/ButtonMenu/1');
    });
    afterEach(() => {
        browser.keys(ESCAPE_KEY);
    });
    it('should open the menu when click on the button', () => {
        browser.click(MENU_BTN);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(true);
    });
    it('should close the menu when the menu is opened and click outside of the menu', () => {
        browser.click(MENU_BTN);
        browser.click(REACT_LOGO);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(false);
    });
    it('should close the menu when the menu is opened and press ESC', () => {
        browser.click(MENU_BTN);
        browser.keys(ESCAPE_KEY);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(false);
    });
    it('should put the menu button focused when the menu is opened and press ESC', () => {
        browser.click(MENU_BTN);
        browser.keys(ESCAPE_KEY);
        expect(browser.hasFocus(MENU_BTN)).toBe(true);
    });
    it('should open the menu when the button is focused and press Space', () => {
        MENU_BTN_FOCUSED();
        browser.keys(SPACE_KEY);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(true);
    });
    it('should open the menu when the button is focused and press Enter', () => {
        MENU_BTN_FOCUSED();
        browser.keys(ENTER_KEY);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(true);
    });
    it('should move to the next item when press arrow down', () => {
        browser.click(MENU_BTN);
        browser.keys('ArrowDown');
        browser.keys('ArrowDown');
        expect(browser.hasFocus(ITEM_2)).toBe(true);
    });
    it('should move to the previous item when press arrow up', () => {
        browser.click(MENU_BTN);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(browser.hasFocus(ITEM_1)).toBe(true);
    });
    it('should move to the first item when last item is active and press arrow down', () => {
        browser.click(MENU_BTN);
        browser.keys(ARROW_UP_KEY);
        browser.keys(ARROW_DOWN_KEY);
        expect(browser.hasFocus(ITEM_1)).toBe(true);
    });
    it('should move to the last item when first item is active and press arrow up', () => {
        browser.click(MENU_BTN);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ARROW_UP_KEY);
        expect(browser.hasFocus(ITEM_4)).toBe(true);
    });
    it('should close the menu when the menu is opened and press the hey "tab"', () => {
        browser.click(MENU_BTN);
        browser.keys(TAB_KEY);
        expect(browser.isVisible(ITEM_1_CONTAINER)).toBe(false);
    });
    // this is a test for a bug.
    // it('should put to the "Menu Item Four"(next menu item applicable) focused the "Menu Item Three" is focused and press the key "m"', () => {
    //     browser.url('/#!/ButtonMenu/1');
    //     browser.click(MENU_BTN);
    //     browser.keys(ARROW_UP_KEY);
    //     browser.keys(ARROW_UP_KEY);
    //     browser.keys('m');
    //     expect(browser.hasFocus(ITEM_4)).toBe(true);
    // });
});
