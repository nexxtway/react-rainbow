const PageDateTimePicker = require('../../../src/components/DateTimePicker/pageObject');

const DATETIMEPICKER = '#datetimepicker-9';

describe('DateTimePicker', () => {
    beforeAll(() => {
        browser.url('/#!/DateTimePicker/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(DATETIMEPICKER);
        component.waitForExist();
    });
    it('should set 12:00 AM as time when day is selected', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilModalIsOpen();
        expect(picker.getTimeValue()).toBe('');
        picker.clickDay(10);
        expect(picker.getTimeValue()).toBe('12:00 AM');
    });
});
