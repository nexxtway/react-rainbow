const PageModal = require('../../../src/components/Modal/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const PageTimePicker = require('../../../src/components/TimePicker/pageObject');
const { ESCAPE_KEY, ENTER_KEY, ARROW_DOWN_KEY } = require('../../constants');
const PageMultiSelect = require('../../../src/components/MultiSelect/pageObject');
const PageOption = require('../../../src/components/Option/pageObject');
const PagePicklist = require('../../../src/components/Picklist/pageObject');

const BUTTON = '#button-11';
const MODAL = '#modal-11';
const DATE_PICKER_INPUT = '#modal-datepicker-11';
const TITLE_INPUT = '#modal-11 input[placeholder="Enter company name"]';
const TIME_PICKER_INPUT = '#modal-timepicker-11';
const MODAL_LOOKUP = '#modal-lookup-11';
const MULTI_SELECT = '#multiselect-component-13';
const PICKLIST = '#picklist-13';

const getScrollTopPosition = () => {
    return browser.execute(() => {
        return window.pageYOffset;
    });
};

const scrollDown = () => {
    browser.keys(ARROW_DOWN_KEY);
    browser.keys(ARROW_DOWN_KEY);
    browser.keys(ARROW_DOWN_KEY);
    browser.keys(ARROW_DOWN_KEY);
};

describe('Modal with redux form example', () => {
    beforeAll(() => {
        browser.url('/#!/Modal/11');
    });

    beforeEach(() => {
        browser.refresh();
        const component = $(BUTTON);
        component.waitForExist({ timeout: 1000 });
    });

    it('should reset form state when close modal', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const titleInput = $(TITLE_INPUT);
        titleInput.click();
        titleInput.clearValue();
        expect(titleInput.getValue()).toBe('');
        modal.clickCloseButton();
        modal.waitUntilClose();
        triggerButton.click();
        modal.waitUntilOpen();
        expect(titleInput.getValue()).toBe('React Rainbow');
    });

    it('should not close the modal when it is opened and press ESC if the lookup has value typed', () => {
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
        browser.keys('Escape');
        expect(lookup.getQuery()).toBe('');
        browser.keys('Escape');
        browser.keys('Escape');
        expect(modal.isOpen()).toBe(false);
    });

    it('should not close the modal when is opened and press ESC if the lookup is open', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        expect(modal.isOpen()).toBe(true);
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
        expect(lookup.getSelectedOptionLabel()).toBe('San Fransisco');
        browser.keys('Escape');
        expect(modal.isOpen()).toBe(false);
    });

    // it('should not close when Picklist is open and press Esc key', () => {
    //     const modal = new PageModal(MODAL);
    //     const picklist = new PagePicklist(PICKLIST);
    //     const triggerButton = $(BUTTON);
    //     triggerButton.click();
    //     modal.waitUntilOpen();
    //     picklist.clickInput();
    //     picklist.waitUntilOpen();
    //     browser.keys(ESCAPE_KEY);
    //     expect(modal.isOpen()).toBe(true);
    // });

    it('should have scroll disabled when modal is opened', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const initialScrollTop = getScrollTopPosition();
        scrollDown();
        const finalScrollTop = getScrollTopPosition();
        const hasNotScrolled = finalScrollTop === initialScrollTop;
        expect(hasNotScrolled).toBe(true);
    });

    // it('should have scroll disabled when modal is opened and another modal is opened above', () => {
    //     const modal = new PageModal(MODAL);
    //     const triggerButton = $(BUTTON);
    //     triggerButton.click();
    //     modal.waitUntilOpen();
    //     const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
    //     datepicker.click();
    //     datepicker.waitUntilOpen();
    //     const initialScrollTop = getScrollTopPosition();
    //     scrollDown();
    //     const finalScrollTop = getScrollTopPosition();
    //     const hasNotScrolled = finalScrollTop === initialScrollTop;
    //     expect(hasNotScrolled).toBe(true);
    // });

    it('should close the modal when select an option with keyboard and then press ESC', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        lookup.click();
        lookup.setQuery('l');
        lookup.waitUntilOpen();
        browser.keys('ArrowDown');
        browser.keys('Enter');
        browser.keys('Escape');
        expect(modal.isOpen()).toBe(false);
    });
    // it('should not close when dropdown item is clicked', () => {
    //     const modal = new PageModal(MODAL);
    //     const triggerButton = $(BUTTON);
    //     triggerButton.click();
    //     modal.waitUntilOpen();
    //     const multiSelect = new PageMultiSelect(MULTI_SELECT);
    //     multiSelect.clickTrigger();
    //     multiSelect.waitUntilOpen();
    //     multiSelect.getOption(0).click();
    //     const picklist = new PagePicklist(PICKLIST);
    //     picklist.clickInput();
    //     picklist.waitUntilOpen();
    //     picklist.getOption(0).click();
    //     expect(modal.isOpen()).toBe(true);
    // });
    it.skip('should have scroll enabled after closing modal', () => {
        const modal = new PageModal(MODAL);
        const initialScrollTop = getScrollTopPosition();
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        modal.waitUntilClose();
        scrollDown();
        const finalScrollTop = getScrollTopPosition();
        const hasScrolled = finalScrollTop > initialScrollTop;
        expect(hasScrolled).toBe(true);
    });

    it.skip('should have scroll enabled when modal is opened and another modal is opened above and then all modals are closed', () => {
        const initialScrollTop = getScrollTopPosition();
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
        datepicker.click();
        datepicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        datepicker.waitUntilClose();
        browser.keys(ESCAPE_KEY);
        modal.waitUntilClose();
        scrollDown();
        const finalScrollTop = getScrollTopPosition();
        const hasScrolled = finalScrollTop > initialScrollTop;
        expect(hasScrolled).toBe(true);
    });

    it.skip('should have scroll disabled when modal is opened and another modal is opened above and then closed', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        const initialScrollTop = getScrollTopPosition();
        triggerButton.click();
        modal.waitUntilOpen();
        const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
        datepicker.click();
        datepicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        datepicker.waitUntilClose();
        scrollDown();
        const finalScrollTop = getScrollTopPosition();
        const hasNotScrolled = finalScrollTop === initialScrollTop;
        expect(hasNotScrolled).toBe(true);
    });

    it.skip('should return focus to date picker input when both modals are opened and press esc key', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const datePicker = new PageDatePicker(DATE_PICKER_INPUT);
        datePicker.click();
        datePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        datePicker.waitUntilClose();
        expect(datePicker.hasFocusInput()).toBe(true);
    });

    it.skip('should return focus to time picker input when both modals are opened and select a time', () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        triggerButton.click();
        modal.waitUntilOpen();
        const timePicker = new PageTimePicker(TIME_PICKER_INPUT);
        timePicker.clickTimeInput();
        timePicker.waitUntilOpen();
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys('0');
        browser.keys(ENTER_KEY);
        timePicker.waitUntilClose();
        expect(timePicker.hasFocusTimeInput()).toBe(true);
    });
});
