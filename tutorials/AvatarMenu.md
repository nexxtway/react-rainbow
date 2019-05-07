Here is an overview about how to use the AvatarMenu page object:

    const PageAvatarMenu = require('react-rainbow-components/components/AvatarMenu/pageObject');

    const AVATAR_MENU = '#avatar-menu-1';

    describe('AvatarMenu page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(AVATAR_MENU);
            component.waitForExist();
        });

        it('should open the menu when click on the AvatarMenu', () => {
            const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
            avatarMenu.click();
            expect(avatarMenu.isOpen()).toBe(true);
        });
        it('should set the focus to the first menu item when open the menu', () => {
            const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
            const menuItem = avatarMenu.getItem(0);
            avatarMenu.click();
            expect(menuItem.hasFocus()).toBe(true);
        });
        it('should move focus to the item hovered', () => {
            const avatarMenu = new PageAvatarMenu(AVATAR_MENU);
            const menuItem = avatarMenu.getItem(1);
            avatarMenu.click();
            menuItem.hover();
            expect(menuItem.hasFocus()).toBe(true);
        });
    });
