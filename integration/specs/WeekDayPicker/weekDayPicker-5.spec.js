const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');
const { TAB_KEY, SPACE_KEY } = require('../../constants');

const WEEKDAY_PICKER = '#weekday-picker-5';

describe('WeekDayPicker multiple selection', () => {
    beforeAll(async () => {
        await browser.url('/#!/WeekDayPicker/5');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(WEEKDAY_PICKER);
        await component.waitForExist();
    });
    it('should check and uncheck multiple days', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await weekDayPicker.clickOn('friday');
        await weekDayPicker.clickOn('saturday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual([
            'monday',
            'friday',
            'saturday',
        ]);
        await weekDayPicker.clickOn('monday');
        await weekDayPicker.clickOn('friday');
        await weekDayPicker.clickOn('saturday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual([]);
    });
    it('should change focus and selection when tab key is pressed', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await browser.keys(TAB_KEY);
        await expect(await weekDayPicker.getFocusedDay()).toBe('tuesday');
    });
    it('should check input when input is focused and space key is pressed', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await browser.keys(TAB_KEY);
        await browser.keys(SPACE_KEY);
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['monday', 'tuesday']);
    });
});
