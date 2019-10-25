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
    it('should set correct date on modal header when day is clicked', () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        picker.click();
        picker.waitUntilModalIsOpen();
        expect(picker.getModalHeaderText()).toBe('10/25/19, 2:44 PM');
        picker.clickDay(10);
        expect(picker.getModalHeaderText()).toBe('10/10/19, 2:44 PM');
    });
});
