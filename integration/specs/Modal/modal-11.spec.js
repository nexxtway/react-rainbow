const PageModal = require('../../../src/components/Modal/pageObject');
const { ESCAPE_KEY, ENTER_KEY } = require('../../constants');

const BUTTON = '#button-3';
const MODAL = '#modal-3';
const TITLE_INPUT = '#modal-3 input[placeholder="Enter title"]';
const DATE_PICKER_INPUT = '#modal-3 input[placeholder="Select a date"]';
const TIME_PICKER_INPUT = '#modal-3 input[name="time"]';

describe('Modal with redux form example', () => {
    beforeAll(() => {
        browser.url('/#!/Modal/11');
    });
    beforeEach(() => {
        browser.refresh();
        browser.waitForExist(BUTTON);
    });
    it('should reset form state when close modal', () => {
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
    it('should return focus to date picker input when both modals are opened and press esc key', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.click(DATE_PICKER_INPUT);
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(browser.hasFocus(DATE_PICKER_INPUT)).toBe(true);
    });
    it('should return focus to date picker input when both modals are opened and click outside the modals', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.click(DATE_PICKER_INPUT);
        modal.waitUntilOpen();
        modal.clickOutside();
        expect(browser.hasFocus(DATE_PICKER_INPUT)).toBe(true);
    });
    it('should return focus to time picker input when both modals are opened and select a time', () => {
        const modal = new PageModal(MODAL);
        browser.click(BUTTON);
        modal.waitUntilOpen();
        browser.click(TIME_PICKER_INPUT);
        modal.waitUntilOpen();
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys(ENTER_KEY);
        expect(browser.hasFocus(TIME_PICKER_INPUT)).toBe(true);
    });
});
