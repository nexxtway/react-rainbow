const PageWeekDayPicker = require('../../../src/components/WeekDayPicker/pageObject');
const { TAB_KEY, ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('../../constants');

const WEEKDAY_PICKER = '#weekday-picker-1';

describe('WeekDayPicker base example', () => {
    beforeAll(() => {
        browser.url('/#!/WeekDayPicker/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(WEEKDAY_PICKER);
        component.waitForExist();
    });
    it('should check the option clicked', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('sunday');
        expect(weekDayPicker.getSelectedDays()).toEqual(['sunday']);
    });
    it('should uncheck the previous option when another one is clicked', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        weekDayPicker.clickOn('sunday');
        expect(weekDayPicker.getSelectedDays()).toEqual(['sunday']);
    });
    it('should check the left input option when press arrow left key', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('friday');
        browser.keys(ARROW_LEFT_KEY);
        expect(weekDayPicker.getSelectedDays()).toEqual(['thursday']);
    });
    it('should check thursday when focus is on monday and press right key 3 times', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys(ARROW_RIGHT_KEY);
        expect(weekDayPicker.getSelectedDays()).toEqual(['thursday']);
    });
    it('should leave focus on all inputs when press tab key', () => {
        const weekDayPicker = new PageWeekDayPicker(WEEKDAY_PICKER);
        weekDayPicker.clickOn('monday');
        browser.keys(TAB_KEY);
        expect(weekDayPicker.getFocusedDay()).toBe();
    });
});
