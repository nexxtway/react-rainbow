const PageModal = require('./../../src/components/Modal/pageObject');

const MODAL = '#modal-1';
const ESCAPE_KEY = '\uE00C';
const TAB_KEY = '\uE004';

describe('Modal base example', () => {
    beforeEach(() => {
        browser.url('/#!/Modal/1');
        browser.refresh();
    });
    it('should close the modal when is opened and press ESC', () => {
        const modal = new PageModal(MODAL);
        modal.openModal();
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click outside of the modal', () => {
        const modal = new PageModal(MODAL);
        modal.openModal();
        modal.clickOutside();
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when is opened and click the closeButton', () => {
        const modal = new PageModal(MODAL);
        modal.openModal();
        modal.clickCloseButton();
        expect(modal.isOpen()).toBe(false);
    });
    it('should focus the closeButton when the modal is opened and press TAB', () => {
        const modal = new PageModal(MODAL);
        modal.openModal();
        browser.keys(TAB_KEY);
        expect(modal.hasFocusCloseButton()).toBe(true);
    });
});
