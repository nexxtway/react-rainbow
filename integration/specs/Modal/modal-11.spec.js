const PageModal = require('../../../src/components/Modal/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const { ESCAPE_KEY, ENTER_KEY, ARROW_DOWN_KEY } = require('../../constants');

const BUTTON = '#button-11';
const MODAL = '#modal-11';
const TITLE_INPUT = '#modal-11 input[placeholder="Enter company name"]';
const DATE_PICKER_INPUT = '#modal-11 input[placeholder="Select a date"]';
const TIME_PICKER_INPUT = '#modal-11 input[name="time"]';
const MODAL_LOOKUP = '#modal-lookup-11';

describe('Modal with redux form example', () => {
    beforeAll(() => {
        browser.url('/#!/Modal/11');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON);
        component.waitForExist();
    });

    it('should reset form state when close modal', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const titleInput = $(TITLE_INPUT);
        titleInput.setValue('');
        expect(titleInput.getValue()).toBe('');
        modal.clickCloseButton();
        modal.waitUntilClose();
        triggerButton.click();
        modal.waitUntilOpen();
        expect(titleInput.getValue()).toBe('React Rainbow');
    });
    it.skip('should return focus to date picker input when both modals are opened and press esc key', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const datePickerInput = $(DATE_PICKER_INPUT);
        datePickerInput.click();
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.waitUntil(() => !$('.rainbow-date-picker_modal').isDisplayed());
        expect(datePickerInput.isFocused()).toBe(true);
    });
    it.skip('should return focus to time picker input when both modals are opened and select a time', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const timePickerInput = $(TIME_PICKER_INPUT);
        timePickerInput.click();
        modal.waitUntilOpen();
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys(ENTER_KEY);
        browser.waitUntil(() => !$('.rainbow-time-picker_modal').isDisplayed());
        expect(timePickerInput.isFocused()).toBe(true);
    });
    it('should not close the modal when is opened and press ESC if the lookup has value typed', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(true);
    });
    it('should close the modal when is opened and press ESC if the lookup value typed was clear', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(lookup.getQuery()).toBe('');
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when select an option and then press ESC', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        const option3 = lookup.getOption(2);
        option3.click();
        expect(lookup.getSelectedOptionLabel()).toBe('La Habana');
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
    it('should close the modal when select an option with keyboard and then press ESC', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(lookup.getSelectedOptionLabel()).toBe('Barcelona');
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
});
