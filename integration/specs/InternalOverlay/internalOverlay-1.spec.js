const PageInternalOverlay = require('../../../src/components/InternalOverlay/pageObject');
const PageInternalOverlayButton = require('../../../src/components/InternalOverlay/pageObject/button');

const BUTTON = '#button-icon-element';
const OVERLAY = '#overlay-1';

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
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        button.click();
        expect(internalOverlay.exists()).toBe(true);
        button.click();
        expect(internalOverlay.exists()).toBe(false);
    });

    it('should not exists after click outside of element', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        button.click();
        expect(internalOverlay.exists()).toBe(true);
        $('[data-preview="InternalOverlay"]').click();
        expect(internalOverlay.exists()).toBe(false);
    });
});
