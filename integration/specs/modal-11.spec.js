const PageModal = require('./../../src/components/Modal/pageObject');

const BUTTON = '#button-3';
const MODAL = '#modal-3';
const TITLE_INPUT = '#modal-3 input[placeholder="Enter title"]';

describe('Modal with redux form example', () => {
    it('should reset form state when close modal', () => {
        browser.url('/#!/Modal/11');
        browser.waitForExist(BUTTON);
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.setValue(TITLE_INPUT, '');
        expect(browser.getValue(TITLE_INPUT)).toBe('');
        modal.clickCloseButton();
        modal.waitUntilClose();
        browser.click(BUTTON);
        modal.waitUntilOpen();
        expect(browser.getValue(TITLE_INPUT)).toBe('React Rainbow');
    });
});
