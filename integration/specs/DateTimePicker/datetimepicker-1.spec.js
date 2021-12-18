const PageDateTimePicker = require('../../../src/components/DateTimePicker/pageObject');

const DATETIMEPICKER = '#datetimepicker-1';

describe('DateTimePicker', () => {
    beforeAll(() => {
        browser.url('/#!/DateTimePicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(DATETIMEPICKER);
        component.waitForExist();
    });
    it('should open the DateTimePicker when click on input element', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilOpen();
        expect(picker.isOpen()).toBe(true);
    });
    it('should open the DateTimePicker when click on the label element', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.clickLabel();
        picker.waitUntilOpen();
        expect(picker.isOpen()).toBe(true);
    });
    // it('should close the DateTimePicker when click the ok button', () => {
    //     const picker = new PageDateTimePicker(DATETIMEPICKER);
    //     picker.click();
    //     picker.waitUntilOpen();
    //     picker.clickOKButton();
    //     picker.waitUntilClose();
    //     expect(picker.isOpen()).toBe(false);
    // });
    it('should close the DateTimePicker when click the cancel button', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilOpen();
        picker.clickCancelButton();
        picker.waitUntilClose();
        expect(picker.isOpen()).toBe(false);
    });
    it('should set the right value when select a date', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilOpen();
        expect(picker.getValue()).toBe('Friday, 10/25/2019, 10:44 AM');
        picker.clickDay(10);
        picker.clickOKButton();
        picker.waitUntilClose();
        expect(picker.getValue()).toBe('Thursday, 10/10/2019, 10:44 AM');
    });
});
