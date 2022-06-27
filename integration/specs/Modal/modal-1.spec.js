const PageModal = require('../../../src/components/Modal/pageObject');
const { ESCAPE_KEY, TAB_KEY } = require('../../constants');

const BUTTON = '#button-1';
const MODAL = '#modal-1';

describe('Modal base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Modal/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON);
        await component.waitForExist();
    });

    it('should open the modal', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await expect(await modal.isOpen()).toBe(true);
    });
    it('should close the modal when is opened and press ESC', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await modal.waitUntilClose();
        await expect(await modal.isOpen()).toBe(false);
    });
    it('should return focus to trigger element when close modal with ESC key', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await triggerButton.isFocused()).toBe(true);
    });
    it('should focus the close button when the modal is opened and press TAB', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await browser.keys(TAB_KEY);
        await expect(await modal.hasFocusCloseButton()).toBe(true);
    });
    it('should close the modal and return focus to trigger element when is opened and click the closeButton', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await modal.clickCloseButton();
        await modal.waitUntilClose();
        await expect(await modal.isOpen()).toBe(false);
        await expect(await triggerButton.isFocused()).toBe(true);
    });
});
