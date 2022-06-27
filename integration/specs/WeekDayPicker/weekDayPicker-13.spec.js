const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-13';

describe('WeekDayPicker disabled', () => {
    beforeAll(async () => {
        await browser.url('/#!/WeekDayPicker/13');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(WEEKDAY_PICKER);
        await component.waitForExist();
    });
    it('should keep checkbox status when input is disabled', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual([]);
    });
});
