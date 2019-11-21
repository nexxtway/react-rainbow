Here is an overview about how to use the DatePicker page object:

    const PageDatePicker = require('react-rainbow-components/components/DatePicker/pageObject');
    const DATEPICKER = '#datePicker-1';

    describe('DatePicker base', () => {
        beforeAll(() => {
            browser.url('/url/to/testing/page');
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
        it('should keep focus the input element when DatePicker is closed', () => {
            const datePicker = new PageDatePicker(DATEPICKER);
            datePicker.click();
            datePicker.waitUntilOpen();
            browser.keys(ESCAPE_KEY);
            expect(datePicker.hasFocusInput()).toBe(true);
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
    });
