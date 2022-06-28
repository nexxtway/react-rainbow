const PageDatePicker = require('../../../src/components/DatePicker/pageObject');
const { ENTER_KEY, SPACE_KEY } = require('../../constants');

const DATEPICKER = '#datePicker-13';

describe('DatePicker readOnly', () => {
    beforeAll(async () => {
        await browser.url('/#!/DatePicker/13');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(DATEPICKER);
        await component.waitForExist();
    });
    it('should not open the DatePicker when readOnly is passed and click on the input element', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await expect(await datePicker.isOpen()).toBe(false);
    });
    it('should not open the DatePicker when readOnly is passed and enter key is pressed while the input element is focused', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await browser.keys(ENTER_KEY);
        await expect(await datePicker.isOpen()).toBe(false);
    });
    it('should not open the DatePicker when readOnly is passed and space key is pressed while the input element is focused', async () => {
        const datePicker = new PageDatePicker(DATEPICKER);
        await datePicker.click();
        await browser.keys(SPACE_KEY);
        await expect(await datePicker.isOpen()).toBe(false);
    });
});
