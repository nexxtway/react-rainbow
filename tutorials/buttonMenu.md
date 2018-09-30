Here is an overview about how to use the ButtonMenu page object:

    const PageButtonMenu = require('react-rainbow-components/components/ButtonMenu/pageObject');

    const BUTTON_MENU = '#button-menu-1';

    describe('ButtonMenu page object basic usage', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });
        it('should open the menu when click on the button', () => {
            const buttonMenu = new PageButtonMenu(BUTTON_MENU);
            buttonMenu.click();
            expect(buttonMenu.isOpen()).toBe(true);
        });
        it('should set the focus to the first menu item when open the menu', () => {
            const buttonMenu = new PageButtonMenu(BUTTON_MENU);
            buttonMenu.click();
            expect(buttonMenu.hasFocusItem(0)).toBe(true);
        });
        it('should move focus to the item hovered', () => {
            const buttonMenu = new PageButtonMenu(BUTTON_MENU);
            const menuItem = buttonMenu.getItem(1);
            buttonMenu.click();
            menuItem.hover();
            expect(menuItem.hasFocus()).toBe(true);
        });
    });
