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
    beforeAll(() => {
        browser.url('/#!/DatePicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(DATEPICKER);
        component.waitForExist();
    });
    it('should open the DatePicker when click on the input element', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        expect(datePicker.isOpen()).toBe(true);
    });
    it('should open the DatePicker when click on the label element', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.clickLabel();
        datePicker.waitUntilOpen();
        expect(datePicker.isOpen()).toBe(true);
    });
    it('should close the DatePicker when esc key is pressed', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.clickLabel();
        datePicker.waitUntilOpen();
        expect(datePicker.isOpen()).toBe(true);
        browser.keys(ESCAPE_KEY);
        datePicker.waitUntilClose();
        expect(datePicker.isOpen()).toBe(false);
    });
    it('should open the DatePicker when enter key is pressed while input element is focused', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.keys(ENTER_KEY);
        expect(datePicker.isOpen()).toBe(true);
    });
    it('should open the DatePicker when space key is pressed while input element is focused', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        browser.keys(ESCAPE_KEY);
        browser.keys(SPACE_KEY);
        expect(datePicker.isOpen()).toBe(true);
    });
    it('should show the right date on top of the DatePicker when it is open', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        expect(datePicker.getDate()).toBe('Friday, 10/25/2019');
    });
    it('should set the right value when select a date', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        expect(datePicker.getValue()).toBe('Friday, 10/25/2019');
        datePicker.clickDay(31);
        datePicker.waitUntilClose();
        expect(datePicker.isOpen()).toBe(false);
        expect(datePicker.getValue()).toBe('Thursday, 10/31/2019');
    });
    it('should set the right value when select a date with keyboard navigation', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        datePicker.waitUntilOpen();
        expect(datePicker.getValue()).toBe('Friday, 10/25/2019');
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(TAB_KEY);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        datePicker.waitUntilClose();
        expect(datePicker.isOpen()).toBe(false);
        expect(datePicker.getValue()).toBe('Thursday, 10/31/2019');
    });
});
