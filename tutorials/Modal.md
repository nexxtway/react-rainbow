Here is an overview about how to use the Modal page object:

    const PageModal = require('react-rainbow-components/components/Modal/pageObject');

    const BUTTON_ICON = '#modal-trigger-button-icon';
    const MODAL = '#modal-1';
    const ESCAPE_KEY = '\uE00C';
    const TAB_KEY = '\uE004';

    describe('Modal page object basic usage', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
        });
        beforeEach(() => {
            browser.refresh();
            const component = $(BUTTON_ICON);
            component.waitForExist();
        });

        it('should open the modal', () => {
            const modal = new PageModal(MODAL);
            const triggerButton = $(BUTTON_ICON);
            triggerButton.click();
            modal.waitUntilOpen();
            expect(modal.isOpen()).toBe(true);
        });
        it('should close the modal when is opened and press ESC', () => {
            const modal = new PageModal(MODAL);
            const triggerButton = $(BUTTON_ICON);
            triggerButton.click();
            modal.waitUntilOpen();
            browser.keys(ESCAPE_KEY);
            modal.waitUntilClose();
            expect(modal.isOpen()).toBe(false);
        });
        it('should close the modal when is opened and click the closeButton', () => {
            const modal = new PageModal(MODAL);
            const triggerButton = $(BUTTON_ICON);
            triggerButton.click();
            modal.waitUntilOpen();
            modal.clickCloseButton();
            modal.waitUntilClose();
            expect(modal.isOpen()).toBe(false);
        });
        it('should return focus to trigger element when close modal', () => {
            const modal = new PageModal(MODAL);
            const triggerButton = $(BUTTON_ICON);
            triggerButton.click();
            modal.waitUntilOpen();
            modal.clickCloseButton();
            modal.waitUntilClose();
            expect(browser.hasFocus(BUTTON_ICON)).toBe(true);
        });
        it('should focus the close button when the modal is opened and press TAB', () => {
            const modal = new PageModal(MODAL);
            const triggerButton = $(BUTTON_ICON);
            triggerButton.click();
            modal.waitUntilOpen();
            browser.keys(TAB_KEY);
            expect(modal.hasFocusCloseButton()).toBe(true);
        });
    });
