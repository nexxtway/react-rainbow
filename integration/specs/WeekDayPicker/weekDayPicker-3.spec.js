const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');

const WEEKDAY_PICKER = '#weekday-picker-3';

describe('WeekDayPicker days available', () => {
    beforeAll(async () => {
        await browser.url('/#!/WeekDayPicker/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(WEEKDAY_PICKER);
        await component.waitForExist();
    });
    it('should keep uncheck status for unavailable days', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('friday');
        await weekDayPicker.clickOn('saturday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['friday']);
    });
});
