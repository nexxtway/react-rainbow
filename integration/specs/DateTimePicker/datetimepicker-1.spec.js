const PageDateTimePicker = require('../../../src/components/DateTimePicker/pageObject');

const DATETIMEPICKER = '#datetimepicker-1';

describe('DateTimePicker', () => {
    beforeAll(async () => {
        await browser.url('/#!/DateTimePicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(DATETIMEPICKER);
        await component.waitForExist();
    });
    it('should open the DateTimePicker when click on input element', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.click();
        await picker.waitUntilOpen();
        await expect(await picker.isOpen()).toBe(true);
    });
    it('should open the DateTimePicker when click on the label element', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.clickLabel();
        await picker.waitUntilOpen();
        await expect(await picker.isOpen()).toBe(true);
    });
    it('should close the DateTimePicker when click the ok button', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.click();
        await picker.waitUntilOpen();
        await picker.clickOKButton();
        await picker.waitUntilClose();
        await expect(await picker.isOpen()).toBe(false);
    });
    it('should close the DateTimePicker when click the cancel button', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.click();
        await picker.waitUntilOpen();
        await picker.clickCancelButton();
        await picker.waitUntilClose();
        await expect(await picker.isOpen()).toBe(false);
    });
    it('should set the right value when select a date', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.click();
        await picker.waitUntilOpen();
        await expect(await picker.getValue()).toBe('Friday, 10/25/2019, 10:44 AM');
        await picker.clickDay(10);
        await picker.clickOKButton();
        await picker.waitUntilClose();
        await expect(await picker.getValue()).toBe('Thursday, 10/10/2019, 10:44 AM');
    });
});
