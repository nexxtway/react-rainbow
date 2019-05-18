const PageModal = require('../../../src/components/Modal/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const { ESCAPE_KEY, ENTER_KEY } = require('../../constants');

const BUTTON = '#button-3';
const MODAL = '#modal-3';
const TITLE_INPUT = '#modal-3 input[placeholder="Enter company name"]';
const DATE_PICKER_INPUT = '#modal-3 input[placeholder="Select a date"]';
const TIME_PICKER_INPUT = '#modal-3 input[name="time"]';
const LOOKUP_MODAL = '#lookup-modal';

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
    it('should return focus to date picker input when both modals are opened and press esc key', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const datePickerInput = $(DATE_PICKER_INPUT);
        datePickerInput.click();
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(datePickerInput.isFocused()).toBe(true);
    });
    // it('should return focus to date picker input when both modals are opened and click outside the modals', () => {
    //     const modal = new PageModal(MODAL);
    //     const triggerButton = $(BUTTON);
    //     triggerButton.click();
    //     modal.waitUntilOpen();
    //     const datePickerInput = $(DATE_PICKER_INPUT);
    //     datePickerInput.click();
    //     modal.waitUntilOpen();
    //     modal.clickOutside();
    //     expect(datePickerInput.isFocused()).toBe(true);
    // });
    it('should return focus to time picker input when both modals are opened and select a time', () => {
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
        expect(timePickerInput.isFocused()).toBe(true);
    });
    it('should not close the modal when is opened and press ESC if the lookup has value typed', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const component = $(LOOKUP_MODAL);
        component.waitForExist();
        const lookup = new PageLookup(LOOKUP_MODAL);
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
        const component = $(LOOKUP_MODAL);
        component.waitForExist();
        const lookup = new PageLookup(LOOKUP_MODAL);
        lookup.click();
        lookup.setQuery('qwerty');
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(lookup.getQuery()).toBe('');
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(false);
    });
});
