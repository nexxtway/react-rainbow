const PageModal = require('../../../src/components/Modal/pageObject');
const { TAB_KEY } = require('../../constants');

const BUTTON = '#button-2';
const MODAL = '#modal-2';

describe('Modal with footer example', () => {
    it('should return focus to the close button when tabbing all elements in modal', async () => {
        await browser.url('/#!/Modal/5');
        const triggerButton = $(BUTTON);
        await triggerButton.waitForExist();

        const modal = new PageModal(MODAL);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await expect(await modal.hasFocusCloseButton()).toBe(true);
    });
});
