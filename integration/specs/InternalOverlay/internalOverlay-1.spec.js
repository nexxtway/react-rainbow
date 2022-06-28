const PageInternalOverlay = require('../../../src/components/InternalOverlay/pageObject');

const BUTTON = '#button-icon-element';
const OVERLAY = '#overlay-1';
const CONTAINER = '#overlay-1-container';

describe('InternalOverlay with default position resolver', () => {
    beforeAll(async () => {
        await browser.url('/#!/InternalOverlay/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON);
        await component.waitForExist();
    });

    it('should exist after one click on trigger and destroy on second click', async () => {
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await expect(await internalOverlay.exists()).toBe(true);
        await triggerButton.click();
        await expect(await internalOverlay.exists()).toBe(false);
    });

    it('should not exists after click outside of element', async () => {
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        const internalOverlayContainer = $(CONTAINER);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await expect(await internalOverlay.exists()).toBe(true);
        await internalOverlayContainer.click();
        await expect(await internalOverlay.exists()).toBe(false);
    });
});
