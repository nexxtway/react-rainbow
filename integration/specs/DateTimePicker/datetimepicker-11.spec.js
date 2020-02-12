const PageDateTimePicker = require('../../../src/components/DateTimePicker/pageObject');

const DATETIMEPICKER = '#datetimepicker-11';

describe('DateTimePicker', () => {
    beforeAll(() => {
        browser.url('/#!/DateTimePicker/11');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(DATETIMEPICKER);
        component.waitForExist();
    });
    it('should set 12:00 AM as time when day is selected', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilOpen();
        expect(picker.getTimeValue()).toBe('');
        picker.clickDay(10);
        expect(picker.getTimeValue()).toBe('12:00 AM');
    });
});
