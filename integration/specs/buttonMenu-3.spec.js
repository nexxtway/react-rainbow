const PageButtonMenu = require('../../src/components/ButtonMenu/pageObject');
const { ARROW_DOWN_KEY } = require('../constants');

const MENU_BTN = '#button-menu-divider';

function thirdElementActive() {
    browser.keys(ARROW_DOWN_KEY);
    browser.keys(ARROW_DOWN_KEY);
}

describe('ButtonMenu with divider example', () => {
    beforeEach(() => {
        browser.url('/#!/ButtonMenu/3');
        browser.refresh();
    });
    it('should move to fourth item when third item is active, press arrow down and there is a mediatory divider', () => {
        const buttonMenu = new PageButtonMenu(MENU_BTN);
        const menuItem = buttonMenu.getItem(3);
        buttonMenu.click();
        thirdElementActive();
        browser.keys(ARROW_DOWN_KEY);
        expect(menuItem.hasFocus()).toBe(true);
    });
});
