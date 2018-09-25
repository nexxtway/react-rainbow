const PageModal = require('./../../src/components/Modal/pageObject');

const BUTTON_ICON = '#button-icon-2';
const MODAL = '#modal-2';
const TAB_KEY = '\uE004';

describe('Modal with footer example', () => {
    beforeEach(() => {
        browser.url('/#!/Modal/5');
        browser.refresh();
    });
    it('should return focus to the close button when tabbing all elements in modal', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON_ICON);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        expect(modal.hasFocusCloseButton()).toBe(true);
    });
});
