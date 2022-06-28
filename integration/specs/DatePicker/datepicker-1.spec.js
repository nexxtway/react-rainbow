const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const {
    TAB_KEY,
    ENTER_KEY,
    ESCAPE_KEY,
    SPACE_KEY,
    ARROW_LEFT_KEY,
    ARROW_DOWN_KEY,
} = require('../../constants');

const DATEPICKER = '#datePicker-1';

describe('DatePicker base', () => {
    beforeAll(async () => {
        await browser.url('/#!/DatePicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(DATEPICKER);
        await component.waitForExist();
    });
    it('should open the DatePicker when click on the input element', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.isOpen()).toBe(true);
    });
    it('should open the DatePicker when click on the label element', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.clickLabel();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.isOpen()).toBe(true);
    });
    it('should close the DatePicker when esc key is pressed', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.clickLabel();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.isOpen()).toBe(true);
        await browser.keys(ESCAPE_KEY);
        await datePicker.waitUntilClose();
        await expect(await datePicker.isOpen()).toBe(false);
    });
    it('should open the DatePicker when enter key is pressed while input element is focused', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await browser.keys(ENTER_KEY);
        await datePicker.waitUntilOpen();
        await expect(await datePicker.isOpen()).toBe(true);
    });
    it('should open the DatePicker when space key is pressed while input element is focused', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await browser.keys(ESCAPE_KEY);
        await browser.keys(SPACE_KEY);
        await datePicker.waitUntilOpen();
        await expect(await datePicker.isOpen()).toBe(true);
    });
    it('should show the right date on top of the DatePicker when it is open', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.getDate()).toBe('Friday, 10/25/2019');
    });
    it('should set the right value when select a date', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.getValue()).toBe('Friday, 10/25/2019');
        await datePicker.clickDay(31);
        await datePicker.waitUntilClose();
        await expect(await datePicker.isOpen()).toBe(false);
        await expect(await datePicker.getValue()).toBe('Thursday, 10/31/2019');
    });
    it('should set the right value when select a date with keyboard navigation', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await datePicker.waitUntilOpen();
        await expect(await datePicker.getValue()).toBe('Friday, 10/25/2019');
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(TAB_KEY);
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await datePicker.waitUntilClose();
        await expect(await datePicker.isOpen()).toBe(false);
        await expect(await datePicker.getValue()).toBe('Thursday, 10/31/2019');
    });
});
