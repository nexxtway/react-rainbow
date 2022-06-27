const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-7';

describe('WeekDayPicker readOnly', () => {
    beforeAll(async () => {
        await browser.url('/#!/WeekDayPicker/7');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(WEEKDAY_PICKER);
        await component.waitForExist();
    });
    it('should keep checkbox status when WeekDayPicker is readOnly', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['tuesday']);
        await weekDayPicker.clickOn('saturday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['tuesday']);
    });
});
