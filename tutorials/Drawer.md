Here is an overview about how to use the Drawer page object:

    const PageDrawer = require('react-rainbow-components/components/Drawer/pageObject');

    const BUTTON = '#button-1';
    const DRAWER = '#drawer-1';

    describe('Drawer base example', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(BUTTON);
            component.waitForExist();
        });

        it('should open the drawer', () => {
            const drawer = new PageDrawer(DRAWER);
            const triggerButton = $(BUTTON);
            triggerButton.click();
            drawer.waitUntilOpen();
            expect(drawer.isOpen()).toBe(true);
        });
        it('should return focus to trigger element when close drawer with close button', () => {
            const drawer = new PageDrawer(DRAWER);
            const triggerButton = $(BUTTON);
            triggerButton.click();
            drawer.waitUntilOpen();
            drawer.clickCloseButton();
            drawer.waitUntilClose();
            expect(triggerButton.isFocused()).toBe(true);
        });
        it('should close the drawer when click outside', () => {
            const drawer = new PageDrawer(DRAWER);
            const triggerButton = $(BUTTON);
            triggerButton.click();
            drawer.waitUntilOpen();
            drawer.clickBackDrop();
            drawer.waitUntilClose();
            expect(triggerButton.isFocused()).toBe(true);
        });
    });
