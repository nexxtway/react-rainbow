const PageInternalOverlay = require('../../../src/components/InternalOverlay/pageObject');

const BUTTON = '#button-icon-element';
const OVERLAY = '#overlay-1';
const CONTAINER = '#overlay-1-container';

describe('InternalOverlay with default position resolver', () => {
    beforeAll(() => {
        browser.url('/#!/InternalOverlay/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON);
        component.waitForExist();
    });

    it('should exist after one click on trigger and destroy on second click', () => {
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        expect(internalOverlay.exists()).toBe(true);
        triggerButton.click();
        expect(internalOverlay.exists()).toBe(false);
    });

    it('should not exists after click outside of element', () => {
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        const internalOverlayContainer = $(CONTAINER);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        expect(internalOverlay.exists()).toBe(true);
        internalOverlayContainer.click();
        expect(internalOverlay.exists()).toBe(false);
    });
});
