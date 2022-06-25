const PageModal = require('../../../src/components/Modal/pageObject');
const PageLookup = require('../../../src/components/Lookup/pageObject');
const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const PageTimePicker = require('../../../src/components/TimePicker/pageObject');
const { ESCAPE_KEY, ENTER_KEY, ARROW_DOWN_KEY } = require('../../constants');
const PageMultiSelect = require('../../../src/components/MultiSelect/pageObject');
const PagePicklist = require('../../../src/components/Picklist/pageObject');

const BUTTON = '#button-11';
const MODAL = '#modal-11';
const DATE_PICKER_INPUT = '#modal-datepicker-11';
const TITLE_INPUT = '#modal-11 input[placeholder="Enter company name"]';
const TIME_PICKER_INPUT = '#modal-timepicker-11';
const MODAL_LOOKUP = '#modal-lookup-11';
const MULTI_SELECT = '#multiselect-component-13';
const PICKLIST = '#picklist-13';

const scrollToTop = async () => {
    return browser.execute(() => {
        window.scrollTo(0, 0);
    });
};

const getScrollTopPosition = async () => {
    return browser.execute(() => {
        return window.pageYOffset;
    });
};

const scrollDown = async () => {
    await browser.keys(ARROW_DOWN_KEY);
    await browser.keys(ARROW_DOWN_KEY);
    await browser.keys(ARROW_DOWN_KEY);
    await browser.keys(ARROW_DOWN_KEY);
    await browser.pause(1000); // wait for scroll to be applied
};

describe('Modal with redux form example', () => {
    beforeAll(async () => {
        await browser.url('/#!/Modal/11');
    });

    beforeEach(async () => {
        await browser.refresh();
        const component = await $(BUTTON);
        await component.waitForExist({ timeout: 1000 });
        await scrollToTop();
    });

    it('should reset form state when close modal', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const titleInput = $(TITLE_INPUT);
        await titleInput.click();
        await titleInput.clearValue();
        await expect(await titleInput.getValue()).toBe('');
        await modal.clickCloseButton();
        await modal.waitUntilClose();
        await triggerButton.click();
        await modal.waitUntilOpen();
        await expect(await titleInput.getValue()).toBe('React Rainbow');
    });

    it('should not close the modal when it is opened and press ESC if the lookup has value typed', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        await lookup.click();
        await lookup.setQuery('qwerty');
        await lookup.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await modal.isOpen()).toBe(true);
    });

    it('should close the modal when is opened and press ESC if the lookup value typed was clear', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        await lookup.click();
        await lookup.setQuery('qwerty');
        await lookup.waitUntilOpen();
        await browser.keys('Escape');
        await expect(await lookup.getQuery()).toBe('');
        await browser.keys('Escape');
        await browser.keys('Escape');
        await expect(await modal.isOpen()).toBe(false);
    });

    it('should not close the modal when is opened and press ESC if the lookup is open', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        await lookup.click();
        await lookup.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await modal.isOpen()).toBe(true);
    });

    it('should close the modal when select an option and then press ESC', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        const option3 = await lookup.getOption(2);
        await option3.click();
        await expect(await lookup.getSelectedOptionLabel()).toBe('San Fransisco');
        await browser.keys('Escape');
        await expect(await modal.isOpen()).toBe(false);
    });

    it('should not close when Picklist is open and press Esc key', async () => {
        const modal = new PageModal(MODAL);
        const picklist = new PagePicklist(PICKLIST);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await expect(await modal.isOpen()).toBe(true);
    });

    it('should have scroll disabled when modal is opened', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const initialScrollTop = await getScrollTopPosition();
        await scrollDown();
        const finalScrollTop = await getScrollTopPosition();
        const hasNotScrolled = finalScrollTop === initialScrollTop;
        await expect(hasNotScrolled).toBe(true);
    });

    it('should have scroll disabled when modal is opened and another modal is opened above', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
        await datepicker.click();
        await datepicker.waitUntilOpen();
        const initialScrollTop = await getScrollTopPosition();
        await scrollDown();
        const finalScrollTop = await getScrollTopPosition();
        const hasNotScrolled = finalScrollTop === initialScrollTop;
        await expect(hasNotScrolled).toBe(true);
    });

    it('should close the modal when select an option with keyboard and then press ESC', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const lookup = new PageLookup(MODAL_LOOKUP);
        await lookup.click();
        await lookup.setQuery('l');
        await lookup.waitUntilOpen();
        await browser.keys('ArrowDown');
        await browser.keys('Enter');
        await browser.keys('Escape');
        await expect(await modal.isOpen()).toBe(false);
    });

    it('should not close when dropdown item is clicked', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const multiSelect = new PageMultiSelect(MULTI_SELECT);
        await multiSelect.clickTrigger();
        await multiSelect.waitUntilOpen();
        await (await multiSelect.getOption(0)).click();
        const picklist = new PagePicklist(PICKLIST);
        await picklist.clickInput();
        await picklist.waitUntilOpen();
        await (await picklist.getOption(0)).click();
        await expect(await modal.isOpen()).toBe(true);
    });

    it('should have scroll enabled after closing modal', async () => {
        const modal = new PageModal(MODAL);
        const initialScrollTop = await getScrollTopPosition();
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await modal.waitUntilClose();
        await scrollDown();
        const finalScrollTop = await getScrollTopPosition();
        const hasScrolled = finalScrollTop > initialScrollTop;
        await expect(hasScrolled).toBe(true);
    });

    it('should have scroll enabled when modal is opened and another modal is opened above and then all modals are closed', async () => {
        const initialScrollTop = await getScrollTopPosition();
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
        await datepicker.click();
        await datepicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await datepicker.waitUntilClose();
        await browser.keys(ESCAPE_KEY);
        await modal.waitUntilClose();
        await scrollDown();
        const finalScrollTop = await getScrollTopPosition();
        const hasScrolled = finalScrollTop > initialScrollTop;
        await expect(hasScrolled).toBe(true);
    });

    it('should have scroll disabled when modal is opened and another modal is opened above and then closed', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        const initialScrollTop = await getScrollTopPosition();
        await triggerButton.click();
        await modal.waitUntilOpen();
        const datepicker = new PageDatePicker(DATE_PICKER_INPUT);
        await datepicker.click();
        await datepicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await datepicker.waitUntilClose();
        await scrollDown();
        const finalScrollTop = await getScrollTopPosition();
        const hasNotScrolled = finalScrollTop === initialScrollTop;
        await expect(hasNotScrolled).toBe(true);
    });

    it('should return focus to date picker input when both modals are opened and press esc key', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const datePicker = new PageDatePicker(DATE_PICKER_INPUT);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await datePicker.waitUntilClose();
        await expect(await datePicker.hasFocusInput()).toBe(true);
    });

    it('should return focus to time picker input when both modals are opened and select a time', async () => {
        const modal = new PageModal(MODAL);
        const triggerButton = $(BUTTON);
        await triggerButton.click();
        await modal.waitUntilOpen();
        const timePicker = new PageTimePicker(TIME_PICKER_INPUT);
        await timePicker.clickTimeInput();
        await timePicker.waitUntilOpen();
        await browser.keys('0');
        await browser.keys('0');
        await browser.keys('0');
        await browser.keys('0');
        await browser.keys(ENTER_KEY);
        await timePicker.waitUntilClose();
        await expect(await timePicker.hasFocusTimeInput()).toBe(true);
    });
});
