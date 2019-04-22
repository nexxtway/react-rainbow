const PageModal = require('../../../src/components/Modal/pageObject');
const { TAB_KEY } = require('../../constants');

const BUTTON = '#button-2';
const MODAL = '#modal-2';

describe('Modal with footer example', () => {
    it('should return focus to the close button when tabbing all elements in modal', () => {
        browser.url('/#!/Modal/5');
        const triggerButton = $(BUTTON);
        triggerButton.waitForExist();

        const modal = new PageModal(MODAL);
        triggerButton.click();
        modal.waitUntilOpen();
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        expect(modal.hasFocusCloseButton()).toBe(true);
    });
});
