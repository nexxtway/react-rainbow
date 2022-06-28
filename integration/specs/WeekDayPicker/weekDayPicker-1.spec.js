const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');
const { TAB_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const WEEKDAY_PICKER = '#weekday-picker-1';

describe('WeekDayPicker base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/WeekDayPicker/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(WEEKDAY_PICKER);
        await component.waitForExist();
    });
    it('should check the option clicked', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('sunday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['sunday']);
    });
    it('should uncheck the previous option when another one is clicked', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await weekDayPicker.clickOn('sunday');
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['sunday']);
    });
    it('should check the left input option when press arrow left key', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('friday');
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['thursday']);
    });
    it('should check thursday when focus is on monday and press right key 3 times', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await weekDayPicker.getSelectedDays()).toEqual(['thursday']);
    });
    it('should leave focus on all inputs when press tab key', async () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        await weekDayPicker.clickOn('monday');
        await browser.keys(TAB_KEY);
        await expect(await weekDayPicker.getFocusedDay()).toBe();
    });
});
