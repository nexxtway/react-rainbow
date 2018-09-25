const PageModal = require('./../../src/components/Modal/pageObject');

const BUTTON_ICON = '#button-icon-1';
const MODAL = '#modal-1';
const ESCAPE_KEY = '\uE00C';
const TAB_KEY = '\uE004';

describe('Modal base example', () => {
    beforeEach(() => {
        browser.url('/#!/Modal/1');
        browser.refresh();
    });
    it('should open the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        expect(modal.isOpen()).toBe(true);
    });
    it('should close the modal when is opened and press ESC', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click outside of the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        modal.clickOutside();
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click the closeButton', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        modal.clickCloseButton();
        expect(modal.isOpen()).toBe(false);
    });
    it('should return focus to trigger element when close modal with ESC key', () => {
        browser.click(BUTTON_ICON);
        browser.keys(ESCAPE_KEY);
        expect(browser.hasFocus(BUTTON_ICON)).toBe(true);
    });
    it('should return focus to trigger element when close modal by clicking outside of the modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        modal.clickOutside();
        expect(browser.hasFocus(BUTTON_ICON)).toBe(true);
    });
    it('should return focus to trigger element when close modal with close button', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        modal.clickCloseButton();
        expect(browser.hasFocus(BUTTON_ICON)).toBe(true);
    });
    it('should focus the close button when the modal is opened and press TAB', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        browser.keys(TAB_KEY);
        expect(modal.hasFocusCloseButton()).toBe(true);
    });
});
