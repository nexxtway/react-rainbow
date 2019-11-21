const PageDatePicker = require('../../../src/components/DatePicker/pageObject');

const DATEPICKER = '#datePicker-13';

describe('DatePicker readOnly', () => {
    it('should not open the DatePicker when readOnly is passed and click on the input element', () => {
        const component = $(DATEPICKER);
        const datePicker = new PageDatePicker(DATEPICKER);
        browser.url('/#!/DatePicker/13');
        component.waitForExist();
        datePicker.click();
        expect(datePicker.isOpen()).toBe(false);
    });
});
