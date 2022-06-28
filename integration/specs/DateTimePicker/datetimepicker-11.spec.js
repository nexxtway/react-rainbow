const PageDateTimePicker = require('../../../src/components/DateTimePicker/pageObject');

const DATETIMEPICKER = '#datetimepicker-11';

describe('DateTimePicker', () => {
    beforeAll(async () => {
        await browser.url('/#!/DateTimePicker/11');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(DATETIMEPICKER);
        await component.waitForExist();
    });
    it('should set 12:00 AM as time when day is selected', async () => {
        const picker = new PageDateTimePicker(DATETIMEPICKER);
        await picker.click();
        await picker.waitUntilOpen();
        await expect(await picker.getTimeValue()).toBe('');
        await picker.clickDay(10);
        await expect(await picker.getTimeValue()).toBe('12:00 AM');
    });
});
