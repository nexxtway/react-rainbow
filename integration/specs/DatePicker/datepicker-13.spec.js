const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const { ENTER_KEY, SPACE_KEY } = require('../../constants');

const DATEPICKER = '#datePicker-13';

describe('DatePicker readOnly', () => {
    beforeAll(() => {
        browser.url('/#!/DatePicker/13');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(DATEPICKER);
        component.waitForExist();
    });
    it('should not open the DatePicker when readOnly is passed and click on the input element', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        expect(datePicker.isOpen()).toBe(false);
    });
    it('should not open the DatePicker when readOnly is passed and enter key is pressed while the input element is focused', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        browser.keys(ENTER_KEY);
        expect(datePicker.isOpen()).toBe(false);
    });
    it('should not open the DatePicker when readOnly is passed and space key is pressed while the input element is focused', () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        datePicker.click();
        browser.keys(SPACE_KEY);
        expect(datePicker.isOpen()).toBe(false);
    });
});
