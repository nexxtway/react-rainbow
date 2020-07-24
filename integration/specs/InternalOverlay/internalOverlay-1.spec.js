const PageInternalOverlay = require('../../../src/components/InternalOverlay/pageObject');
const PageInternalOverlayButton = require('../../../src/components/InternalOverlay/pageObject/button');
const { SPACE_KEY, ENTER_KEY, TAB_KEY } = require('../../constants');

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

    it('should set focus on trigger when click it', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        button.click();
        expect(button.hasFocusTrigger()).toBe(true);
    });

    it('should remove focus from trigger when clicked outside it', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        button.click();
        expect(button.hasFocusTrigger()).toBe(true);
        $('[data-preview="InternalOverlay"]').click();
        expect(button.hasFocusTrigger()).toBe(false);
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

    it('should set focus on trigger when press tab key', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        $('[data-preview="InternalOverlay"]').click();
        browser.keys(TAB_KEY);
        expect(button.hasFocusTrigger()).toBe(true);
    });

    it('should exist after set focus on trigger and press enter key', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        $('[data-preview="InternalOverlay"]').click();
        browser.keys(TAB_KEY);
        expect(button.hasFocusTrigger()).toBe(true);
        browser.keys(ENTER_KEY);
        expect(internalOverlay.exists()).toBe(true);
    });

    it('should not exist after set focus on trigger and press enter key twice', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        $('[data-preview="InternalOverlay"]').click();
        browser.keys(TAB_KEY);
        expect(button.hasFocusTrigger()).toBe(true);
        browser.keys(ENTER_KEY);
        browser.keys(ENTER_KEY);
        expect(internalOverlay.exists()).toBe(false);
    });

    it('should exist after set focus on trigger and press space key', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        $('[data-preview="InternalOverlay"]').click();
        browser.keys(TAB_KEY);
        expect(button.hasFocusTrigger()).toBe(true);
        browser.keys(SPACE_KEY);
        expect(internalOverlay.exists()).toBe(true);
    });

    it('should not exist after set focus on trigger and press space key twice', () => {
        const button = new PageInternalOverlayButton(BUTTON);
        const internalOverlay = new PageInternalOverlay(OVERLAY);
        $('[data-preview="InternalOverlay"]').click();
        browser.keys(TAB_KEY);
        expect(button.hasFocusTrigger()).toBe(true);
        browser.keys(SPACE_KEY);
        browser.keys(SPACE_KEY);
        expect(internalOverlay.exists()).toBe(false);
    });
});
